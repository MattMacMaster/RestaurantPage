import css from "./style.css";
const navButtons = [...document.querySelectorAll('[data-val]')];
navButtons.forEach((button) => {
    button.addEventListener('click', changeSelect);
});
function changeSelect() {
    if (![...this.classList].includes('menutabActive')) {
        navButtons.forEach((button) => {
            button.classList.remove('menutabActive');
        });
        this.classList.add('menutabActive');
    };
};
