const arr = [1, 2, 3, 4, 5, 6];

//Tổng số chẵn
const tongSoChan = arr.reduce((a, b) => (b % 2 === 0 ? a + b : a), 0);
console.log("tổng chẵn", tongSoChan);

//Tổng số lẻ
const tongSoLe = arr.reduce((a, b) => (b % 2 !== 0 ? a + b : a), 0);
console.log("tổng lẻ", tongSoLe);

//Tích các phần tử trong mảng
const tich = arr.reduce((a, b) => {
  return a * b;
});
console.log("Tích", tich);
