import throttle from 'lodash.throttle';

const values = document.querySelector('.feedback-form');
const childrens = values.children;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


for (let element of childrens) {
    if (element.firstElementChild != null) {
        element.firstElementChild.classList.add(`feedback-form__${element.firstElementChild.getAttribute('name')}`);
    } else {
        element.classList.add(`feedback-form__${element.getAttribute('type')}`);
    };

};


const [emailSelector, messageSelector, btnSelector] = values.querySelectorAll('.feedback-form__email, .feedback-form__message, .feedback-form__submit');



let formValues = {
    email: "fakemail@fake.com",
    message: "new001",
};


const formValueSaved = localStorage.getItem("feedback-form-state");
const feedback = JSON.parse(formValueSaved);
if (formValueSaved != null) {
    emailSelector.value = feedback.email;
    messageSelector.value = feedback.message;
};


const setFormValues = () => {
    formValues = { email: emailSelector.value, message: messageSelector.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
};


const removePrintFormValues = (event) => {
    if (emailRegex.test(emailSelector.value)) {        
        event.preventDefault();
        console.log(formValues);
        emailSelector.value = '';
        messageSelector.value = ''; 
        localStorage.removeItem('feedback-form-state');
    } else {
        alert('El correo no tiene formato adecuado')
    };
};



values.addEventListener('input', throttle(setFormValues, 500) );

btnSelector.addEventListener('click', removePrintFormValues);