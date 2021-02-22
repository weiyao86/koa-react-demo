// import { Spin } from 'antd';
import { connect } from 'dva';

const ModelsCache = {};

export default function asyncComponent(cmp) {
  @connect((state) => state)
  class AsyncCmp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
        model: null,
      };
    }

    componentDidMount() {
      const { globalModel } = this.props;
      const cmpMethod = cmp();
      
      // 返回异步组件及model
      const { entry = null, models = [] } = cmpMethod;

      Promise.all([entry, ...models])
        .then((arr) => {
          let c = {};
          let m = [];
          arr.forEach((item) => {
            let itemDefault=item && item.default;
            if (itemDefault && itemDefault.prototype instanceof React.Component) {
              c = itemDefault;
            } else {
              m.push(itemDefault);
            }
          });

          if (m) {
            console.log(window.AppInstance);

            m.forEach((item) => {
              window.AppInstance.model(item);
            });
          }

          this.setState({
            component: c,
            model: m,
          });
        })
        .catch((a, b, c) => {});
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <div>Loading...</div>;
    }
  }

  return AsyncCmp;
}
