(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{662:function(t,e,n){},665:function(t,e,n){"use strict";n.r(e),function(t){n(353),n(24);var r=n(237);n(662);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(l,e);var n,r,o,a=i(l);function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),s(f(e=a.call(this,t)),"handleStar",(function(){e.setState((function(t){return{star:!t.star}}))})),e.state={star:!1},e}return n=l,(r=[{key:"componentDidMount",value:function(){var t=this;console.log(this.context,"context"),document.body,setTimeout((function(){t.props.history.push({search:"{name:'jack',age:20}"})}),2e3)}},{key:"render",value:function(){var e=this.state.star;return console.log(this.props.location),t.createElement(t.Fragment,null,t.createElement("p",{onClick:this.handleStar.bind(null,e)},"start"),"main",t.createElement("div",{className:"star"},"⭐"))}}])&&c(n.prototype,r),o&&c(n,o),l}(t.Component);s(p,"contextType",r.a),e.default=p}.call(this,n(0))}}]);
//# sourceMappingURL=pagesMain.js.map