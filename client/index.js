import './resource/style/index.css';
import './demo.js';
 console.log('demo')
 console.warn('test222533')

 //配置热更新模块，无刷新
 if(module.hot){
    module.hot.accept('./demo.js',function(){
        console.log('module.hot.accept')
    })
}