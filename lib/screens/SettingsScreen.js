'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/screens/SettingsScreen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _samples=require('@expo/samples');

var _AddGameButton=require('../components/AddGameButton');var _AddGameButton2=_interopRequireDefault(_AddGameButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

SettingsScreen=function(_React$Component){_inherits(SettingsScreen,_React$Component);function SettingsScreen(){_classCallCheck(this,SettingsScreen);return _possibleConstructorReturn(this,(SettingsScreen.__proto__||Object.getPrototypeOf(SettingsScreen)).apply(this,arguments));}_createClass(SettingsScreen,[{key:'render',value:function render()




{
return(
_react2.default.createElement(_reactNative.ScrollView,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:14}},
_react2.default.createElement(_AddGameButton2.default,{__source:{fileName:_jsxFileName,lineNumber:15}})));


}}]);return SettingsScreen;}(_react2.default.Component);SettingsScreen.navigationOptions={title:'app.json'};exports.default=SettingsScreen;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'}});