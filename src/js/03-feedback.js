import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]')
}
const LOCAL_KEY = "feedback-form-state";
refs.form.addEventListener('input', throttle(inputData, 500));

function inputData() {
    const localData = {
        email: refs.input.value,
        message: refs.message.value
    }
    localStorage.setItem(LOCAL_KEY, JSON.stringify(localData));
};

const handleSubmit = (evt) => {
    evt.preventDefault();
    if (refs.message.value === "" || refs.input.value === "") {
        alert(`Заповніть всі поля, будьласка!`);
        return;
    }
    refs.input.value = "";
    refs.message.value = "";

    console.log(localStorage.getItem(LOCAL_KEY));
};

refs.form.addEventListener('submit', handleSubmit);

function localCheckData() {
    const savedData = JSON.parse(localStorage.getItem(LOCAL_KEY));
    // console.log(savedData);
    if (savedData === null) {
        return
    }
    refs.input.value = savedData.email;
    refs.message.value = savedData.message;
};
localCheckData();
