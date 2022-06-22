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
