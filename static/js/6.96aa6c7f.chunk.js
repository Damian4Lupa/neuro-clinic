(this.webpackJsonpneuroclinic=this.webpackJsonpneuroclinic||[]).push([[6],{103:function(e,t,a){},104:function(e,t,a){e.exports=a.p+"static/media/history1-500.21893b1c.jpg"},105:function(e,t,a){e.exports=a.p+"static/media/history1-300.c7b999e6.jpg"},106:function(e,t,a){e.exports=a.p+"static/media/history2-500.58c67a71.jpg"},107:function(e,t,a){e.exports=a.p+"static/media/history2-300.ced3ded4.jpg"},108:function(e,t,a){e.exports=a.p+"static/media/now1-500.a322a6ca.jpg"},109:function(e,t,a){e.exports=a.p+"static/media/now1-300.3ff84128.jpg"},110:function(e,t,a){e.exports=a.p+"static/media/now2-500.bcc05c59.jpg"},111:function(e,t,a){e.exports=a.p+"static/media/now2-300.7ad99c54.jpg"},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){e.exports=a.p+"static/media/about1-450.21ddf30f.jpg"},115:function(e,t,a){e.exports=a.p+"static/media/about1-300.94beeac4.jpg"},116:function(e,t,a){e.exports=a.p+"static/media/about2-450.3037bae1.jpg"},117:function(e,t,a){e.exports=a.p+"static/media/about2-300.60e7cb52.jpg"},118:function(e,t,a){e.exports=a.p+"static/media/about3-450.7006f54f.jpg"},119:function(e,t,a){e.exports=a.p+"static/media/about3-300.c4590a27.jpg"},120:function(e,t,a){"use strict";function n(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(10)),i=a(0),s=n(i),c=n(a(121)),u=n(a(122));function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?g(e):t}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,r=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(u){r=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e,t){var a=t.decimal,n=t.decimals,r=t.duration,i=t.easingFn,s=t.end,c=t.formattingFn,o=t.prefix,l=t.separator,m=t.start,d=t.suffix,p=t.useEasing;return new u(e,m,s,n,r,{decimal:a,easingFn:i,formattingFn:c,separator:l,prefix:o,suffix:d,useEasing:p,useGrouping:!!l})},v=function(e){function t(){var e,a;o(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return m(g(a=b(this,(e=p(t)).call.apply(e,[this].concat(r)))),"createInstance",(function(){return"function"===typeof a.props.children&&c(a.containerRef.current&&(a.containerRef.current instanceof HTMLElement||a.containerRef.current instanceof SVGTextElement||a.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),h(a.containerRef.current,a.props)})),m(g(a),"pauseResume",(function(){var e=g(a),t=e.reset,n=e.restart,r=e.update,i=a.props.onPauseResume;a.instance.pauseResume(),i({reset:t,start:n,update:r})})),m(g(a),"reset",(function(){var e=g(a),t=e.pauseResume,n=e.restart,r=e.update,i=a.props.onReset;a.instance.reset(),i({pauseResume:t,start:n,update:r})})),m(g(a),"restart",(function(){a.reset(),a.start()})),m(g(a),"start",(function(){var e=g(a),t=e.pauseResume,n=e.reset,r=e.restart,i=e.update,s=a.props,c=s.delay,u=s.onEnd,o=s.onStart,l=function(){return a.instance.start((function(){return u({pauseResume:t,reset:n,start:r,update:i})}))};c>0?a.timeoutId=setTimeout(l,1e3*c):l(),o({pauseResume:t,reset:n,update:i})})),m(g(a),"update",(function(e){var t=g(a),n=t.pauseResume,r=t.reset,i=t.restart,s=a.props.onUpdate;a.instance.update(e),s({pauseResume:n,reset:r,start:i})})),m(g(a),"containerRef",s.createRef()),a}var a,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,a=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==a||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,a=t.end,n=t.start,r=t.suffix,i=t.prefix,s=t.redraw,c=t.duration,u=t.separator,o=t.decimals,l=t.decimal;return c!==e.duration||a!==e.end||n!==e.start||r!==e.suffix||i!==e.prefix||u!==e.separator||o!==e.decimals||l!==e.decimal||s}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.end,n=t.start,r=t.suffix,i=t.prefix,s=t.duration,c=t.separator,u=t.decimals,o=t.decimal,l=t.preserveValue;s===e.duration&&n===e.start&&r===e.suffix&&i===e.prefix&&c===e.separator&&u===e.decimals&&o===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),a!==e.end&&(l||this.instance.reset(),this.instance.update(a))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.style,r=this.containerRef,i=this.pauseResume,c=this.reset,u=this.restart,o=this.update;return"function"===typeof t?t({countUpRef:r,pauseResume:i,reset:c,start:u,update:o}):s.createElement("span",{className:a,ref:r,style:n})}}])&&l(a.prototype,n),r&&l(a,r),t}(i.Component);m(v,"propTypes",{decimal:r.string,decimals:r.number,delay:r.number,easingFn:r.func,end:r.number.isRequired,formattingFn:r.func,onEnd:r.func,onStart:r.func,prefix:r.string,redraw:r.bool,separator:r.string,start:r.number,startOnMount:r.bool,suffix:r.string,style:r.object,useEasing:r.bool,preserveValue:r.bool}),m(v,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var x={innerHTML:null};t.default=v,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},v.defaultProps,{},e),a=t.start,n=t.formattingFn,r=E(i.useState("function"===typeof n?n(a):a),2),s=r[0],c=r[1],u=i.useRef(null),o=function(){var e=u.current;if(null!==e)return e;var a=function(){var e=h(x,t),a=e.options.formattingFn;return e.options.formattingFn=function(){var e=a.apply(void 0,arguments);c(e)},e}();return u.current=a,a},l=function(){var e=t.onReset;o().reset(),e({pauseResume:f,start:p,update:g})},p=function e(){var a=t.onStart,n=t.onEnd;o().reset(),o().start((function(){n({pauseResume:f,reset:l,start:e,update:g})})),a({pauseResume:f,reset:l,update:g})},f=function(){var e=t.onPauseResume;o().pauseResume(),e({reset:l,start:p,update:g})},g=function(e){var a=t.onUpdate;o().update(e),a({pauseResume:f,reset:l,start:p})};return i.useEffect((function(){var e=t.delay,a=t.onStart,n=t.onEnd;if(t.startOnMount)var r=setTimeout((function(){a({pauseResume:f,reset:l,update:g}),o().start((function(){clearTimeout(r),n({pauseResume:f,reset:l,start:p,update:g})}))}),1e3*e);return l}),[]),{countUp:s,start:p,pauseResume:f,reset:l,update:g}}},121:function(e,t,a){"use strict";var n=function(){};e.exports=n},122:function(e,t,a){var n,r;void 0===(r="function"===typeof(n=function(e,t,a){return function(e,t,a,n,r,i){function s(e){return"number"==typeof e&&!isNaN(e)}var c=this;if(c.version=function(){return"1.9.3"},c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,a,n){return a*(1-Math.pow(2,-10*e/n))*1024/1023+t},formattingFn:function(e){var t,a,n,r,i,s,u=e<0;if(e=Math.abs(e).toFixed(c.decimals),a=(t=(e+="").split("."))[0],n=t.length>1?c.options.decimal+t[1]:"",c.options.useGrouping){for(r="",i=0,s=a.length;i<s;++i)0!==i&&i%3===0&&(r=c.options.separator+r),r=a[s-i-1]+r;a=r}return c.options.numerals.length&&(a=a.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]})),n=n.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]}))),(u?"-":"")+c.options.prefix+a+n+c.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var u in c.options)i.hasOwnProperty(u)&&null!==i[u]&&(c.options[u]=i[u]);""===c.options.separator?c.options.useGrouping=!1:c.options.separator=""+c.options.separator;for(var o=0,l=["webkit","moz","ms","o"],m=0;m<l.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[l[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[m]+"CancelAnimationFrame"]||window[l[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var a=(new Date).getTime(),n=Math.max(0,16-(a-o)),r=window.setTimeout((function(){e(a+n)}),n);return o=a+n,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),c.initialize=function(){return!!c.initialized||(c.error="",c.d="string"==typeof e?document.getElementById(e):e,c.d?(c.startVal=Number(t),c.endVal=Number(a),s(c.startVal)&&s(c.endVal)?(c.decimals=Math.max(0,n||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(r)||2e3,c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.initialized=!0,!0):(c.error="[CountUp] startVal ("+t+") or endVal ("+a+") is not a number",!1)):(c.error="[CountUp] target is null or undefined",!1))},c.printValue=function(e){var t=c.options.formattingFn(e);"INPUT"===c.d.tagName?this.d.value=t:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=t:this.d.innerHTML=t},c.count=function(e){c.startTime||(c.startTime=e),c.timestamp=e;var t=e-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.options.easingFn(t,0,c.startVal-c.endVal,c.duration):c.frameVal=c.options.easingFn(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(t/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(e){c.initialize()&&(c.callback=e,c.rAF=requestAnimationFrame(c.count))},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.initialized=!1,c.initialize()&&(cancelAnimationFrame(c.rAF),c.printValue(c.startVal))},c.update=function(e){if(c.initialize()){if(!s(e=Number(e)))return void(c.error="[CountUp] update() - new endVal is not a number: "+e);c.error="",e!==c.frameVal&&(cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=e,c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count))}},c.initialize()&&c.printValue(c.startVal)}})?n.call(t,a,t,e):n)||(e.exports=r)},123:function(e,t,a){},124:function(e,t,a){e.exports=a.p+"static/media/awards.ade675a8.svg"},125:function(e,t,a){e.exports=a.p+"static/media/departments.86a153b8.svg"},126:function(e,t,a){e.exports=a.p+"static/media/doctors.49b34f05.svg"},127:function(e,t,a){e.exports=a.p+"static/media/research.591e9702.svg"},176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(103),a(104)),s=a.n(i),c=a(105),u=a.n(c),o=a(106),l=a.n(o),m=a(107),d=a.n(m),p=a(108),f=a.n(p),g=a(109),b=a.n(g),E=a(110),h=a.n(E),v=a(111),x=a.n(v);var w=function(){return r.a.createElement("section",{id:"about-history"},r.a.createElement("article",{className:"row"},r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"section-title"},r.a.createElement("header",null,r.a.createElement("h2",{className:"ser-title"},"The beginnings...")),r.a.createElement("hr",{className:"botm-line"})),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat."),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati placeat possimus eaque ullam, earum architecto ea vitae facere, atque ducimus, est sit quia incidunt ut unde molestias neque fuga reprehenderit!")),r.a.createElement("div",{className:"col-5"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"".concat(u.a," 1x"),media:"(max-width: 1000px)"}),r.a.createElement("img",{srcSet:"".concat(s.a," 2x"),className:"responsive img-right",alt:"first operation in the clinic"})))),r.a.createElement("article",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"".concat(d.a," 1x"),media:"(max-width: 1000px)"}),r.a.createElement("img",{srcSet:"".concat(l.a," 2x"),className:"responsive img-left",alt:"clinic founders: J. Abrams, E. Craft, D. Neddy"}))),r.a.createElement("div",{className:"col-7"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat."),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati placeat possimus eaque ullam, earum architecto ea vitae facere, atque ducimus, est sit quia incidunt ut unde molestias neque fuga reprehenderit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien."))),r.a.createElement("article",{className:"row"},r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"section-title"},r.a.createElement("header",null,r.a.createElement("h2",{className:"ser-title mt-4"},"...and now")),r.a.createElement("hr",{className:"botm-line"})),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat."),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati placeat possimus eaque ullam, earum architecto ea vitae facere, atque ducimus, est sit quia incidunt ut unde molestias neque fuga reprehenderit!")),r.a.createElement("div",{className:"col-5"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"".concat(x.a," 1x"),media:"(max-width: 1000px)"}),r.a.createElement("img",{srcSet:"".concat(h.a," 2x"),className:"responsive img-right-2",alt:"Dave Graham, current medical director and chairman of the board"})))),r.a.createElement("article",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"".concat(b.a," 1x"),media:"(max-width: 1000px)"}),r.a.createElement("img",{srcSet:"".concat(f.a," 2x"),className:"responsive img-left",alt:"Dave Graham, current Chief Medical Officer"}))),r.a.createElement("div",{className:"col-7"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat."),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati placeat possimus eaque ullam, earum architecto ea vitae facere, atque ducimus, est sit quia incidunt ut unde molestias neque fuga reprehenderit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien."))))},y=a(9);a(112);var N=function(){return r.a.createElement("section",{id:"meet-us"},r.a.createElement("div",{className:"row"},r.a.createElement("article",{className:"col team"},r.a.createElement(y.c,{to:"/Doctors"},r.a.createElement("h2",null,"meet our team"))),r.a.createElement("article",{className:"col service"},r.a.createElement(y.c,{to:"/Service"},r.a.createElement("h2",null,"see our services")))))},V=(a(113),a(114)),q=a.n(V),R=a(115),S=a.n(R),j=a(116),O=a.n(j),F=a(117),T=a.n(F),A=a(118),D=a.n(A),C=a(119),U=a.n(C);var P=function(){return r.a.createElement("section",{id:"about-card",className:"home-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-deck text-center"},r.a.createElement("article",{className:"card"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"".concat(U.a," 1x"),media:"(max-width: 1000px)"}),r.a.createElement("img",{srcSet:"".concat(D.a," 2x"),className:"card-img-top",alt:""})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Card title"),r.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")),r.a.createElement("div",{className:"card-footer",type:"button"},r.a.createElement("span",null,"read more"))),r.a.createElement("article",{className:"card"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"".concat(S.a," 1x"),media:"(max-width: 1000px)"}),r.a.createElement("img",{srcSet:"".concat(q.a," 2x"),className:"card-img-top",alt:""})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Clinical tests"),r.a.createElement("p",{className:"card-text"},"This card has supporting text below as a natural lead-in to additional content.")),r.a.createElement("div",{className:"card-footer",type:"button"},r.a.createElement("span",null,"read more"))),r.a.createElement("article",{className:"card"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"".concat(T.a," 1x"),media:"(max-width: 1000px)"}),r.a.createElement("img",{srcSet:"".concat(O.a," 2x"),className:"card-img-top",alt:""})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Internship program"),r.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")),r.a.createElement("div",{className:"card-footer",type:"button"},r.a.createElement("span",null,"read more"))))))},L=a(96),M=a(51),k=a.n(M),I=a(120),_=a.n(I),z=(a(123),a(124)),G=a.n(z),H=a(125),J=a.n(H),B=a(126),W=a.n(B),K=a(127),Q=a.n(K);var X=function(){var e=Object(n.useState)(!1),t=Object(L.a)(e,2),a=t[0],i=t[1];k()(window).scroll((function(){var e=k()(document).scrollTop(),t=0,a=k()("#counter");a.length&&(t=a.offset().top-550),i(e>t)}));var s=a?r.a.createElement(_.a,{end:20}):0,c=a?r.a.createElement(_.a,{end:18}):0,u=a?r.a.createElement(_.a,{end:8}):0,o=a?r.a.createElement(_.a,{end:43}):0;return r.a.createElement("section",{id:"counter",className:"home-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("article",{className:"col-lg-3 col-md-6 d-md-flex"},r.a.createElement("div",{className:"counter-box"},r.a.createElement("img",{src:W.a,alt:"doctors"}),r.a.createElement("span",{"data-toggle":"counter-up"},s),r.a.createElement("p",null,r.a.createElement("strong",null,"Doctors")," consequuntur quae qui deca rode adipisci commodi"))),r.a.createElement("article",{className:"col-lg-3 col-md-6 d-md-flex"},r.a.createElement("div",{className:"counter-box"},r.a.createElement("img",{src:J.a,alt:""}),r.a.createElement("span",{"data-toggle":"counter-up"},c),r.a.createElement("p",null,r.a.createElement("strong",null,"Departments")," adipisci atque cum quia aut numquam commodi delectus"))),r.a.createElement("article",{className:"col-lg-3 col-md-6 d-md-flex"},r.a.createElement("div",{className:"counter-box"},r.a.createElement("img",{src:Q.a,alt:""}),r.a.createElement("span",{"data-toggle":"counter-up"},u),r.a.createElement("p",null,r.a.createElement("strong",null,"Research Lab")," aut commodi quaerat. Aliquam ratione"))),r.a.createElement("article",{className:"col-lg-3 col-md-6 d-md-flex"},r.a.createElement("div",{className:"counter-box"},r.a.createElement("img",{src:G.a,alt:""}),r.a.createElement("span",{"data-toggle":"counter-up"},o),r.a.createElement("p",null,r.a.createElement("strong",null,"Awards")," rerum asperiores dolor molestiae doloribu"))))))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"about",className:"home-section"},r.a.createElement("div",{className:"container"},r.a.createElement(w,null))),r.a.createElement(X,null),r.a.createElement(N,null),r.a.createElement(P,null))}}}]);
//# sourceMappingURL=6.96aa6c7f.chunk.js.map