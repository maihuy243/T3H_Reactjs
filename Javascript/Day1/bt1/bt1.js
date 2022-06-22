// Cho công thức tính BMI = mass / height ** 2 = mass / (height * height) với mass là khối lượng, height là cân nặng

// - Input: Cho cân nặng, chiều cao của 2 người

// - Output:

// + Tính BMI của từng người

// + Ai BMI cao hơn sẽ in ra câu: “A BMI (số BMI của A) is higher than B (số BMI của B)!” với A, B là tên của 2 người bất kì

// Data test:

// + Data 1: Marks nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m

// + Data 2: Marry nặng 95 kg và cao 1.88 m. Harry nặng 85 kg và cao 1.76 m

const bmi = (mass, height) => {
  return mass / height ** 2;
};
const john = bmi(92, 1.95);
const mark = bmi(85, 1.76);

const check = (user1, user2) => {
  const result =
    user1 > user2
      ? `A BMI is ${user1} higher than B BMI is ${user2}`
      : `A BMI is ${user1} less than B BMI is ${user2} `;
  return result;
};
console.log(check(john, mark));
