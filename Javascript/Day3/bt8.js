const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// + Lấy mảng gồm tất cả names
const getNames = characters.reduce(
  (result, current) => [...result, current.name],
  []
);
// console.log(getNames);
// output ['Luke Skywalker', 'Darth Vader', 'Leia Organa', 'Anakin Skywalker']

// + Lấy mảng gồm tất cả height
const getHeigth = characters.reduce(
  (result, current) => [...result, current.height * 1],
  []
);
// console.log(getHeigth);
// (4) [172, 202, 150, 188]

// + Tìm những người có height nhỏ hơn 100

const userHeighMax100 = characters.filter((user) => user.height < 100);
// console.log(userHeighMax100);

// + Tìm những người có mass lớn hơn 100
const userMassMin100 = characters.filter((user) => user.mass > 100);
// console.log(userMassMin100);

// + Sắp xếp mảng theo name, mass, hieght, theo giới tính (gender)
const softKey = characters.map((user) => {
  return Object.keys(user).sort((a, b) => b - a);
});
console.log(softKey);
