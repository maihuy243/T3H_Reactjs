// Cho công thức tính BMI = mass / height ** 2 = mass / (height * height) với mass là khối lượng, height là cân nặng

// - Input: Cho cân nặng, chiều cao của 2 người

// - Output:

// + Tính BMI của từng người

// + Ai BMI cao hơn sẽ in ra câu: “A BMI (số BMI của A) is higher than B (số BMI của B)!” với A, B là tên của 2 người bất kì

// Data test:

// + Data 1: Marks nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m

// + Data 2: Marry nặng 95 kg và cao 1.88 m. Harry nặng 85 kg và cao 1.76 m

const massMarks = 68;
const heightMarks = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMarks = massMarks / (heightMarks * heightMarks);
const bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMarks > bmiJohn)
  console.log(`BMI Marks is ${bmiMarks} higher than BMI John is ${bmiJohn}`);
else if (bmiMarks === bmiJohn)
  console.log(`BMI Marks is ${bmiMarks} higher equal BMI John is ${bmiJohn}`);
else console.log(`BMI Marks is ${bmiMarks} higher less BMI John is ${bmiJohn}`);

// Bài 2: Giải phương trình bậc 1:

// - Input: Cho phương trình bậc 1 dạng ax + b = c (a, b, c là tham số đầu vào)

// - Output: Tìm x

// Data test:

// + Data 1: -2x – 9 = -3

// + Data 2: 5x + 7 = 9
const giaiptbac1 = (a, b, c) => {
  if (a !== 0 && b !== 0 && c !== 0)
    console.log("Phương trình có nghiệm là x = ", (c - b) / a);
  else if (a === 0 && b === 0 && c === 0)
    console.log("Phương trình có vô số nghiệm");
  else if (a === 0 && b !== 0 && c !== 0) {
    if (b === c) console.log("Phương trình có 1 nghiệm :", c);
    else console.log("Phương trình vô nghiệm");
  }
};
giaiptbac1(4, 9, 1);

// Bài 3:

// Có hai đội thể dục là Dolphins và Koalas. Họ cạnh tranh với từng 3 lần khác. Người chiến thắng với điểm số trung bình cao nhất sẽ giành được cúp!

// Yêu cầu:

// - Tính điểm trung bình của mỗi đội

// - So sánh điểm trung bình của đội để xác định đội chiến thắng trong cuộc thi và in ra đội chiến thắng. Đừng quên rằng có thể có một trận hòa, vì vậy hãy kiểm tra điều đó (hòa có nghĩa là họ có cùng điểm trung bình)

// - Yêu cầu về số điểm tối thiểu là 100. Với quy tắc này, một đội chỉ thắng nếu có số điểm cao hơn đội còn lại, đồng thời phải đạt ít nhất 100 điểm. Với yêu cầu này hãy tìm đội thắng. Nếu không có đội thắng hãy in ra thông báo hợp lệ (Không có đội thắng cuộc)

// - Điểm số tối thiểu cũng áp dụng cho một trận hòa! Vì vậy kết quả hòa chỉ xảy ra khi cả hai đội có số điểm bằng nhau và cả hai đều có số điểm lớn hơn hoặc bằng 100 điểm. Nếu không, không đội nào giành được cúp

// Data test:

// + Data 1: Dolphins có điểm là 96, 108 và89. Koalas có điểm là 88, 91 và 110
const pointDolphins1 = 100;
const pointDolphins2 = 123;
const pointDolphins3 = 34;
const pointKoalas1 = 100;
const pointKoalas2 = 110;
const pointKoalas3 = 51;

const averageDolphins = (pointDolphins1 + pointDolphins2 + pointDolphins3) / 3;
const averageKoalas = (pointKoalas1 + pointKoalas2 + pointKoalas3) / 3;

if (averageDolphins < 100 && averageKoalas < 100)
  console.log("Không có đội nào dành chiến thắng");
else if (averageDolphins >= 100 && averageKoalas < 100)
  console.log("Dolphins dành chiến thắng");
else if (averageDolphins < 100 && averageKoalas >= 100)
  console.log("Koalas dành chiến thắng");
else if (averageDolphins >= 100 && averageKoalas >= 100) {
  if (averageDolphins > averageKoalas) console.log(`Dolphins dành chiến thắng`);
  else if (averageDolphins < averageKoalas)
    console.log(`Koalas dành chiến thắng`);
  else console.log(`2 Đội hòa nhau`);
}

// Bài 4: Tìm số lớn nhất trong hai số

// - Input: Cho hai số

// - Tìm số lớn nhất trong hai số và in ra thông báo hợp lý dưới dạng ‘N là số lớn nhất’ với N là số lớn nhất

const sosanh = (a, b) => {
  if (a > b) console.log(`${a} là số lớn nhất `);
  else if (a < b) console.log(`${b} là số lớn nhất `);
  else console.log("2 số bằng nhau");
};
sosanh(5, 8);

// Thực hiện các phép tính số học trên hai số

// - Input (đầu vào): Cho 2 số và phép tính cần thực hiện

// + add: cộng ( + )

// + subtract: trừ ( - )

// + multiply: nhân ( * )

// + divide: chia hết ( / )

// + modulus: Chia lấy dư ( % )

// - Output (đầu ra): Thực hiện phép tính với hai số

const operator = (a, b, op) => {
  if (op === "add") console.log(`a + b = `, a + b);
  else if (op === "subtract") console.log(`a - b = `, a - b);
  else if (op === "multiply") console.log(`a * b = `, a * b);
  else if (op === "divide") console.log(`a / b = `, a / b);
  else if (op === "modulus") console.log(`a % b = `, a % b);
};
operator(8, 8, "multiply");

// Input: Cho vào tên học sinh, và điểm số của học sinh đó

// - Output: Tìm xếp loại hạnh kiểm và in ra dưới dạng Tên_học_sinh xếp loại loại_điểm_của_học_sinh

// Xếp loại điểm như sau:

// + 90 <= điểm <= 100: Loại S

// + 80 <= điểm < 90: Loại A

// + 70 <= điểm < 80: Loại B

// + 60 <= điểm < 70: Loại C

// + 50 <= điểm < 60: Loại D

// + 40 <= điểm < 50: Loại E

// + 0 <= điểm < 40: Bạn không được lên lớps

const xeloaihocsinh = (point, name) => {
  if (90 <= point && point <= 100)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại S`);
  else if (80 <= point && point < 90)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại A`);
  else if (70 <= point && point < 80)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại B`);
  else if (60 <= point && point < 70)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại C`);
  else if (50 <= point && point < 60)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại D`);
  else if (40 <= point && point < 50)
    console.log(`Học sinh ${name} có điểm = ${point} xếp loại E`);
  else console.log(`Học sinh ${name} có điểm = ${point} Không được lên lớp`);
};

xeloaihocsinh(62, "A");
xeloaihocsinh(76, "G");
xeloaihocsinh(35, "C");
