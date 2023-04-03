

var throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
}

const STORAGE_KEY = "feedback-form-state";
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

formTextarea();

function onFormSubmit (event){
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput (event){
  formData[event.target.name] = event.target.value;
  const dataStorage = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, dataStorage);
}

function formTextarea() {
    const savedFormFields = JSON.parse(localStorage.getItem(STORAGE_KEY));
 
    if (savedFormFields !== null ) {
      refs.form.elements['email'].value = savedFormFields.email;
      refs.form.elements['message'].value = savedFormFields.message;
    } 
  };
