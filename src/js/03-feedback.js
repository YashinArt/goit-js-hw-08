import throttle from 'lodash.throttle'
import { jsonParceWhereStorage } from './module/jsonParceWhereStorage '
import { objData } from './module/objData'
const FEEDBACK_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    texterea: document.querySelector(".feedback-form textarea"),
    email: document.querySelector('.feedback-form input'),
};


refs.form.addEventListener("submit", onFormSubmit);
refs.texterea.addEventListener("input", throttle(onTextareaInput, 500));
refs.email.addEventListener("input", throttle(onTextareaInput, 500));

const sevedMessage = jsonParceWhereStorage(FEEDBACK_KEY)


function onFormSubmit(evt){
evt.preventDefault();

evt.target.reset();
localStorage.removeItem(FEEDBACK_KEY)
}
function onTextareaInput(evt){
    objData[evt.target.name] = evt.target.value
    objData[evt.target.name] = evt.target.value
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(objData))

    // const message = evt.target.value;
    
    // localStorage.setItem(FEEDBACK_KEY, message);
    
}


    if (sevedMessage) {
        // console.log(sevedMessage);
        refs.texterea.value = sevedMessage.message;
        refs.email.value = sevedMessage.email;
        // console.log(objData)
    }


