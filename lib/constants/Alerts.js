'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _Colors=require('./Colors');var _Colors2=_interopRequireDefault(_Colors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

{
error:_reactNative.StyleSheet.create({
container:{
backgroundColor:_Colors2.default.errorBackground},

text:{
color:_Colors2.default.errorText}}),



warning:_reactNative.StyleSheet.create({
container:{
backgroundColor:_Colors2.default.warningBackground},

text:{
color:_Colors2.default.warningText}}),



notice:_reactNative.StyleSheet.create({
container:{
backgroundColor:_Colors2.default.noticeBackground},

text:{
color:_Colors2.default.noticeText}})};