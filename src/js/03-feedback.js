import throttle from 'lodash.throttle';
const formEl = document.querySelector('form.feedback-form');
const inputEl = document.querySelector('.inputMail');
const textAreaEl = document.querySelector('.textArea');

formEl.addEventListener('input', throttle(onLocalStorage, 500));
if (localStorage.getItem('feedback-form-state')) {
  inputEl.value =
    JSON.parse(localStorage.getItem('feedback-form-state')).email ?? '';
  textAreaEl.value =
    JSON.parse(localStorage.getItem('feedback-form-state')).message ?? '';
}
function onLocalStorage(evnt) {
  if (!evnt.target.closest('.feedback-form')) {
    return;
  }
  const objStorage =
    JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
  objStorage[evnt.target.name] = evnt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(objStorage));
}

formEl.addEventListener('submit', onSubmit);
function onSubmit(evnt) {
  evnt.preventDefault();
  formEl.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}
