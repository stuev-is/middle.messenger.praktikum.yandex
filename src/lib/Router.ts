class Route {
    _pathname: string;
    _blockClass: any;
    _block: any;
    _props: any;
    __instance: any;

    constructor(pathname: string, view: any, props: any) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }
  
    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    match(pathname: string) {
        return pathname === this._pathname;
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass({}, this._props.rootQuery);
            return;
        }

        this._block.insertBlock();
    }
}
  
export default class Router {

    routes: Route[];
    history: any
    _currentRoute: Route | null;
    _rootQuery: string;
    protected static __instance: Router;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
      }

    use(pathname: string, page: any) {
        const route = new Route(pathname, page, {rootQuery: this._rootQuery});

        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = ((event: any) => {
            this._onRoute(event?.currentTarget?.location?.pathname);
        }).bind(this);

        this._onRoute(window.location.pathname);
    }
  
    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        // if (this._currentRoute && this._currentRoute !== route) {
        //     this._currentRoute.leave();
        // }

        this._currentRoute = route;
        route.render();
        document.querySelectorAll('[href^="/"]').forEach(el => 
            el.addEventListener("click", (evt: Event) => {
              evt.preventDefault();
              if(evt.target) {
                  const {pathname: path} = new URL(evt.target.href as string);
                  window.history.pushState({path}, path, path);
                  this._onRoute(path);
              }
            })
          );
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }
  
    back() {
        this.history.back();
    }
  
    forward() {
        this.history.forward();
    }
  
    getRoute(pathname: string) {
        return this.routes.find((route: Route) => route.match(pathname));
    }
}
  