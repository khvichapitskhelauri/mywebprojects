let a = document.getElementById("red");
let b = document.getElementById("blue");
let c = document.getElementById("black");
let selectedHeadphones = { id: 1, quantity: 1, name: 'Zebronics head phone', price: 100, img: "./photos/image 2.png" };

function red() {
    a.style.display = "flex";
    c.style.display = "none";
    b.style.display = "none";
    selectedHeadphones = { id: 1, quantity: 1, name: 'Zebronics head phone', price: 100, img: "./photos/image 2.png" };
}

function blue() {
    a.style.display = "none";
    c.style.display = "none";
    b.style.display = "flex";
    b.getElementsByTagName("span")[0].innerText = " $200";
    selectedHeadphones = { id: 2, quantity: 1, name: 'Zebronics head phone', price: 200, img: "./photos/blue-headphone.jpeg" };
}

function black() {
    a.style.display = "none";
    c.style.display = "flex";
    b.style.display = "none";
    c.getElementsByTagName("span")[0].innerText = "$300";
    selectedHeadphones = { id: 3, quantity: 1, name: 'Zebronics head phone', price: 300, img: "./photos/black-headphone.jpeg" };
}


const addCart = document.querySelector(".add-cart");
let shopBasket = document.querySelector(".shop-basket");
let x = [];
let quantitySum = 0;
let priceSum = 0;
let openShopping = document.querySelector(".shop-basket");
let closeShopping = document.querySelector(".closeshopping");
let listCard = document.querySelector(".listcard");
let card1 = document.getElementById("card1");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let headPhones = document.querySelectorAll(".colors-of-headphones div");

addCart.addEventListener("click", () => {

    const selected = x.find((ell) => {
        return ell.id == selectedHeadphones.id;
    })
    if (selected) {
        selected.quantity += 1;

    }
    else {
        x.push(selectedHeadphones);

    }
    drawCart();
});

function drawCart() {
    shopBasket.querySelector(".quantity").innerHTML = calculateQuantitySum();
    total.innerHTML = `$  ${calculatePriceSum()}`;

    let listText = '';
    for (let index = 0; index < x.length; index++) {
        const element = x[index];
        listText = listText + `<li > 
     <img src="${element.img}">
    <span> ${element.name} </span>
    <span> $ ${element.price} </span>
    <span>  ${element.quantity} </span>
    <span onClick="remove(${element.id})">  X </span>
    </li>`;
    }
    listCard.innerHTML = listText;

}
function remove(id) {
    for (let i = 0; i < x.length; i += 1) {

        if (x[i].id === id) {
            if (x[i].quantity > 1) {
                x[i].quantity -= 1;
            }
            else if (x[i].quantity <= 1) {
                x.splice(i, 1);
            }
        }
    }
    priceSum = 0;
    quantitySum = 0;
    drawCart();
}

function calculatePriceSum() {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        sum += element.price * element.quantity;
    }
    return sum;
}

function calculateQuantitySum() {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        sum += element.quantity;
    }
    return sum;
}

openShopping.addEventListener("click", () => {
    card1.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    card1.classList.remove('active');
})



// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json));