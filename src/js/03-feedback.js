import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector('textarea[name="message"]');

formEl.addEventListener('input', throttle(handleInputData, 500));
formEl.addEventListener('submit', handleSubmitData);

const userData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

getLocalStorageData();

function handleInputData(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function getLocalStorageData() {
  if (userData) {
    email.value = userData.email || '';
    message.value = userData.message || '';
  }
}

function handleSubmitData(e) {
  e.preventDefault();

  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert(`Заповніть, будь ласка, форму.`);
  }

  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
}