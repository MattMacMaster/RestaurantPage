import css from "./style.css";
const navButtons = [...document.querySelectorAll('[data-val]')];
const contactButton = document.getElementById('contacttab');
const menuButton = document.getElementById('menutab');
const homeButton = document.getElementById('hometab');
//contactButton.addEventListener('click', loadContactPage);
//menuButton.addEventListener('click', loadMenuPage);
//homeButton.addEventListener('click', loadHomePage);


const content = document.getElementById('content');

navButtons.forEach((button) => {
    button.addEventListener('click', changeSelect);
});
function changeSelect() {
    console.log(this);
    if (![...this.classList].includes('tabActive')) {
        navButtons.forEach((button) => {
            button.classList.remove('tabActive');
        });
        this.classList.add('tabActive');
    };
    if ([...this.classList].includes('rightTab')) {
        loadContactPage(this);
    } else if ([...this.classList].includes('centerTab')) {
        //loadMenuPage(this);
    } else {
        loadHomePage(this);
    };
};
function loadContactPage(obj) {
    //Clear the page
    console.log(obj.classList);
    if ([...obj.classList].includes('rightTab')) {
        content.innerHTML = '';
    };
    obj.classList.add('menutabActive');

    //Fill the page with desired content
    content.innerHTML = `
    Phone: 555 403 5555
    <br />
    Address: TALL GRASS CIRCLE, STOW OH
    <br />
    <img class="map_img" src="5d4ead59a4044100f85f.png" alt="Location">
    `
};

function loadMenuPage(obj) {
    //Clear the page
    console.log(obj.classList);
    if ([...obj.classList].includes('tabActive')) {
        content.innerHTML = '';
    };
    this.classList.add('menutabActive');

    //Fill the page with desired content
};
function loadHomePage(obj) {
    //Clear the page
    if ([...obj.classList].includes('tabActive')) {
        content.innerHTML = '';
    };
    obj.classList.add('menutabActive');
    //Fill the page with desired content

    content.innerHTML = `
                    The best Pizza Around
                    <br />
                    Made with perfection since 1888
                    <br />
                    <img class="chef_img" src="8ff123566b5df520d5ab.jpg" alt="Owner Pic">
                    <br />
                    Order Online or in house.
        `;

};
