// import { Spin } from 'antd';
import { connect } from 'dva';

const ModelsCache = {};

@connect(state => state)
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
      
      // 直接返回class
      // if (cmpMethod.prototype instanceof React.Component || typeof cmpMethod === 'function') {
      //   return this.setState({
      //     component: cmpMethod,
      //     model: null,
      //   });
      // }

      // 返回异步组件及model
      const { entry = null, models = [] } = cmpMethod;

      Promise.all([entry, ...models]).then((arr) => {
        let c={};
        let m=[];
        arr.forEach(item=>{
          if(item.default && item.default.prototype instanceof React.Component || typeof cmpMethod === 'function'){
            c=item;
          }else{
            m.push(item);
          }
        })
        
        if (m) {
          console.log(window.AppInstance)
          
          m.forEach(item=>{
            window.AppInstance.model(item.default);
          })
        }

        this.setState({
          component: c.default || c,
          model: m,
        });
      }).catch((a, b, c) => {

        });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <div>Loading...</div>;
    }
  }

  return AsyncCmp;
}
