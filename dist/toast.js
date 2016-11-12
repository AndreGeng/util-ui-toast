'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showToast = showToast;

require('./toast.scss');

require('reset-css/reset.css');

function appendTo(ele, str) {
  var temp = document.createElement('div');
  temp.innerHTML = str;
  return ele.appendChild(temp.firstChild);
}
var timeout = void 0;
function showToast(msg, time) {
  if (timeout) {
    clearTimeout(timeout);
  }
  var toastEle = document.querySelector('.J_toast');
  if (toastEle) {
    toastEle.querySelector('.J_body').innerHTML = msg;
  } else {
    toastEle = appendTo(document.documentElement, require('./toast.tpl')(msg));
  }
  toastEle.classList.add('show');
  timeout = setTimeout(function () {
    toastEle.classList.remove('show');
    timeout = null;
  }, time);
}