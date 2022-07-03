// Sử dụng cấu trúc mảng sẽ gán 2 phần tử đầu tiên cho biến firstColor và secondColor và gán các phần tử còn lại cho biến otherColors. Hiển thị giá trị của 3 biến này.

let colors = ["white", "blue", "yellow", "black", "red", "green"];

const [firstColor, secondColor, ...otherColor] = colors;
console.log("firstColor :", firstColor);
console.log("secondColor :", secondColor);
console.log("otherColor :", otherColor);
//
