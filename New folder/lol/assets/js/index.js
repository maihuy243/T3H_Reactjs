const get = document.querySelector.bind(document);
const gets = document.querySelectorAll.bind(document);

const slider = gets(".item");
const dots = gets(".btn");
const activenav = gets(".active.active1");
const nav2 = get(".menu2-nav");

const app = {
  //Slide
  slide: function () {
    index = 0;
    setInterval(() => {
      slider.forEach((e) => {
        e.style.display = "none";
      });
      dots.forEach((i) => {
        i.classList.remove("active");
      });
      slider[index].style.display = "block";
      dots[index].classList.add("active");
      index++;
      if (index > slider.length - 1) index = 0;
    }, 1500);
  },

  // Navigation
  navigation: function () {
    nav2.onmousemove = function () {
      nav2.style.display = "flex";
    };
    nav2.onmouseleave = function () {
      nav2.style.display = "none";
    };
    activenav.forEach((item) => {
      item.onmousemove = function () {
        nav2.style.display = "flex";
      };
      item.onmouseleave = function () {
        nav2.style.display = "none";
      };
    });
  },

  // App
  start: function () {
    this.slide();
    this.navigation();
  },
};

app.start();
