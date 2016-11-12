import './toast.scss';
import 'reset-css/reset.css';
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
  let toastEle = document.querySelector('.J_toast');
  if (toastEle) {
    toastEle.querySelector('.J_body').innerHTML = msg;
  } else {
    toastEle = appendTo(document.documentElement, require('./toast.tpl')(msg));
  }
  toastEle.classList.add('show');
  timeout = setTimeout(() => {
    toastEle.classList.remove('show');
    timeout = null;
  }, time);
}
