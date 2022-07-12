//CRUD
// 1. Create  : Tạo Data         / POST
// 2. Read    : Read Data        / GET
// 3. Updata  : Update Data PUT  / PATCH
// 4. Delete  : Delete Data      / DELETE

const get = document.querySelector.bind(document);
const gets = document.querySelectorAll.bind(document);
const panigation = gets(".item");
const view = get(".view");
const nextBtn = get(".next");
const prevBtn = get(".prev");
const modelEdit = get(".modal-edit");
const idEdit = get(".idEdit");
const usernameEdit = get(".usernameEdit");
const phoneEdit = get(".phoneEdit");
const emailEdit = get(".emailEdit");
const addressEdit = get(".addressEdit ");

let crrIndex = 0;

//Call API
const API = "https://jsonplaceholder.typicode.com/users";
async function getData() {
  const response = await fetch(API);
  const listsUser = await response.json();
  return listsUser;
}

const renderData = (lists, index) => {
  const newLists = lists.slice(Number(index), Number(index) + 2);
  view.innerHTML = "";
  newLists.map(({ id, username, email, address: { street, city }, phone }) => {
    return (view.innerHTML += `
    <tr>
      <td>${id}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td>${street} ${city}</td>
     <td>${phone}</td>
     <td>
        <button class="btn btn-primary" onclick="handleEdit(${id})">Edit</button>
       <button class="btn btn-warning" onclick="handleDel(${id})">Del</button>
      </td>
    </tr>
    `);
  });
};

const renderDataSearch = (lists) => {
  view.innerHTML = "";
  lists.map(({ id, username, email, address: { street, city }, phone }) => {
    return (view.innerHTML += `
    <tr>
      <td>${id}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td>${street} ${city}</td>
     <td>${phone}</td>
     <td>
        <button class="btn btn-primary" onclick="handleEdit(${id})">Edit</button>
       <button class="btn btn-warning" onclick="handleDel(${id})">Del</button>
      </td>
    </tr>
    `);
  });
};

//panigation
const handlePagination = (datas) => {
  if (crrIndex === 0) {
    prevBtn.setAttribute("disabled", "");
  }
  renderData(datas, crrIndex);
  panigation.forEach((e) => {
    e.onclick = () => {
      get(".item.active").removeAttribute("disabled");
      get(".item.active").classList.remove("active");
      e.classList.add("active");
      e.setAttribute("disabled", "");
      let newIndex = e.dataset.item;
      renderData(datas, newIndex);
    };
  });
};

const handleSearch = () => {
  if (get(".searchText").value && get(".keys").value) {
    getData().then((datas) => handleSearchItem(datas));
  } else getData().then((datas) => handlePagination(datas));
};
const nextPage = () => {
  crrIndex += 2;
  prevBtn.removeAttribute("disabled");
  getData().then((datas) => renderData(datas, crrIndex));
  if (crrIndex > 8) {
    crrIndex = 8;
    nextBtn.setAttribute("disabled", "");
  } else nextBtn.removeAttribute("disabled");
};

const prevPage = () => {
  nextBtn.removeAttribute("disabled");
  crrIndex -= 2;
  if (crrIndex <= 0) {
    crrIndex = 0;
    prevBtn.setAttribute("disabled", "");
  } else prevBtn.removeAttribute("disabled");
  getData().then((datas) => renderData(datas, crrIndex));
};
//handle Search
const handleSearchItem = (data) => {
  const dataSearch = get(".searchText").value;
  const keys = get(".keys").value;
  let newList = [];
  if (keys === "id") {
    newList = data.filter((user) => user.id === Number(dataSearch));
  } else {
    data.forEach((user) => {
      user[keys].includes(dataSearch) ? newList.push(user) : user;
    });
  }
  renderDataSearch(newList);
};

//edit
const handleEdit = (id) => {
  modelEdit.style.display = "block";
  getData().then((datas) => showUser(datas));
  function showUser(data) {}
};

const handleSubmit = () => {
  modelEdit.style.display = "none";
};
//start
function start() {
  getData().then((datas) => handlePagination(datas));
}
start();
