// // Bài 3:

// // Có hai đội thể dục là Dolphins và Koalas. Họ cạnh tranh với từng 3 lần khác. Người chiến thắng với điểm số trung bình cao nhất sẽ giành được cúp!

// // Yêu cầu:

// // - Tính điểm trung bình của mỗi đội

// // - So sánh điểm trung bình của đội để xác định đội chiến thắng trong cuộc thi và in ra đội chiến thắng. Đừng quên rằng có thể có một trận hòa, vì vậy hãy kiểm tra điều đó (hòa có nghĩa là họ có cùng điểm trung bình)

// // - Yêu cầu về số điểm tối thiểu là 100. Với quy tắc này, một đội chỉ thắng nếu có số điểm cao hơn đội còn lại, đồng thời phải đạt ít nhất 100 điểm. Với yêu cầu này hãy tìm đội thắng. Nếu không có đội thắng hãy in ra thông báo hợp lệ (Không có đội thắng cuộc)

// // - Điểm số tối thiểu cũng áp dụng cho một trận hòa! Vì vậy kết quả hòa chỉ xảy ra khi cả hai đội có số điểm bằng nhau và cả hai đều có số điểm lớn hơn hoặc bằng 100 điểm. Nếu không, không đội nào giành được cúp

// // Data test:

// // + Data 1: Dolphins có điểm là 96, 108 và89. Koalas có điểm là 88, 91 và 110
// const average = (arr) => {
//   let sum = 0;
//   let ave = 0;
//   for (let item of arr) {
//     ave = (sum += item) / arr.length;
//   }
//   return ave;
// };
// const checkWin = (team1, team2) => {
//   let result2 = "";
//   if (team1 >= 100 && team2 >= 100) {
//     return (result2 =
//       team1 > team2 ? `Team 1 dành chiến thắng` : `Team 2 dành chiến thắng`);
//   } else if (team1 < 100 && team2 < 100) {
//     return (result2 = "Không đội nào dành được cúp");
//   } else if (team1 >= 100 && team2 < 100) {
//     return (result2 = "Team 1 win");
//   } else if (team1 < 100 && team2 >= 100) return (result2 = `Team 2 win`);
// };

// const Koalas = average([410, 95, 16]);
// const Dolphins = average([100, 200, 30]);

// console.log(checkWin(Koalas, Dolphins));
