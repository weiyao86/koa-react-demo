(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{520:function(t,e,n){},523:function(t,s,p){"use strict";p.r(s),function(e){p(212),p(213),p(214),p(110),p(215),p(111),p(216),p(112),p(155),p(156),p(303),p(27);var t=p(176);p(520);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=l(n);return t=r?(t=l(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?f(e):t}}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}t=Object(t.connect)(function(t){return t})(t=function(){i(c,e.Component);var o=a(c);function c(t){var e,n,r;return u(this,c),e=o.call(this,t),n=f(e),r=function(){e.setState(function(t){return{star:!t.star}})},(t="handleStar")in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,e.state={star:!1},e}return n(c,[{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){document.body,t.props.history.push({search:"{name:'jack',age:20}"}),t.setState({})},2e3)}},{key:"render",value:function(){var t=this.state.star;return e.createElement(e.Fragment,null,e.createElement("p",{onClick:this.handleStar.bind(null,t)},"start"),"main",e.createElement("div",{className:"star"},"⭐"))}}]),c}())||t;s.default=t}.call(this,p(0))}}]);