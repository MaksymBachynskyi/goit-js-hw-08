import throttle from 'lodash.throttle';
const formEl = document.querySelector('form.feedback-form');
formEl.addEventListener('input', throttle(onLocalStorage, 500));
let objStorage = {};
function onLocalStorage(evnt) {
  if (!evnt.target.closest('.feedback-form')) {
    return;
  }
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
