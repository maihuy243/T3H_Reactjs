const users = [
  {
    id: 1,
    first_name: "Eamon",
    last_name: "Harhoff",
    email: "eharhoff0@imageshack.us",
    gender: "Male",
    age: 76,
    salary: 18888,
  },
  {
    id: 2,
    first_name: "Laney",
    last_name: "Whittam",
    email: "lwhittam1@issuu.com",
    gender: "Male",
    age: 24,
    salary: 15018,
  },
  {
    id: 3,
    first_name: "Lynett",
    last_name: "Twinberrow",
    email: "ltwinberrow2@gov.uk",
    gender: "Female",
    age: 99,
    salary: 13343,
  },
];

// Bài 1: Sử dụng forEach để lấy first_name và last_name của tất cả người dùng và đặt nó vào một mảng khác. Thứ tự trong mảng mới phải cùng thứ tự với người dùng xuất hiện trong mảng người dùng
//
let arr = [];
let fullname = "";
users.forEach((user) => {
  fullname = `${user.first_name} ${user.last_name}`;
  arr.push(fullname);
});
// console.log(arr);

//output
// [
//   'first_name : Eamon + last_name : Harhoff',
//   'first_name : Laney + last_name : Whittam', ... ]

// Bài 2: Tìm user là male và có tuổi dưới 40
<<<<<<< HEAD
//
const findUsers = users.filter(
  (user) => user.gender === "Male" && user.age < 40
);
// console.log("findUsers", findUsers);
=======

const findUsers = users.map((user) => {
  if (user.gender === "Male" && user.age < 40) return user;
  return {};
});
console.log("findUsers", findUsers);
>>>>>>> master

// //outpit
// [ {age: 34
// email: "pgorec@washington.edu"
// first_name: "Padget"
// gender: "Male"
// id: 13
// last_name: "Gore"
// salary: 8029} , .....]

//Bài 3: Làm giống bài 1 nhưng sử dụng map
//
const newArray = users.map(
  (user) => `first_name :${user.first_name} ,last_name: ${user.last_name}`
);
// console.log(newArray);

// output ['first_name :Eamon ,last_name: Harhoff',...]
//
//Bài 4: Sử dụng map để chuyển đổi key của object thành camelCase

const convertToCamelCase = users.map((user) => {
  let obj = {};
  Object.keys(user).forEach((key) => {
    if (key.split("_").length >= 2) {
      let newkey = key.split("_");
      newkey = newkey.reduce(
        (a, b) =>
          a[0].toLowerCase() +
          a.slice(1) +
          b.charAt(0).toUpperCase() +
          b.slice(1)
      );
      obj[newkey] = user[key];
    } else obj[key.toLowerCase()] = user[key];
  });
  return obj;
});

// console.log(convertToCamelCase);
<<<<<<< HEAD

//Sắp xếp theo firstName và Salary

const softbyFirstNameSalary = users.sort(
  (a, b) => a.salary - b.salary || b.first_name - a.first_name
);

// console.log("softbyFirstNameSalary :", softbyFirstNameSalary);
=======
>>>>>>> master
