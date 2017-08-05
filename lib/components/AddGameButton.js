'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/AddGameButton.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}








var i=0;var

AddGameButton=function(_Component){_inherits(AddGameButton,_Component);

function AddGameButton(props){_classCallCheck(this,AddGameButton);var _this=_possibleConstructorReturn(this,(AddGameButton.__proto__||Object.getPrototypeOf(AddGameButton)).call(this,
props));
_this.state={text:'Useless Placeholder'};return _this;
}_createClass(AddGameButton,[{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,{style:styles.box,__source:{fileName:_jsxFileName,lineNumber:22}},
_react2.default.createElement(_reactNative.TextInput,{
style:{height:40,borderColor:'gray',borderWidth:1},
onChangeText:function onChangeText(text){return _this2.setState({text:text});},
defaultValue:this.state.text,
onSubmitEditing:function onSubmitEditing(text){return _this2.addToList(text);},__source:{fileName:_jsxFileName,lineNumber:23}}),

_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:29}},
_react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:30}},
_reactNative.AsyncStorage.getItem('game ')))));




}},{key:'addToList',value:function addToList(

text){
_reactNative.AsyncStorage.setItem('game ',text);
}}]);return AddGameButton;}(_react.Component);exports.default=AddGameButton;


AddGameButton.propTypes={
text:_react2.default.PropTypes.string};


var styles=_reactNative.StyleSheet.create({
box:{
padding:25,
backgroundColor:"#F8F8F8",
borderBottomWidth:1,
borderColor:'#eee'}});