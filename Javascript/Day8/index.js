//CRUD
// 1. Create  : Tạo Data         / POST
// 2. Read    : Read Data        / GET
// 3. Updata  : Update Data PUT  / PATCH
// 4. Delete  : Delete Data      / DELETE

const get = document.querySelector.bind(document);
const gets = document.querySelectorAll.bind(document);
const panigation = gets(".item");
const view = get(".view");
const prevBtn = get(".prev");
const nextBtn = get(".next");

//Call API
const API = "https://jsonplaceholder.typicode.com/users";
async function getData() {
  const response = await fetch(API);
  const listsUser = await response.json();
  return listsUser;
}

const renderData = (lists, index = 0) => {
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
       <button class="btn btn-warning onclick="handleDel(${id})">Del</button>
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
       <button class="btn btn-warning onclick="handleDel(${id})">Del</button>
      </td>
    </tr>
    `);
  });
};

//panigation
const handlePagination = (datas) => {
  renderData(datas, (newIndex = 0));
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

//handle Search
const handleSearchItem = (data) => {
  const dataSearch = get(".searchText").value;
  const keys = get(".keys").value;
  const newList = [];
  console.log(keys);
  if (keys == "id") {
    Number(dataSearch);
    data.forEach((user) => {
      user[keys].includes(dataSearch) ? newList.push(user) : user;
    });
  } else {
    data.forEach((user) => {
      user[keys].includes(dataSearch) ? newList.push(user) : user;
    });
  }
  renderDataSearch(newList);
};

//start
function start() {
  getData().then((datas) => handlePagination(datas));
}
start();
