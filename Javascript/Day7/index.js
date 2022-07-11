function loadData(callback) {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then(callback);
}

const renderData = (users) => {
  const root = document.querySelector("#root");
  let htmls = ``;
  users.map(({ name, email, avatar, address: { street, suite, city } }) => {
    console.log(avatar);
    return (htmls += `
    <div class="card p-4 m-2 ">
      <div
        class="image d-flex flex-column justify-content-center align-items-center"
      >
        <button class="bg-logo">
          <img class="logo" src="${avatar}" height="100" width="100" />
        </button>
        <span class="name mt-3">${name}</span>
        <div></div>
        <div
          class="d-flex flex-column text-center justify-content-center align-items-center gap-2"
        >
          <span class="idd1">${email}</span>
          <span>Adress: ${street} ${suite} ${city}</span>
        </div>
      </div>
    </div>
    
    `);
  });
  root.innerHTML = htmls;
};

loadData((data) => renderData(data));
