import css from "./style.css";
const navButtons = [...document.querySelectorAll('[data-val]')];
const contactButton = document.getElementById('contacttab');
const menuButton = document.getElementById('menutab');
const homeButton = document.getElementById('hometab');
//contactButton.addEventListener('click', loadContactPage);
//menuButton.addEventListener('click', loadMenuPage);
//homeButton.addEventListener('click', loadHomePage);



const content = document.getElementById('content');
loadHomePage(homeButton);

navButtons.forEach((button) => {
    button.addEventListener('click', changeSelect);
});
function changeSelect() {
    navButtons.forEach((button) => {
        button.classList.remove('menutabActive');
        button.classList.remove('tabActive');

    });
    this.classList.add('tabActive');
    if ([...this.classList].includes('rightTab')) {
        loadContactPage(this);
    } else if ([...this.classList].includes('centerTab')) {
        loadMenuPage(this);
    } else {
        loadHomePage(this);
    };
};
function loadContactPage(obj) {
    //Clear the page
    if (![...obj.classList].includes('menutabActive')) {
        content.innerHTML = `
        Phone: 555 403 5555
        <br />
        Address: Tall Grass Circle, STOW OH
        <br />
        <img class="map_img" src="5d4ead59a4044100f85f.png" alt="Location">
        `;
    };
    obj.classList.add('menutabActive');

    //Fill the page with desired content

};

function loadMenuPage(obj) {
    //Clear the page

    if (![...obj.classList].includes('menutabActive')) {
        content.innerHTML = `<div class="menu">
        <div class="card">
            <Img class="card-icon" src="3f417c685919869e7ba2.png"></Img>
            <h3 class="card-title">Pepperoni</h3>
            <div class="desc">Pepperoni</div>
        </div>
        <div class="card">
            <Img class="card-icon" src="36f12681bd1392381408.png"></Img>
            <h3 class="card-title">Neapolitan</h3>
            <div class="desc">Tomatoes, Mozzarella</div>
        </div>
        <div class="card">
            <Img class="card-icon" src="3f417c685919869e7ba2.png"></Img>
            <h3 class="card-title">Deep Dish</h3>
            <div class="desc">Sausage, Pepporoni</div>
        </div>
        <div class="card">
            <Img class="card-icon" src="36f12681bd1392381408.png"></Img>
            <h3 class="card-title">St. Louis</h3>
            <div class="desc">Provel Cheese, Sausage</div>
        </div>
        <div class="card">
            <Img class="card-icon" src="3f417c685919869e7ba2.png"></Img>
            <h3 class="card-title">Detroit</h3>
            <div class="desc">Pepperoni, Brick Cheese</div>
        </div>
        <div class="card">
            <Img class="card-icon" src="36f12681bd1392381408.png"></Img>
            <h3 class="card-title">Bar Style</h3>
            <div class="desc">Pepperoni, Green Onions</div>
        </div>
        <div class="card">
            <Img class="card-icon" src="3f417c685919869e7ba2.png"></Img>
            <h3 class="card-title">Roman</h3>
            <div class="desc">Tomatoes, Basil</div>
        </div>
        <div class="card">
            <Img class="card-icon" src="36f12681bd1392381408.png"></Img>
            <h3 class="card-title">New York</h3>
            <div class="desc">Mozzarella, Basil, Sausage</div>
        </div>
    </div>
    `;
    } else {

    };
    obj.classList.add('menutabActive');

    //Fill the page with desired content

};
function loadHomePage(obj) {
    //Clear the page
    if (![...obj.classList].includes('menutabActive')) {
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
    obj.classList.add('menutabActive');


};
