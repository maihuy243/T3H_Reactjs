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
const bgApp = get(".quizApp");
const reload = get(".reload");

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
      !multi
        ? (item.onclick = function () {
            listItem.forEach((item2) => {
              item2.classList.remove("active");
            });
            item.classList.add("active");
            result[index] = item.dataset.value;
            console.log(result);
          })
        : (item.onclick = function () {
            let multiAns = "";
            item.classList.toggle("active");
            const multiAnswer = gets(".active");

            multiAnswer.forEach((item) => {
              multiAns += item.getAttribute("data-value");
            });
            result[index] = multiAns;
            console.log(result);
          });
    });
  },

  //check type disabled btn
  typeButton(index) {
    if (index === data.length - 1) {
      nextBtn.style.display = "none";
      reload.style.display = "none";
      resultBtn.style.display = "block";
    } else if (index === 0) {
      reload.style.display = "none";

      prevBtn.style.display = "none";
      resultBtn.style.display = "none";
    } else {
      resultBtn.style.display = "none";
      reload.style.display = "none";
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
  },

  checkResultBtn() {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (result[i] === data[i].correctAnswer) total++;
    }
    viewResult.innerHTML = `Trả lời đúng ${total} / ${data.length}`;
    total === 4
      ? (bgApp.style.backgroundColor = "green")
      : (bgApp.style.backgroundColor = "red");
    reload.style.display = "block";
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

  //app Start
  start() {
    this.render();
  },
};
quizApp.start();
