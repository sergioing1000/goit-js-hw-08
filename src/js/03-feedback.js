import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const boton = document.querySelector('button')


const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (formData) {
  input.value = formData.email;
  textArea.value = formData.message;
}


input.addEventListener('input', throttle(handleFormInput, 500));

textArea.addEventListener('input', throttle(handleFormInput, 500));

function handleFormInput(event) {
  const email = input.value;
  const message = textArea.value;
  const formData = {
    email,
    message,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


boton.addEventListener(
  'click',
  throttle(() => {
    const email = '';
    const message = '';
    const formData = { email, message };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);