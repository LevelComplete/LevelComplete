'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/navigation/MainTabNavigator.js';



var _react=require('react');var _react2=_interopRequireDefault(_react);
var _vectorIcons=require('@expo/vector-icons');
var _reactNavigation=require('react-navigation');

var _Colors=require('../constants/Colors');var _Colors2=_interopRequireDefault(_Colors);

var _HomeScreen=require('../screens/HomeScreen');var _HomeScreen2=_interopRequireDefault(_HomeScreen);
var _LinksScreen=require('../screens/LinksScreen');var _LinksScreen2=_interopRequireDefault(_LinksScreen);
var _SettingsScreen=require('../screens/SettingsScreen');var _SettingsScreen2=_interopRequireDefault(_SettingsScreen);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_reactNavigation.TabNavigator)(
{
Home:{
screen:_HomeScreen2.default},

Links:{
screen:_LinksScreen2.default},

Settings:{
screen:_SettingsScreen2.default}},


{
navigationOptions:function navigationOptions(_ref){var navigation=_ref.navigation;return{

tabBarIcon:function tabBarIcon(_ref2){var focused=_ref2.focused;var
routeName=navigation.state.routeName;
var iconName=void 0;
switch(routeName){
case'Home':
iconName='home';
break;
case'Links':
iconName='book';
break;
case'Settings':
iconName='cog';}

return(
_react2.default.createElement(_vectorIcons.FontAwesome,{
name:iconName,
size:32,
color:focused?_Colors2.default.tabIconSelected:_Colors2.default.tabIconDefault,__source:{fileName:_jsxFileName,lineNumber:44}}));


}};},


tabBarComponent:_reactNavigation.TabBarBottom,
tabBarPosition:'bottom',

animationEnabled:false,

tabBarOptions:{
showLabel:false}});