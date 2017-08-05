'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _expo=require('expo');function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}


var PUSH_ENDPOINT='https://exponent-push-server.herokuapp.com/tokens';exports.default=function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark(

function _callee(){var _ref2,status,token;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return(


_expo.Permissions.askAsync(_expo.Permissions.REMOTE_NOTIFICATIONS));case 2:_ref2=_context.sent;status=_ref2.status;if(!(


status!=='granted')){_context.next=6;break;}return _context.abrupt('return');case 6:_context.next=8;return(




_expo.Notifications.getExponentPushTokenAsync());case 8:token=_context.sent;return _context.abrupt('return',


fetch(PUSH_ENDPOINT,{
method:'POST',
headers:{
Accept:'application/json',
'Content-Type':'application/json'},

body:JSON.stringify({
token:{
value:token}})}));case 10:case'end':return _context.stop();}}},_callee,this);}));function registerForPushNotificationsAsync(){return _ref.apply(this,arguments);}return registerForPushNotificationsAsync;}();