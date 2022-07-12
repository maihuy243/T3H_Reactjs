async function getData() {
  const response = await fetch("http://localhost:3000/users");
  return response.json();
}

const renderData = (users) => {
  const root = document.querySelector("#root");
  return users.map(
    ({ name, email, avatar, address: { street, suite, city }, phone }) => {
      return (root.innerHTML += `
    <div class="card d-flex flex-column  justify-content-center align-items-center p-3 m-3 text-center ">
      <div class="image">
        <div class="bg-logo">
          <img class="logo" src="${avatar}" height="150" width="150" />
        </div>
      </div>
        <div class="name mt-3">${name}</div>
        <div class="phone">${phone}</div>
          <div class="idd1">${email}</div>
          <div class="adress">Adress: ${street} ${suite} ${city}</div>
    </div>
    `);
    }
  );
};
getData().then((data) => renderData(data));
