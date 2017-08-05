'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/RowComponent.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);

var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var











RowComponent=function(_Component){_inherits(RowComponent,_Component);

function RowComponent(props){_classCallCheck(this,RowComponent);var _this=_possibleConstructorReturn(this,(RowComponent.__proto__||Object.getPrototypeOf(RowComponent)).call(this,
props));

_this._active=new _reactNative.Animated.Value(0);

_this._style=_extends({},
_reactNative.Platform.select({
ios:{
transform:[{
scale:_this._active.interpolate({
inputRange:[0,1],
outputRange:[1,1.1]})}],


shadowRadius:_this._active.interpolate({
inputRange:[0,1],
outputRange:[2,10]})},



android:{
transform:[{
scale:_this._active.interpolate({
inputRange:[0,1],
outputRange:[1,1.07]})}],


elevation:_this._active.interpolate({
inputRange:[0,1],
outputRange:[2,6]})}}));return _this;




}_createClass(RowComponent,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(this.props.active!==nextProps.active){
_reactNative.Animated.timing(this._active,{
duration:300,
easing:_reactNative.Easing.bounce,
toValue:Number(nextProps.active)}).
start();
}
}},{key:'render',value:function render()

{var _props=
this.props,data=_props.data,active=_props.active;

return(
_react2.default.createElement(_reactNative.Animated.View,{style:[
styles.row,
this._style],__source:{fileName:_jsxFileName,lineNumber:67}},

_react2.default.createElement(_reactNative.Image,{source:{uri:data.image},style:styles.image,__source:{fileName:_jsxFileName,lineNumber:71}}),
_react2.default.createElement(_reactNative.Text,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:72}},data.text)));


}}]);return RowComponent;}(_react.Component);exports.default=RowComponent;


var styles=_reactNative.StyleSheet.create({
row:_extends({
flexDirection:'row',
alignItems:'center',
backgroundColor:'#fff',
padding:16,
height:80,
flex:1,
marginTop:7,
marginBottom:12,
borderRadius:4},


_reactNative.Platform.select({
ios:{
width:window.width-30*2,
shadowColor:'rgba(0,0,0,0.2)',
shadowOpacity:1,
shadowOffset:{height:2,width:2},
shadowRadius:2},


android:{
width:window.width-30*2,
elevation:0,
marginHorizontal:30}})),




image:{
width:50,
height:50,
marginRight:30,
borderRadius:25},


text:{
fontSize:24,
color:'#222222'}});