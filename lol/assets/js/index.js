const get = document.querySelector.bind(document);
const gets = document.querySelectorAll.bind(document);

const slider = gets(".item");
const dots = gets(".btn");
const activenav = gets(".active.active1");
const nav2 = get(".menu2");

const app = {
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

  navigation: function () {
    activenav.forEach((item) => {
      item.onmouseover = function () {
        nav2.innerHTML = `
        <div class="menu2-nav container">
          <div></div>
          <div>
            <div>TIN TỨC</div>
            <div>SỰ KIỆN</div>
            <div>TIN GAME</div>
            <div>ESPORT</div>
            <div>CỘNG ĐỒNG</div>
            <div>CẨM NANG</div>
            <div>VŨ TRỤ</div>
          </div>
          <div>
            <div>TIN TỨC</div>
            <div>SỰ KIỆN</div>
            <div>TIN GAME</div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>       
        `;
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
