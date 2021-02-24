import { Switch, Route, withRouter, Link } from 'dva/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './style.less';
function Test() {
  return <div>TESTTESTTESTTESTTEST</div>;
}
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
    // <Route component>：在地址匹配的时候React的组件才会被渲染，route props也会随着一起被渲染；

    // <Route render>：这种方式对于内联渲染和包装组件却不引起意料之外的重新挂载特别方便；

    // <Route children>：与render属性的工作方式基本一样，除了它是不管地址匹配与否都会被调用；

    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        // children={(props) =><route.component {...props} routes={route.routes} className='fade' />}
        render={(props) => (route.render ? route.render({ ...props, route }) : <route.component {...props} routes={route.routes} className='fade' />)}
      />
    );
  }
  render() {
    const { app, routerConfig, history } = this.props;

    const curRouterConfig = this.flattenRouters(routerConfig);

    return (
      <div className='layout-main'>
        <TransitionGroup className='todo-list' childFactory={(child) => React.cloneElement(child, { classNames: history.action })}>
          <CSSTransition in={true} timeout={300} classNames='fade' key={location.pathname} unmountOnExit>
            <Switch>{curRouterConfig.map((route, i) => this.routeWithSubRoutes(route))}</Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
export default Class;
