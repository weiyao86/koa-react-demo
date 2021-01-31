import './style.less';
class Class extends React.Component {

  flattenRouters = arr =>
    arr.reduce((prev, item) => {
      const isArray = Array.isArray(item.routes);
      prev.push(item);
      return isArray ? prev.concat(flattenRouters(item.routes)) : prev;
    }, []);

  routeWithSubRoutes(route) {
    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={props => (route.render ? route.render({ ...props, route }) : <route.component {...props} routes={route.routes} />)}
      />
    );
  }
  render() {
    const { app, routerConfig } = this.props;
    curRouterConfig = this.flattenRouters(routerConfig);
    return (<div className="layout-main">
      <Switch>
        {curRouterConfig.map((route, i) => this.routeWithSubRoutes(route))}
      </Switch>
    </div>);
  }
}
export default Class;