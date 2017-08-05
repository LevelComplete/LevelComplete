'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/UserList.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeSortableList=require('react-native-sortable-list');var _reactNativeSortableList2=_interopRequireDefault(_reactNativeSortableList);
var _reactNative=require('react-native');











var _RowComponent=require('./RowComponent');var _RowComponent2=_interopRequireDefault(_RowComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var data={
0:{
image:'https://placekitten.com/200/240',
text:'Chloe'},

1:{
image:'https://placekitten.com/200/201',
text:'Jasper'},

2:{
image:'https://placekitten.com/200/202',
text:'Pepper'},

3:{
image:'https://placekitten.com/200/203',
text:'Oscar'},

4:{
image:'https://placekitten.com/200/204',
text:'Dusty'},

5:{
image:'https://placekitten.com/200/205',
text:'Spooky'},

6:{
image:'https://placekitten.com/200/210',
text:'Kiki'},

7:{
image:'https://placekitten.com/200/215',
text:'Smokey'},

8:{
image:'https://placekitten.com/200/220',
text:'Gizmo'},

9:{
image:'https://placekitten.com/220/239',
text:'Kitty'}};var




UserList=function(_Component){_inherits(UserList,_Component);function UserList(){_classCallCheck(this,UserList);return _possibleConstructorReturn(this,(UserList.__proto__||Object.getPrototypeOf(UserList)).apply(this,arguments));}_createClass(UserList,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNativeSortableList2.default,{
style:styles.list,
contentContainerStyle:styles.contentContainer,
data:data,
renderRow:this.renderRow,__source:{fileName:_jsxFileName,lineNumber:64}}));

}},{key:'getList',value:function getList()

{

return AsyncStorage.getAllKeys().then(function(ks){
return Parse.Promise.when(ks.map(function(k){return AsyncStorage.getItem(k);}));
});
}},{key:'renderRow',value:function renderRow(_ref)

{var data=_ref.data,active=_ref.active;
return _react2.default.createElement(_RowComponent2.default,{data:data,active:active,__source:{fileName:_jsxFileName,lineNumber:80}});
}}]);return UserList;}(_react.Component);exports.default=UserList;


var styles=_reactNative.StyleSheet.create({
container:_extends({
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#eee'},

_reactNative.Platform.select({
ios:{
paddingTop:20}})),





contentContainer:_extends({
width:window.width},

_reactNative.Platform.select({
ios:{
paddingHorizontal:30},


android:{
paddingHorizontal:0}})),




title:{
fontSize:20,
paddingVertical:20,
color:'#999999'}});