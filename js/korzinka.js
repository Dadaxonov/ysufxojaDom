const BASE_URl = "https://fakestoreapi.com/products/";
const elements = document.querySelector(".elements");
const kor = document.querySelector(".kor");
const totalPrice = document.querySelector(".total-price");
const totalBtn = document.querySelector(".total-price-btn");

kor.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.replace("http://127.0.0.1:5500/index.html");
});

let total = 0;

let spanSon = 1;

const render = (item) => {
  elements.innerHTML += `<div class="card">
  <img class="card-img" src="${item.image}"/>
   <h1 class="card-title">${item.title}</h1>
   <h4 class="card-price">$${item.price} %24off  ${Math.round(
    item.price * 0.76
  )}</h4>
 <button class="${"plus"}"  id="${item.id}">+</button>
 <span>${spanSon}</span>
 <button class="minus" id="${item.id}">-</button>
 <button class="del" id="${item.id}">Delete</button>
 </div>
`;
};
let x = 0;
const getData = async (t) => {
  try {
    const res = await fetch(BASE_URl);
    const data = await res.json();
    for (let i of data) {
      if (i.id == t) {
        render(i);
        x += Math.round(i.price * 0.76);
        totalFun(x);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

console.log();
const get = () => {
  for (let i = 0; i <= localStorage.length; i++) {
    getData(localStorage.getItem(`id${i + 1}`));
  }
};
get();

const totalFun = (x) => {
  totalPrice.innerHTML = `${total + x}$`;
  totalBtn.innerHTML = `${total + x}$`;
};
totalFun();

elements.addEventListener("click", (e) => {
  const { className, id } = e.target;
  if (className == "del") {
    console.log(id);
    console.log("dsd");
  } else if (className == "del") {
    console.log("del");
  }
});

const buyBtn = document.querySelector(".buy-btn");
