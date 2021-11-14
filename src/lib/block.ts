import {v4 as makeUUID} from 'uuid';

import EventBus from "./event-bus";
import Store from './Store';

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
    _isConnected: boolean;
  

    constructor(props: Props = {}, elementToReplaceId: string, isConnected = false) {
      const eventBus = new EventBus();
      this._meta = {
        tagName: 'div',
        props,
        elementToReplaceId,
      };
  
      this.props = this._makePropsProxy(props);

      this._id = makeUUID();
      this._isConnected = isConnected;

      this.eventBus = () => eventBus;
      this._registerEvents(eventBus);
      eventBus.emit(Block.EVENTS.FLOW_CDM);
    }
  
    _registerEvents(eventBus: EventBus) {
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_RENDER, this.insertBlock);
      eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate);
    }

    _mapStateToProps(state: Record<string, any>): Record<string, any> | null {
      return null;
    }
  
    _componentDidMount() {
      const store = new Store({});
      if(this._isConnected) {
        store.connect(this, this._mapStateToProps);
      }
      this.componentDidMount();
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  
    componentDidMount(oldProps?: Props): void {
        return;
    }
  
    _componentDidUpdate = (oldProps: Props, newProps: Props) => {
      const result = this.componentDidUpdate(oldProps, newProps);
      if(result) {
        const content = this.getContent() as HTMLElement;
        const oldEvents = oldProps.events || {};
        Object.keys(oldEvents).forEach(eventName => {
          content && content.removeEventListener(eventName, oldEvents[eventName]);
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

    afterRender() {
      return;
    }
  
    insertBlock = () => {
      const block = this.render();
  
      const el = document.getElementById(this._meta.elementToReplaceId);
      if(el && block) {
        el.innerHTML = block
      } 

      this.afterRender();
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
      return document.getElementById(this._meta.elementToReplaceId)?.childNodes[0];
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