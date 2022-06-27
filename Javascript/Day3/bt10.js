const articles = [
  {
    name: "Neuer",
    title: "Học Javascript như thế nào",
    description: `An array of odd numbers.
    An array of numbers divisible by 2 or 5.
    An array of numbers divisible by 3 and then squared those numbers.
    The sum of the following: square the numbers divisible by 5.
    `,
  },
  {
    name: "Neuer Goretzka",
    title: "Học React như thế nào",
    description: `An array of odd numbers.
    An array of numbers divisible by 2 or 5.
    An array of numbers divisible by 3 and then squared those numbers.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.`,
  },

  {
    name: "Goretzka Neuer",
    title: "Làm thế nào để trở lên tốt hơn",
    description: `An array of odd numbers.
    An array of numbers divisible by 2 or 5.
    An array of numbers divisible by 3 and then squared those numbers.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.`,
  },
];

const get = document.querySelector.bind(document);
const gets = document.querySelectorAll.bind(document);
const render = get("#article");

//button handle
let isChecked = false;

//render
const renderData = articles.map((item) => {
  let html = ``;
  return (html += `
  <div class="item">

  <div class="title">${item.title}</div>
  <div class="name">${item.name}</div>
  <div class="description">
  ${item.description}
  <button>Read more</button>
  </div>
  </div>
  `);
});
//
render.innerHTML = renderData.join("");

//button
const buttons = gets("button");

buttons.forEach((button) => {
  let changeText = ``;
  button.onclick = () => {
    isChecked = !isChecked;
    console.log("isChecked", isChecked);
    changeText = isChecked ? "Lessmore" : "Read more";

    button.innerHTML = changeText;
  };
});
