import './toast.scss';
import 'reset-css/reset.css';

import {tpl} from 'util-tool-tpl';
function appendTo(ele, str) {
  let temp = document.createElement('div');
  temp.innerHTML = str;
  return ele.appendChild(temp.firstChild);
}
let timeout;
export function showToast(msg, time) {
  if (timeout) {
    clearTimeout(timeout);
  }
  let toastTpl = `
  <div class="util-ui-toast J_toast">
  <div class="uut-overlay"></div>
  <div class="uut-body J_body">
    <%= it %>
  </div>
  </div>`;
  let toastEle = document.querySelector('.J_toast');
  if (toastEle) {
    toastEle.querySelector('.J_body').innerHTML = msg;
  } else {
    toastEle = appendTo(document.documentElement, tpl(toastTpl, msg));
  }
  toastEle.classList.add('show');
  timeout = setTimeout(() => {
    toastEle.classList.remove('show');
    timeout = null;
  }, time);
}
