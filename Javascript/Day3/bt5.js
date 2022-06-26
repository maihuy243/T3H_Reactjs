const users = [
  {
    id: 1,
    first_name: "Eamon",
    last_name: "Harhoff",
    email: "eharhoff0@imageshack.us",
    gender: "Male",
    age: 36,
    salary: 18888,
  },
  {
    id: 2,
    first_name: "Laney",
    last_name: "Whittam",
    email: "lwhittam1@issuu.com",
    gender: "Male",
    age: 39,
    salary: 15018,
  },
  {
    id: 3,
    first_name: "Lynett",
    last_name: "Twinberrow",
    email: "ltwinberrow2@gov.uk",
    gender: "Male",
    age: 12,
    salary: 13343,
  },
];

// Bài 1: Sử dụng forEach để lấy first_name và last_name của tất cả người dùng và đặt nó vào một mảng khác. Thứ tự trong mảng mới phải cùng thứ tự với người dùng xuất hiện trong mảng người dùng
// Bài 2: Tìm user là male và có tuổi dưới 40
// Bài 3: Làm giống bài 1 nhưng sử dụng map
// Bài 4: Sử dụng map để chuyển đổi key của object thành camelCase
// Bài 5: Dùng reduce để làm từ bài 1 -> bài 4

//1 lấy first_name và last_name của tất cả người dùng và đặt nó vào một mảng khác = reduce
const getFirstLastName = users.reduce(
  (a, b) => [a + b.first_name + " " + b.last_name + ","],
  []
);
// console.log(getFirstLastName);
// output : ['Eamon Harhoff,Laney Whittam,Lynett Twinberrow,']

//2 Tìm user là male và có tuổi dưới 40 = reduce

const findUser = users.reduce((a, b) => {
  if (b.age < 40 && b.gender == "Male") {
    return [...a, b];
  }
  return a;
}, []);
// console.log(findUser);
// output [{...},{...}]

const convertToCamelCase = users.reduce((a, b) => {
  let obj = {};
  Object.keys(b).forEach((key) => {
    const newkey = key
      .split("_")
      .reduce(
        (result, current) =>
          result + current.charAt(0).toUpperCase() + current.slice(1)
      );
    obj[newkey] = b[key];
  });
  return [...a, obj];
}, []);

// console.log(convertToCamelCase);
// output [{id: 1, firstName: 'Eamon', lastName: 'Harhoff', email: 'eharhoff0@imageshack.us', gender: 'Male', …}]
