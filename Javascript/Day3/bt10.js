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

//render
const renderData = articles.map((item) => {
  let html = ``;
  return (html += `
  <div class="item">

  <div class="title">${item.title}</div>
  <div class="name">${item.name}</div>
  <div class="description">
  ${item.description}
  </div>
  <button>Less More</button>
  </div>
  `);
});
render.innerHTML = renderData.join("");

//button
//oke
const btns = gets("button");
const descriptions = gets(".description");
let isChecked = false;

const changeText = () => {
  btns.forEach((btn, index) => {
    btn.onclick = () => {
      isChecked = !isChecked;
      if (isChecked) {
        btn.innerHTML = "Read More";
        descriptions[index].innerHTML =
          articles[index].description.substring(0, 50) + "...";
      } else {
        btn.innerHTML = "Less More";
        descriptions[index].innerHTML = articles[index].description;
      }
    };
  });
};
changeText();
