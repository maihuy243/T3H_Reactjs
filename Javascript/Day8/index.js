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
const modelAdd = get(".modal-add");
const btnAdd = get(".submitAdd");
const btnUpdate = get(".updateUser");

//value Add
const idAdd = get(".idAdd");
const usernameAdd = get(".usernameAdd");
const phoneAdd = get(".phoneAdd");
const emailAdd = get(".emailAdd");
const addressAdd = get(".addressAdd ");

//value Edit
const idEdit = get(".idEdit");
const usernameEdit = get(".usernameEdit");
const phoneEdit = get(".phoneEdit");
const emailEdit = get(".emailEdit");
const addressEdit = get(".addressEdit ");

let crrIndex = 0;

//Call API
const API = "http://localhost:3000/user";
async function getData() {
  const response = await fetch(API);
  const listsUser = await response.json();
  return listsUser;
}

const renderData = (lists, index) => {
  const newLists = lists.slice(Number(index), Number(index) + 2);
  view.innerHTML = "";
  newLists.map(({ id, username, email, address: { street }, phone }) => {
    return (view.innerHTML += `
    <tr class="item">
      <td>${id}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td>${street} </td>
     <td>${phone}</td>
     <td>
        <button class="btn btn-primary" onclick="handleEdit(${id})">Edit</button>
       <button class="btn btn-warning" onclick="handleDel(${id})">Del</button>
       <button class="btn btn-success" onclick="handlePrice(${id})">Buy</button>

      </td>
    </tr>
    `);
  });
};

const renderDataSearch = (lists) => {
  view.innerHTML = "";
  lists.map(({ id, username, email, address: { street }, phone }) => {
    return (view.innerHTML += `
    <tr class="item">
      <td>${id}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td>${street} </td>
     <td>${phone}</td>
     <td>
       <button class="btn btn-primary" onclick="handleEdit(${id})">Edit</button>
       <button class="btn btn-warning" onclick="handleDel(${id})">Del</button>
       <button class="btn btn-success" onclick="handlePrice(${id})">Buy</button>
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

//Search
const handleSearch = () => {
  if (get(".searchText").value && get(".keys").value) {
    getData().then((datas) => handleSearchItem(datas));
  } else getData().then((datas) => handlePagination(datas));
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

//btn
const nextPage = () => {
  crrIndex += 2;
  prevBtn.removeAttribute("disabled");
  getData().then((datas) => renderData(datas, crrIndex));
  if (crrIndex > 16) {
    crrIndex = 16;
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

//Add

const handleAddUser = () => {
  modelAdd.style.display = "block";
  const id = idAdd.value;
  const username = usernameAdd.value;
  const email = emailAdd.value;
  const address = addressAdd.value;
  const phone = phoneAdd.value;

  const userAdd = {
    id: id,
    username: username,
    email: email,
    address: {
      street: address,
    },
    phone: phone,
  };
  btnAdd.onclick = () => {
    modelAdd.style.display = "none";
    createUser(
      userAdd,
      getData().then((datas) => handlePagination(datas))
    );
  };
};

const createUser = (user, callback) => {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  fetch(API, option)
    .then((res) => res.json())
    .then(callback)
    .catch(() => alert("Trùng ID rồi nhé"));
};

// edit user
const handleEdit = (id) => {
  modelEdit.style.display = "block";
  getData().then((datas) => showModelEditUser(datas, id));
};

//show infor user
const showModelEditUser = (datas, idUser) => {
  const currUser = [...datas].filter((user) => user.id === idUser);
  const [
    {
      id,
      username,
      email,
      address: { street },
      phone,
    },
  ] = currUser;
  idEdit.value = id;
  usernameEdit.value = username;
  emailEdit.value = email;
  addressEdit.value = street;
  phoneEdit.value = phone;

  // btnUpdate.onclick = () => {
  //   modelEdit.style.display = "none";
  //   console.log(updateUser);
  // };
};

// const handleSubmit = () => {
//   const valueUsername = usernameEdit.value;
//   const valueEmail = emailEdit.value;
//   const valueStreet = addressEdit.value;
//   const valuePhone = phoneEdit.value;
//   const userEdit = {
//     username: valueUsername,
//     email: valueEmail,
//     address: {
//       street: valueStreet,
//     },
//     phone: valuePhone,
//   };

// };

const updateUser = (user, callback) => {
  console.log(user);
  const option = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  fetch(API, option)
    .then((res) => res.json())
    .then(callback)
    .catch(() => alert("Trùng ID rồi nhé"));
};

//close
const closeModal = () => {
  modelAdd.style.display = "none";
  modelEdit.style.display = "none";
};
//start
function start() {
  getData().then((datas) => handlePagination(datas));
}
start();
