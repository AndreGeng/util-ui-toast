'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showToast = showToast;

require('./toast.scss');

require('reset-css/reset.css');

var _utilToolTpl = require('util-tool-tpl');

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
  var toastTpl = '\n  <div class="util-ui-toast J_toast">\n  <div class="uut-overlay"></div>\n  <div class="uut-body J_body">\n    <%= it %>\n  </div>\n  </div>';
  var toastEle = document.querySelector('.J_toast');
  if (toastEle) {
    toastEle.querySelector('.J_body').innerHTML = msg;
  } else {
    toastEle = appendTo(document.documentElement, (0, _utilToolTpl.tpl)(toastTpl, msg));
  }
  toastEle.classList.add('show');
  timeout = setTimeout(function () {
    toastEle.classList.remove('show');
    timeout = null;
  }, time);
}