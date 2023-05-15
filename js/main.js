const BASE_URl = "https://fakestoreapi.com/products/";
const box = document.querySelector(".box");
const korBtn = document.querySelector(".kor");
const mensClothing = document.querySelector(".mensClothing");
const all = document.querySelector(".all");
const electronics = document.querySelector(".electronics");
const jewelery = document.querySelector(".jewelery");
const womensClothing = document.querySelector(".womensClothing");
const searchIcon = document.querySelector(".search-icon");
const elament = document.querySelector(".elament");
const soni = document.querySelector(".korzinka-miqdori");

korBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // window.location.replace("http://127.0.0.1:5500/korzinka.html");
  location.pathname = "../korzinka.html";
});

const render = (el) => {
  elament.innerHTML = el
    .map(
      (item) =>
        `<li class="card">
         <img class="card-img" src="${item.image}"/>
          <h1 class="card-title">${item.title}</h1>
          <h6>${item.rating.rate} rate , ${item.rating.count} count
          <h4 class="card-price">$${item.price} %24off  ${Math.round(
          item.price * 0.76
        )}</h4>
        <button type="submit" class="add-kor" id="${
          item.id
        }">add korzinka</button>
        </li>
   `
    )
    .join("");
};
const getData = async (x = "") => {
  try {
    const res = await fetch(BASE_URl + `${x}`);
    const data = await res.json();
    render(data);
  } catch (error) {
    console.log(error);
  }
};
getData();

electronics.addEventListener("click", () => {
  getData("category/electronics");
});
jewelery.addEventListener("click", () => {
  getData("category/jewelery");
});
all.addEventListener("click", () => {
  getData("");
});
mensClothing.addEventListener("click", () => {
  getData("category/men's clothing");
});
womensClothing.addEventListener("click", () => {
  getData("category/women's%20clothing");
});

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("sds");
});

//korzinka qoshish
let son = 0;
elament.addEventListener("click", (e) => {
  let { id, className } = e.target;
  if (className == "add-kor") {
    son++;
    soni.textContent = son;
    localStorage.setItem(`id${son}`, id);
  }
});
