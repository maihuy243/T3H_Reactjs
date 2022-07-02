const data = [
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "a",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: true,
    correctAnswer: "ab",
  },
];

const get = document.querySelector.bind(document);
const gets = document.querySelectorAll.bind(document);
// ------------------ get button
const questionsElement = get(".questions");
const nextBtn = get(".next");
const prevBtn = get(".prev");
const resultBtn = get(".result");
const viewResult = get(".viewResult");

const result = {};

//quizApp

const quizApp = {
  index: 0,

  //render UI
  render(index = 0) {
    const [
      {
        question,
        answers: { a, b, c, d },
        multi,
      },
    ] = [data[index]];

    questionsElement.innerHTML = `
        <div class="question">
      ${question}
    </div>
    <div class="answers">
      <div class="form" data-value="a">
        <span class='correct'>A</span>
        <label> ${a}</label>
      </div>
      <div class="form" data-value="b">
        <span class='correct'>B</span>
        <label> ${b}</label>
      </div>
      <div class="form" data-value="c">
        <span class='correct'>C</span>
        <label> ${c}}</label>
      </div>
      <div class="form" data-value="d">
        <span class='correct'>D</span>
        <label> ${d}</label>
      </div>
    </div>
        `;
    this.typeButton(index);
    this.handleCheckedItem(index, multi);
  },

  //checkRadioBtn
  handleCheckedItem(index, multi) {
    const listItem = gets(".form");
    listItem.forEach((item) => {
      if (!multi) {
        item.onclick = function () {
          listItem.forEach((item2) => {
            item2.classList.remove("active");
          });
          item.classList.add("active");
          result[index] = item.dataset.value;
        };
      } else {
        item.onclick = function () {
          item.classList.toggle("active");
          result[index] += item.dataset.value;
          console.log(result);
          a;
        };
      }
    });
  },

  typeButton(index) {
    console.log(index);
    if (index === data.length - 1) {
      nextBtn.setAttribute("disabled", "");
      resultBtn.removeAttribute("disabled");
    } else if (index === 0) {
      prevBtn.setAttribute("disabled", "");
      resultBtn.setAttribute("disabled", "");
    } else {
      nextBtn.removeAttribute("disabled");
      prevBtn.removeAttribute("disabled");
      resultBtn.setAttribute("disabled", "");
    }
  },

  checkResultBtn() {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (result[i] === data[i].correctAnswer) total++;
    }
    viewResult.innerHTML = `Trả lời đúng ${total} / ${data.length}`;
  },
  //nextQuestion
  nextBtn(index) {
    index =
      index > data.length - 1
        ? (this.index = data.length - 1)
        : (index = index);
    this.render(index);
  },

  //previous Question
  prevBtn(index) {
    index = index <= 0 ? (this.index = 0) : index;
    this.render(index);
  },
  start() {
    this.render();
  },
};
quizApp.start();
