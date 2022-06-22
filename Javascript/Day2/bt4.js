// Input: Cho 1 mảng
// - Output: Tìm số lần xuất hiện của các phần tử trong mảng
const myarr = [1, 2, 3, 4, 3, 4, 1, 5, 7, 7, 2, 4, 6, 7];

// //convert string to array string unique
// const texttest = "chu mi aaaaaaaaaaaa";
// const convertText = (text) => {
//   return [...new Set(text)];
// };
// const newText = convertText(texttest);
// console.log(newText);

// convert to unique array
const uniqueArray = (arr) => {
  return [...new Set(arr)];
};
const newarr = uniqueArray(myarr);

// check item in array with word
const checkWord = (array, word) => {
  let result = 0;
  for (const item of array) {
    item == word ? result++ : "";
  }
  return `Phần tử ${word} xuất hiện ${result} lần`;
};

// get element in newarr
for (const word of newarr) {
  console.log(checkWord(myarr, word));
}
