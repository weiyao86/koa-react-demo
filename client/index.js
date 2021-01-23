// import 'core-js/es6/set';
// import 'core-js/es6/map';//core-js/es6/set  @2.x版本无问题，@3.x版本无效
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery'; //测试外部externals 
import './resource/style/index.css';
import './resource/style/index.scss';
import './resource/style/index.less';
import './demo.js';

class Main extends React.Component {


  hander = () => {
    let obj = Object.assign({ name: 'abc' }, { name: 'second', age: 23 });
    alert(JSON.stringify(obj))
  }
  render() {
    return (<div className="wrap" onClick={this.hander}>react test haha fafassaafasd</div>);
  }
}

ReactDom.render(<Main></Main>, document.getElementById("app"));


//配置热更新模块，无刷新[需配置devServer]
// if (module.hot) {
//   module.hot.accept('./demo.js', function () {
//     console.log('module.hot.accept')
//   })
//   module.hot.accept('./index.js', function () {
//     console.log('module.hot.accept.index')
//   })
// }