///// Ex1 
const mass_Marks = 78;
const height_Marks = 1.69;
const mass_John = 92;
const height_John = 1.95;
const bmi_Marks = mass_Marks / (height_Marks * height_Marks);
const bmi_John = mass_John / (height_John * height_John);

const check =
  bmi_Marks > bmi_John
    ? `BMI Marks is ${bmi_Marks} higher than BMI John is ${bmi_John}`
    : bmi_Marks === bmi_John
    ? `BMI Marks is ${bmi_Marks} higher equal BMI John is ${bmi_John}`
    : `BMI Marks is ${bmi_Marks} higher less BMI John is ${bmi_John}`;
console.log(check);

///// Ex2
// ax + b = c
const ex2 = (a, b, c) => {
  if (a !== 0 && b !== 0 && c !== 0)
    console.log("Phương trình có nghiệm là x = ", (c - b) / a);
  if (a === 0 && b === 0 && c === 0)
    console.log("Phương trình có vô số nghiệm");
  if (a === 0 && b !== 0 && c !== 0) {
    if (b === c) console.log("Phương trình có 1 nghiệm :", c);
    else console.log("Phương trình vô nghiệm");
  }
  if (a !== 0 && b !== 0 && c === 0)
    console.log("Phương trình có nghiệm : ", -b / a);
  if (a !== 0 && b === 0 && c !== 0)
    console.log("Phương trình có nghiệm : ", c / a);
};
ex2(5, 7, 9);

///// Ex3

const point_Dolphins_1 = 100;
const point_Dolphins_2 = 100;
const point_Dolphins_3 = 100;
const point_Koalas_1 = 100;
const point_Koalas_2 = 110;
const point_Koalas_3 = 100;

const average_Dolphins =
  (point_Dolphins_1 + point_Dolphins_2 + point_Dolphins_3) / 3;
const average_Koalas = (point_Koalas_1 + point_Koalas_2 + point_Koalas_3) / 3;

if (average_Dolphins < 100 && average_Koalas < 100)
  console.log("Không có đội nào dành chiến thắng");
if (average_Dolphins >= 100 && average_Koalas < 100)
  console.log("Dolphins dành chiến thắng");
if (average_Dolphins < 100 && average_Koalas >= 100)
  console.log("Koalas dành chiến thắng");
if (average_Dolphins >= 100 && average_Koalas >= 100) {
  const check2 =
    average_Dolphins > average_Koalas
      ? `Dolphins dành chiến thắng`
      : average_Dolphins < average_Koalas
      ? `Koalas dành chiến thắng`
      : `2 Đội hòa nhau`;
  console.log(check2);
}

///// Ex4 
const ex4 = (a, b) => {
  if (a > b) console.log(`${a} là số lớn nhất `);
  else console.log(`${b} là số lớn nhất `);
};
ex4(-123, 1);

///// Ex5
const ex5 = (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} / ${b} = ${a / b}`);
  console.log(`${a} % ${b} = ${a % b}`);
};
ex5(4, 4);

///// Ex6
const ex6 = (point, name) => {
  if (9 <= point && point <= 10)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại S`);
  if (8 <= point && point < 9)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại A`);
  if (7 <= point && point < 8)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại B`);
  if (6 <= point && point < 7)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại C`);
  if (5 <= point && point < 6)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại D`);
  if (4 <= point && point < 5)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại E`);
  if (0 <= point && point < 4)
    console.log(`Học sinh ${name} có điểm = ${point} Không được lên lớp`);
};
const point_A = 6;
const name_A = "A";
const point_B = 2;
const name_B = "B";
const point_C = 9;
const name_C = "C";
ex6(point_A, name_A);
ex6(point_B, name_B);
ex6(point_C, name_C);
