// - Input: Cho 1 mảng
// - Tính tổng mảng đó (dùng for, reduce …. Tất cả các cách để tính tổng mảng đó)

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 2, 6, 89, 2];

const sum = (arr) => {
  return arr.reduce((prev, current) => prev + current);
};
console.log(sum(arr1));

// const sum2 = (arr) => {
//   let total = 0;
//   for (const item of arr) {
//     total += item;
//   }
//   return total;
// };
// console.log(sum2(arr2));
