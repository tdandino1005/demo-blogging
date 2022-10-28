const form = document.querySelector("form");
const main = document.querySelector("main");

const h1 = document.createElement("h1");
const h2 = document.createElement(small");
const p = document.createElement("p");

form.addEventListener("submit", function (event) {
event.preventDefault();
const formData = new FormData(event.target);
  const values = Object.fromEntries(formData.entries());

  console.log(values);

  //Object Destructurinng
  const { title, subtitle, author, content } = values;

h1.textContent = title;
h2.textContent = subtitle;
small.textContent = author;
p.textContent = content;

main.append( h1, h2, small, p);



});