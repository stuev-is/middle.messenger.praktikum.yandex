import {v4 as makeUUID} from 'uuid';

import EventBus from "./event-bus";

type Props = Record<string, any>;

export default abstract class Block {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_RENDER: "flow:render",
      FLOW_CDU: 'flow:component-did-update',
    };
  
    _element: HTMLElement | null = null;
    _meta: {tagName: string; props: Props, elementToReplaceId: string};

    props: Props;

    eventBus: () => EventBus;

    listeners: Record<string, () => void> = {};

    _id: string;
  

    constructor(props = {} as Props, elementToReplaceId: string ) {
      const eventBus = new EventBus();
      this._meta = {
        tagName: 'div',
        props,
        elementToReplaceId,
      };
  
      this.props = this._makePropsProxy(props);
  
      this.eventBus = () => eventBus;
  
      this._registerEvents(eventBus);
      eventBus.emit(Block.EVENTS.INIT);

      this._id = makeUUID();
    }
  
    _registerEvents(eventBus: EventBus) {
      eventBus.on(Block.EVENTS.INIT, this.init);
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount);
      eventBus.on(Block.EVENTS.FLOW_RENDER, this._render);
      eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate);
    }
  
    _createResources() {
      const { tagName } = this._meta;
      this._element = this._createDocumentElement(tagName);
    }
  
    init = () => {
      this._createResources();
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
  
    _componentDidMount = () => {
      this.componentDidMount();
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  
    componentDidMount(oldProps?: Props): void {
        return;
    }
  
    _componentDidUpdate = (oldProps: Props, newProps: Props) => {
      const result = this.componentDidUpdate(oldProps, newProps);
      if(result) {
        const oldEvents = oldProps.events || {};
        Object.keys(oldEvents).forEach(eventName => {
          this._element && this._element.removeEventListener(eventName, oldEvents[eventName]);
        });
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
      }
    }
  
    componentDidUpdate(oldProps: Props, newProps: Props): boolean {
        return true;
    }
  
    setProps = (nextProps: Props) => {
      if (!nextProps) {
        return;
      }
      const oldProps = Object.assign({}, this.props)
      const newProps = Object.assign(this.props, nextProps);
      this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, newProps);
    };
  
    getElement() {
      return this._element;
    }
  
    _render = () => {
      const block = this.render();

      if(this._element && block) {
        this._element.innerHTML = block;
      }

      this._addEvents();
    }
  
    abstract render(): string | null;

    _addEvents() {
      const {events = {}} = this.props;

      const content = this.getContent() as HTMLElement;
  
      Object.keys(events).forEach(eventName => {
        content && content.addEventListener(eventName, events[eventName]);
      });
    }
  
    getContent() {
      return this._element?.childNodes[0];
    }
  
    _makePropsProxy = (props: Props) => {
      return new Proxy(props, {
        get(target, prop: string) {
          if (prop.indexOf('_') === 0) {
            throw new Error('Нет прав');
          }
      
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        },
        set(target, prop: string, val) {
          if (prop.indexOf('_') === 0) {
            throw new Error('Нет прав');
          }
          target[prop] = val;
          return true;
        },
        deleteProperty() {
          throw new Error('Нет доступа');
        }
      });
    }
  
    _createDocumentElement(tagName: string) {
      return document.createElement(tagName);
    }

    insertElement() {
      const elementToReplace = document.getElementById(this._meta.elementToReplaceId);
      if(elementToReplace) {
        elementToReplace.replaceWith(this.getElement() as Node)
      }
    }
  
    show() {
        if(this._element) {
            this._element.style.display = 'block'
        }
    }
  
    hide() {
        if(this._element) {
            this._element.style.display = 'none'
        }
    }
}