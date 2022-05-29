const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]')
}

const LOCAL_KEY = "feedback-form-state";

// console.log(refs.input);
// console.log(refs.message);

const handleSubmit = (evt) => {
    evt.preventDefault();

    const localData = {
        email: refs.input.value,
        message: refs.message.value
    }
    console.log(localData);

    localStorage.setItem(LOCAL_KEY, JSON.stringify(localData));
    refs.input.value = "";
}

refs.form.addEventListener('submit', handleSubmit);