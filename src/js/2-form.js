'use strict';

const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

saveDataFromStorage();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onTextareaInput);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);

    formData = { email: '', message: '' };
    localStorage.removeItem(STORAGE_KEY);
    
    form.reset();
  }
}

function onTextareaInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function saveDataFromStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}
