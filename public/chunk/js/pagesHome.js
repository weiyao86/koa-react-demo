(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{667:function(t,e,n){"use strict";n.r(e);n(174),n(172),n(354),n(355),n(173),n(353),n(42);var o=n(660),r=n(97),c=n(330),a=n(0),u=n.n(a);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=d(t);if(e){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}o.a.TweenOneGroup,u.a.Component;var g=function(){var t=[];function e(n){var o=t.shift();o&&o(e)}return{add:function(e){"function"==typeof e&&t.push(e)},getQueue:function(){return t},clear:function(){t.length=0},trigger:function(){e()}}}(),w=function(t){y(n,t);var e=h(n);function n(){var t;l(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return f(v(t=e.call.apply(e,[this].concat(r))),"state",{star:!1,current:0}),f(v(t),"timeTotal",1e4),f(v(t),"calcCount",0),f(v(t),"onStart",(function(){var e=v(t);t.calcCount=0,t.setRandom().forEach((function(n,o){var r=n/100*t.timeTotal;g.add((function(t){console.log("当前步骤=>".concat(o+1)),e.doneByTime({next:t,totalTime:r,percent:n,cb:function(t){console.log(t+"---步骤".concat(o+1)),0==g.getQueue().length&&console.timeEnd("time")}})}))})),console.time("time"),g.trigger()})),t}return p(n,[{key:"setRandom",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=t-1,o=e,r=[];n--;){var c=Math.ceil(Math.random()*(o/2));r.push(c),o-=c}return r.push(o),r}},{key:"doneByTime",value:function(t){var e=this,n=t.next,o=t.totalTime,r=t.percent,c=t.cb,a=+new Date,u=null,i=0,f=16.733*r/o;!function t(){var l=+new Date,s=l-a;s>=o&&(s=o);var p=s/o;if(e.calcCount+=f,e.setState({current:e.calcCount}),p<1){var y=16.733-(l-(a+16.733*i));y<0&&(y=0),u=setTimeout(t,Math.min(16.733,y))}else clearTimeout(u),"function"==typeof c&&c("进度:".concat(r,"--总进度:").concat(e.calcCount,"---次数:").concat(i,"---块时间:").concat(o)),n();i++}()}},{key:"render",value:function(){var t=this,e=this.state.current;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",{className:"wrap"},"Home"),u.a.createElement(o.a,{animation:{x:50},onChange:function(t){}},u.a.createElement(r.a,{onClick:function(){return t.onStart()}},"Demo")),u.a.createElement(c.a,{strokeColor:{"0%":"#108ee9","100%":"#87d068"},percent:e}))}}]),n}(u.a.Component);e.default=w}}]);
//# sourceMappingURL=pagesHome.js.map