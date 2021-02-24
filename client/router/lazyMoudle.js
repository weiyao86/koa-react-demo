// import { Spin } from 'antd';
import { connect } from 'dva';

const appInstance = window.AppInstance;
const modelsCache = {};
//the model only load once
const registerModel = (model) => {
  if (model.namespace && !modelsCache[model.namespace]) {
    window.AppInstance.model(model);
    modelsCache[model.namespace] = 1;
  }
};

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
            let itemDefault = item && item.default;
            if (itemDefault && itemDefault.prototype instanceof React.Component) {
              c = itemDefault;
            } else {
              m.push(itemDefault);
            }
          });

          if (m) {
            m.forEach((item) => {
              registerModel(item);
            });
          }
          this.setState({
            component: c,
            model: m,
          });
        })
        .catch(err => {
          console.log('catch',err);
        });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : <div>Loading...</div>;
    }
  }

  return AsyncCmp;
}
