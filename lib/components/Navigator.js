'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/Navigator.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');







var _AddGameButton=require('./AddGameButton');var _AddGameButton2=_interopRequireDefault(_AddGameButton);
var _UserList=require('./UserList');var _UserList2=_interopRequireDefault(_UserList);
var _TitlePage=require('./TitlePage');var _TitlePage2=_interopRequireDefault(_TitlePage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

_react2.default.createClass({

displayName:'Navigator',

propTypes:{},



render:function render(){
var routes=[
{title:'TitlePage',index:0},
{title:'UserList',index:1},
{title:'AddGame',index:2}];


return(
_react2.default.createElement(_reactNative.Navigator,{
initialRoute:routes[0],
initialRouteStack:routes,
renderScene:this.renderScene.bind(this),
configureScene:function configureScene(route){
if(route.sceneConfig){
return route.sceneConfig;
}
return _reactNative.Navigator.SceneConfigs.FloatFromBottom;
},
navigationBar:
_react2.default.createElement(_reactNative.Navigator.NavigationBar,{
routeMapper:{
LeftButton:function LeftButton(route,navigator,index,navState){
var routeTitle=route.title;

if(routeTitle==='UserList'){
return null;
}else{
return(
_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(){return navigator.pop();},__source:{fileName:_jsxFileName,lineNumber:50}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:51}},'Back')));


}
},
RightButton:function RightButton(route,navigator,index,navState){
var routeTitle=route.title;

if(routeTitle==='AddGame'){
return null;
}else{
return(
_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(){return navigator.push(routes[2]);},__source:{fileName:_jsxFileName,lineNumber:63}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:64}},'Add Game')));


}
},
Title:function Title(route,navigator,index,navState)
{return _react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:70}},route.title);}},


style:{alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:41}}),__source:{fileName:_jsxFileName,lineNumber:30}}));




},

renderScene:function renderScene(route,navigator){
var routeTitle=route.title;

if(routeTitle==='UserList'){
return(
_react2.default.createElement(_UserList2.default,{
navigator:navigator,__source:{fileName:_jsxFileName,lineNumber:85}}));

}
if(routeTitle==='AddGame'){
return(
_react2.default.createElement(_AddGameButton2.default,{
navigator:navigator,__source:{fileName:_jsxFileName,lineNumber:91}}));

}
if(routeTitle==='TitlePage'){
return(
_react2.default.createElement(_TitlePage2.default,{
navigator:navigator,__source:{fileName:_jsxFileName,lineNumber:97}}));

}
}});