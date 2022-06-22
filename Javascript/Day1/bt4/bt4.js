// Bài 4: Tìm số lớn nhất trong hai số

// - Input: Cho hai số

// - Tìm số lớn nhất trong hai số và in ra thông báo hợp lý dưới dạng ‘N là số lớn nhất’ với N là số lớn nhất

const soSanh = (a, b) => {
  if (a > b) console.log(`${a} là số lớn nhất `);
  else if (a < b) console.log(`${b} là số lớn nhất `);
  else console.log("2 số bằng nhau");
};
soSanh(5, 8);
