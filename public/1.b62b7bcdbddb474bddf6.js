webpackJsonp([1],{118:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function Home(){return _react2.default.createElement("div",{className:"Home"},_react2.default.createElement("div",{className:"App-intro"},_react2.default.createElement("h1",null,"Welcome to React PWA"),_react2.default.createElement(_reactRouter.Link,{className:"btn",to:"/about"},"About")))}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(5),_react2=_interopRequireDefault(_react),_reactRouter=__webpack_require__(70);__webpack_require__(239),exports.default=Home},236:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(115)(),exports.push([module.i,".Home {\n  text-align: center; }\n  .Home .App-intro {\n    margin-top: 15em; }\n    .Home .App-intro > h1 {\n      color: #61dafb;\n      font-size: 3.75em;\n      font-weight: 600;\n      letter-spacing: -0.035em;\n      line-height: 1.5; }\n    .Home .App-intro > .btn {\n      background-color: #ffffff;\n      padding: 10px;\n      color: #2D2D2D; }\n","",{version:3,sources:["/./src/components/Home/Home.scss","/./src/assets/_setup.scss"],names:[],mappings:"AAEA;EACE,mBAAkB,EAgBnB;EAjBD;IAGI,iBAAgB,EAajB;IAhBH;MAKM,eCPuB;MDQvB,kBAA4B;MAC5B,iBCAW;MDCX,yBAAwB;MACxB,iBCHgB,EDIjB;IAVL;MAYM,0BAAyB;MACzB,cAAa;MACb,eAAc,EACf",file:"Home.scss",sourcesContent:["@import '../../assets/_setup';\n\n.Home {\n  text-align: center;\n  .App-intro {\n    margin-top: 15em;\n    > h1 {\n      color: $brand;\n      font-size: $base-font-size*3;\n      font-weight: $bold-weight;\n      letter-spacing: -0.035em;\n      line-height: $base-line-height;\n    }\n    > .btn {\n      background-color: #ffffff;\n      padding: 10px;\n      color: #2D2D2D;\n    }\n  }\n}\n","$brand:               #61dafb;\n$black:               #2D2D2D;\n\n// Typography\n$base-text-align: left; // switch for rtl\n$sans-serif-stack: Helvetica, Arial, sans-serif;\n\n$base-font-size: 1.25em;\n$base-line-height: 1.5;\n$bold-weight: 600;\n"],sourceRoot:"webpack://"}])},239:function(module,exports,__webpack_require__){var content=__webpack_require__(236);"string"==typeof content&&(content=[[module.i,content,""]]);__webpack_require__(116)(content,{});content.locals&&(module.exports=content.locals)}});