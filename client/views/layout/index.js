import { Switch, Route,withRouter } from 'dva/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './style.less';

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
};
@withRouter
class Class extends React.Component {
  flattenRouters = (arr) =>
    arr.reduce((prev, item) => {
      const isArray = Array.isArray(item.routes);
      prev.push(item);
      return isArray ? prev.concat(flattenRouters(item.routes)) : prev;
    }, []);

  routeWithSubRoutes(route) {
    return <Route key={route.path} path={route.path} exact={route.exact} render={(props) => (route.render ? route.render({ ...props, route }) : <route.component {...props} routes={route.routes} className='fade' />)} />;
  }
  render() {
    const { app, routerConfig ,history} = this.props;

    const curRouterConfig = this.flattenRouters(routerConfig);
    console.log(curRouterConfig);
    // ANIMATION_MAP[this.props.history.action]
    // debugger;
    return (
      <div className='layout-main'>
        <TransitionGroup className='todo-list' childFactory={(child) => React.cloneElement(child, { classNames: history.action })}>
          <CSSTransition in={true} timeout={300} classNames='star' key={location.pathname} unmountOnExit>
            <Switch>{curRouterConfig.map((route, i) => this.routeWithSubRoutes(route))}</Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
export default Class;
