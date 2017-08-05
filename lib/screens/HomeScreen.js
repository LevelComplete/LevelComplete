'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/screens/HomeScreen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');










var _StyledText=require('../components/StyledText');
var _TitlePage=require('../components/TitlePage');var _TitlePage2=_interopRequireDefault(_TitlePage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

HomeScreen=function(_React$Component){_inherits(HomeScreen,_React$Component);function HomeScreen(){var _ref;var _temp,_this,_ret;_classCallCheck(this,HomeScreen);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=HomeScreen.__proto__||Object.getPrototypeOf(HomeScreen)).call.apply(_ref,[this].concat(args))),_this),_this.










































_handleLearnMorePress=function(){
_reactNative.Linking.openURL(
'https://docs.expo.io/versions/latest/guides/development-mode');

},_this.

_handleHelpPress=function(){
_reactNative.Linking.openURL(
'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes');

},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(HomeScreen,[{key:'render',value:function render(){return _react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:23}},_react2.default.createElement(_reactNative.ScrollView,{style:styles.container,contentContainerStyle:styles.contentContainer,__source:{fileName:_jsxFileName,lineNumber:24}},_react2.default.createElement(_reactNative.View,{style:styles.welcomeContainer,__source:{fileName:_jsxFileName,lineNumber:28}},_react2.default.createElement(_TitlePage2.default,{__source:{fileName:_jsxFileName,lineNumber:29}}))));}},{key:'_maybeRenderDevelopmentModeWarning',value:function _maybeRenderDevelopmentModeWarning(){if(__DEV__){var learnMoreButton=_react2.default.createElement(_reactNative.Text,{onPress:this._handleLearnMorePress,style:styles.helpLinkText,__source:{fileName:_jsxFileName,lineNumber:39}},'Learn more');return _react2.default.createElement(_reactNative.Text,{style:styles.developmentModeText,__source:{fileName:_jsxFileName,lineNumber:45}},'Development mode is enabled, your app will run slightly slower but you have access to useful development tools. ',learnMoreButton,'.');}else{return _react2.default.createElement(_reactNative.Text,{style:styles.developmentModeText,__source:{fileName:_jsxFileName,lineNumber:52}},'You are not in development mode, your app will run at full speed.');}}}]);return HomeScreen;}(_react2.default.Component);HomeScreen.navigationOptions={header:null};exports.default=HomeScreen;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'},

developmentModeText:{
marginBottom:20,
color:'rgba(0,0,0,0.4)',
fontSize:15,
textAlign:'center'},

contentContainer:{
paddingTop:80},

welcomeContainer:{
alignItems:'center',
marginTop:10,
marginBottom:20},

welcomeImage:{
width:140,
height:38,
resizeMode:'contain',
marginTop:3,
marginLeft:-10},

getStartedContainer:{
alignItems:'center',
marginHorizontal:50},

homeScreenFilename:{
marginVertical:7},

codeHighlightText:{
color:'rgba(96,100,109, 0.8)'},

codeHighlightContainer:{
backgroundColor:'rgba(0,0,0,0.05)',
borderRadius:3,
paddingHorizontal:4},

getStartedText:{
fontSize:17,
color:'rgba(96,100,109, 1)',
lineHeight:23,
textAlign:'center'},

tabBarInfoContainer:_extends({
position:'absolute',
bottom:0,
left:0,
right:0},
_reactNative.Platform.select({
ios:{
shadowColor:'black',
shadowOffset:{height:-3},
shadowOpacity:0.1,
shadowRadius:3},

android:{
elevation:20}}),{


alignItems:'center',
backgroundColor:'#fbfbfb',
paddingVertical:20}),

tabBarInfoText:{
fontSize:17,
color:'rgba(96,100,109, 1)',
textAlign:'center'},

navigationFilename:{
marginTop:5},

helpContainer:{
marginTop:15,
alignItems:'center'},

helpLink:{
paddingVertical:15},

helpLinkText:{
fontSize:14,
color:'#2e78b7'}});