import { Spin } from 'antd';
import { connect } from 'dva';

const ModelsCache = {};

@connect((state, b, c, d) => {
  return { ...state };
})
export default function asyncComponent(cmp) {
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
      debugger;
      // 直接返回class
      // if (cmpMethod.prototype instanceof React.Component || typeof cmpMethod === 'function') {
      //   return this.setState({
      //     component: cmpMethod,
      //     model: null,
      //   });
      // }

      // 返回异步组件及model
      const { entry = {}, models = [] } = cmpMethod;

      Promise.all([entry, ...models]).then((arr) => {
        const [c, m] = arr;

        if (m) {
          console.log(m)
          window.AppInstance.model(m.default);
        }

        // setTimeout(() => {
        this.setState({
          component: c.default || c,
          model: m.default || m,
        });
        // }, 300)

      })
        .catch((a, b, c) => {

        });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <div>Loading...</div>;
    }
  }

  return AsyncCmp;
}
