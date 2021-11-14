import Block from "./Block";
import isEqual from "./isEqual";

type MapStateToProps = (state: Record<string, any>) => Record<string, any> | null
type Subscription = {
    component: Block;
    mapStateToProps: MapStateToProps;
}

export default class Store {
    _state: Record<string, any>;
    _subscriptions: Array<Subscription>;
    protected static __instance: Store;

    constructor(initialState: Record<string, any>) {
        if (Store.__instance) {
            return Store.__instance;
        }

        this._state = initialState;
        this._subscriptions = [];
        Store.__instance = this;
    }

    getState() {
        return this._state;
    }

    setState(prop: string, value: any) {
        if(!isEqual(this._state[prop], value)) {
            this._state[prop] = value;
            this._subscriptions.forEach(subs => {
                const newProps = subs.mapStateToProps(this._state);
                if (newProps) {
                    subs.component.setProps(newProps);
                }
            })
        }
    }

    connect(component: Block, mapStateToProps: MapStateToProps) {
        this._subscriptions.push({component, mapStateToProps});
    }
}
  