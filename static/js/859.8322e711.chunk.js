(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{4859:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return u}});var i=o(9439),s=o(2791),n=o(2602),r=o.n(n),a=o(184),h={container:{minHeight:"calc(100vh - 50px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},title:{color:"white",fontWeight:500,fontSize:48,textAlign:"center"}};function u(){var t=(0,s.useState)(null),e=(0,i.Z)(t,2),o=e[0],n=e[1],u=(0,s.useRef)(null);return(0,s.useEffect)((function(){return o||n(r()({el:u.current})),function(){o&&o.destroy()}}),[o]),(0,a.jsx)("div",{ref:u,style:h.container,children:(0,a.jsx)("h1",{style:h.title,children:"Contact App Welcome Page"})})}},2602:function(t,e,o){var i=o(861).default,s=o(1655).default,n=o(6389).default,r=o(6690).default,a=o(9728).default;"undefined"!=typeof self&&self,t.exports=function(){"use strict";var t={d:function(e,o){for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function o(t,e){return null==t&&(t=0),null==e&&(e=1),Math.floor(t+Math.random()*(e-t+1))}function h(t){for(;t.children&&t.children.length>0;)h(t.children[0]),t.remove(t.children[0]);t.geometry&&t.geometry.dispose(),t.material&&(Object.keys(t.material).forEach((function(e){t.material[e]&&null!==t.material[e]&&"function"==typeof t.material[e].dispose&&t.material[e].dispose()})),t.material.dispose())}t.r(e),t.d(e,{default:function(){return y}}),Number.prototype.clamp=function(t,e){return Math.min(Math.max(this,t),e)};var u="object"==typeof window,l=u&&window.THREE||{};u&&!window.VANTA&&(window.VANTA={});var p=u&&window.VANTA||{};p.register=function(t,e){return p[t]=function(t){return new e(t)}},p.version="0.5.24";var c=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};p.VantaBase=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r(this,t),!u)return!1;p.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);var o,i,s="function"==typeof this.getDefaultOptions?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},s),(e instanceof HTMLElement||"string"==typeof e)&&(e={el:e}),Object.assign(this.options,e),this.options.THREE&&(l=this.options.THREE),this.el=this.options.el,null==this.el)c('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){var n=this.el;if(this.el=(o=n,document.querySelector(o)),!this.el)return void c("Cannot find element",n)}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(e){return c("Init error",e),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(i=this.options.backgroundColor,"number"==typeof i?"#"+("00000"+i.toString(16)).slice(-6):i)))}this.initMouse(),this.resize(),this.animationLoop();var a=window.addEventListener;a("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(a("scroll",this.windowMouseMoveWrapper),a("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(a("touchstart",this.windowTouchWrapper),a("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&a("deviceorientation",this.windowGyroWrapper)}return a(t,[{key:"setOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.assign(this.options,t),this.triggerMouseMove()}},{key:"prepareEl",value:function(){var t,e;if("undefined"!=typeof Node&&Node.TEXT_NODE)for(t=0;t<this.el.childNodes.length;t++){var o=this.el.childNodes[t];if(o.nodeType===Node.TEXT_NODE){var i=document.createElement("span");i.textContent=o.textContent,o.parentElement.insertBefore(i,o),o.remove()}}for(t=0;t<this.el.children.length;t++)e=this.el.children[t],"static"===getComputedStyle(e).position&&(e.style.position="relative"),"auto"===getComputedStyle(e).zIndex&&(e.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative")}},{key:"applyCanvasStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.assign(t.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(t.style,e),t.classList.add("vanta-canvas")}},{key:"initThree",value:function(){l.WebGLRenderer?(this.renderer=new l.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new l.Scene):console.warn("[VANTA] No THREE defined on window")}},{key:"getCanvasElement",value:function(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}},{key:"getCanvasRect",value:function(){var t=this.getCanvasElement();return!!t&&t.getBoundingClientRect()}},{key:"windowMouseMoveWrapper",value:function(t){var e=this.getCanvasRect();if(!e)return!1;var o=t.clientX-e.left,i=t.clientY-e.top;o>=0&&i>=0&&o<=e.width&&i<=e.height&&(this.mouseX=o,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(o,i))}},{key:"windowTouchWrapper",value:function(t){var e=this.getCanvasRect();if(!e)return!1;if(1===t.touches.length){var o=t.touches[0].clientX-e.left,i=t.touches[0].clientY-e.top;o>=0&&i>=0&&o<=e.width&&i<=e.height&&(this.mouseX=o,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(o,i))}}},{key:"windowGyroWrapper",value:function(t){var e=this.getCanvasRect();if(!e)return!1;var o=Math.round(2*t.alpha)-e.left,i=Math.round(2*t.beta)-e.top;o>=0&&i>=0&&o<=e.width&&i<=e.height&&(this.mouseX=o,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(o,i))}},{key:"triggerMouseMove",value:function(t,e){void 0===t&&void 0===e&&(this.options.mouseEase?(t=this.mouseEaseX,e=this.mouseEaseY):(t=this.mouseX,e=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=t/this.scale,this.uniforms.iMouse.value.y=e/this.scale);var o=t/this.width,i=e/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(o,i)}},{key:"setSize",value:function(){this.scale||(this.scale=1),"undefined"!=typeof navigator&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600)&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}},{key:"initMouse",value:function(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}},{key:"resize",value:function(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}},{key:"isOnScreen",value:function(){var t=this.el.offsetHeight,e=this.el.getBoundingClientRect(),o=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,i=e.top+o;return i-window.innerHeight<=o&&o<=i+t}},{key:"animationLoop",value:function(){this.t||(this.t=0),this.t2||(this.t2=0);var t=performance.now();if(this.prevNow){var e=(t-this.prevNow)/(1e3/60);e=Math.max(.2,Math.min(e,5)),this.t+=e,this.t2+=(this.options.speed||1)*e,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=t,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),"function"==typeof this.afterRender&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}},{key:"restart",value:function(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}},{key:"init",value:function(){"function"==typeof this.onInit&&this.onInit()}},{key:"destroy",value:function(){"function"==typeof this.onDestroy&&this.onDestroy();var t=window.removeEventListener;t("touchstart",this.windowTouchWrapper),t("touchmove",this.windowTouchWrapper),t("scroll",this.windowMouseMoveWrapper),t("mousemove",this.windowMouseMoveWrapper),t("deviceorientation",this.windowGyroWrapper),t("resize",this.resize),window.cancelAnimationFrame(this.req);var e=this.scene;e&&e.children&&h(e),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),p.current===this&&(p.current=null)}}]),t}();var d=p.VantaBase,f="object"==typeof window&&window.THREE,m=function(t){s(h,t);var e=n(h);function h(t){return r(this,h),f=t.THREE||f,e.call(this,t)}return a(h,[{key:"getMaterial",value:function(){var t={color:this.options.color,shininess:this.options.shininess,flatShading:!0,side:f.DoubleSide};return new f.MeshPhongMaterial(t)}},{key:"onInit",value:function(){var t,e,s=this.getMaterial(),n=new f.BufferGeometry;this.gg=[];var r,a,h=[];for(t=0;t<=this.ww;t++)for(this.gg[t]=[],e=0;e<=this.hh;e++){var u=h.length,l=new f.Vector3(18*(t-.5*this.ww),(null==(r=0)&&(r=0),null==(a=this.waveNoise)&&(a=1),r+Math.random()*(a-r)-10),18*(.5*this.hh-e));h.push(l),this.gg[t][e]=u}n.setFromPoints(h);var p=[];for(t=1;t<=this.ww;t++)for(e=1;e<=this.hh;e++){var c=void 0,d=void 0,m=this.gg[t][e],y=this.gg[t][e-1],v=this.gg[t-1][e],g=this.gg[t-1][e-1];o(0,1)?(c=[g,y,v],d=[y,v,m]):(c=[g,y,m],d=[g,v,m]),p.push.apply(p,i(c).concat(i(d)))}n.setIndex(p),this.plane=new f.Mesh(n,s),this.scene.add(this.plane);var w=new f.AmbientLight(16777215,.9);this.scene.add(w);var x=new f.PointLight(16777215,.9);x.position.set(-100,250,-100),this.scene.add(x),this.camera=new f.PerspectiveCamera(35,this.width/this.height,50,1e4),this.cameraPosition=new f.Vector3(240,200,390),this.cameraTarget=new f.Vector3(140,-30,190),this.camera.position.copy(this.cameraPosition),this.scene.add(this.camera)}},{key:"onUpdate",value:function(){var t;this.plane.material.color.set(this.options.color),this.plane.material.shininess=this.options.shininess,this.camera.ox=this.cameraPosition.x/this.options.zoom,this.camera.oy=this.cameraPosition.y/this.options.zoom,this.camera.oz=this.cameraPosition.z/this.options.zoom,null!=this.controls&&this.controls.update();var e=this.camera;Math.abs(e.tx-e.position.x)>.01&&(t=e.tx-e.position.x,e.position.x+=.02*t),Math.abs(e.ty-e.position.y)>.01&&(t=e.ty-e.position.y,e.position.y+=.02*t),Math.abs(e.tz-e.position.z)>.01&&(t=e.tz-e.position.z,e.position.z+=.02*t),e.lookAt(this.cameraTarget),this.oy=this.oy||{};for(var o=0;o<this.plane.geometry.attributes.position.array.length;o+=3){var i={x:this.plane.geometry.attributes.position.array[o],y:this.plane.geometry.attributes.position.array[o+1],z:this.plane.geometry.attributes.position.array[o+2],oy:this.oy[o]};if(i.oy){var s=this.options.waveSpeed,n=Math.sqrt(s)*Math.cos(-i.x-.7*i.z),r=Math.sin(s*this.t*.02-s*i.x*.025+s*i.z*.015+n),a=Math.pow(r+1,2)/4;i.y=i.oy+a*this.options.waveHeight,this.plane.geometry.attributes.position.array[o+1]=i.y}else this.oy[o]=i.y}this.plane.geometry.attributes.position.setUsage(f.DynamicDrawUsage),this.plane.geometry.computeVertexNormals(),this.plane.geometry.attributes.position.needsUpdate=!0,this.wireframe&&(this.wireframe.geometry.fromGeometry(this.plane.geometry),this.wireframe.geometry.computeFaceNormals())}},{key:"onMouseMove",value:function(t,e){var o=this.camera;return o.oy||(o.oy=o.position.y,o.ox=o.position.x,o.oz=o.position.z),o.tx=o.ox+100*(t-.5)/this.options.zoom,o.ty=o.oy+-100*(e-.5)/this.options.zoom,o.tz=o.oz+-50*(t-.5)/this.options.zoom}}],[{key:"initClass",value:function(){this.prototype.ww=100,this.prototype.hh=80,this.prototype.waveNoise=4}}]),h}(d);m.prototype.defaultOptions={color:21896,shininess:30,waveHeight:15,waveSpeed:1,zoom:1},m.initClass();var y=p.register("WAVES",m);return e}()},3897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i},t.exports.__esModule=!0,t.exports.default=t.exports},3405:function(t,e,o){var i=o(3897);t.exports=function(t){if(Array.isArray(t))return i(t)},t.exports.__esModule=!0,t.exports.default=t.exports},6115:function(t){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},6690:function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},9728:function(t,e,o){var i=o(4062);function s(t,e){for(var o=0;o<e.length;o++){var s=e[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,i(s.key),s)}}t.exports=function(t,e,o){return e&&s(t.prototype,e),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},6389:function(t,e,o){var i=o(3808),s=o(9617),n=o(4993);t.exports=function(t){var e=s();return function(){var o,s=i(t);if(e){var r=i(this).constructor;o=Reflect.construct(s,arguments,r)}else o=s.apply(this,arguments);return n(this,o)}},t.exports.__esModule=!0,t.exports.default=t.exports},3808:function(t){function e(o){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.__esModule=!0,t.exports.default=t.exports,e(o)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},1655:function(t,e,o){var i=o(6015);t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},9617:function(t){t.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},9498:function(t){t.exports=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},2281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},4993:function(t,e,o){var i=o(8698).default,s=o(6115);t.exports=function(t,e){if(e&&("object"===i(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)},t.exports.__esModule=!0,t.exports.default=t.exports},6015:function(t){function e(o,i){return t.exports=e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},t.exports.__esModule=!0,t.exports.default=t.exports,e(o,i)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,o){var i=o(3405),s=o(9498),n=o(6116),r=o(2281);t.exports=function(t){return i(t)||s(t)||n(t)||r()},t.exports.__esModule=!0,t.exports.default=t.exports},5036:function(t,e,o){var i=o(8698).default;t.exports=function(t,e){if("object"!==i(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var s=o.call(t,e||"default");if("object"!==i(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},4062:function(t,e,o){var i=o(8698).default,s=o(5036);t.exports=function(t){var e=s(t,"string");return"symbol"===i(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},6116:function(t,e,o){var i=o(3897);t.exports=function(t,e){if(t){if("string"===typeof t)return i(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=859.8322e711.chunk.js.map