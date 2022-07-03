// - Input: Cho vào chuỗi bất kì
// - Output: Đếm xem chuỗi đó có bao nhiêu nguyên âm (Nguyên âm là a, e, I, o, u)

const text = "co oi co check bai giup em nha ";

const searchKeyWord = (string) => {
  let a = 0,
<<<<<<< HEAD
    e = 1,
=======
    e = 0,
>>>>>>> baitapjs
    I = 0,
    o = 0,
    u = 0;
  let result = "";

  for (let word of string) {
    switch (word) {
      case "a":
        a++;
        break;
      case "e":
        e++;
        break;
      case "I":
        I++;
        break;
      case "o":
        o++;
        break;
      case "u":
        u++;
        break;
    }
  }
  sum = a + e + I + o + u;
  return (result += `Có ${a} nguyên âm a,
Có ${e} nguyên âm e,
Có ${I} nguyên âm I,
Có ${o} nguyên âm o,
Có ${u} nguyên âm u,
Có tổng ${sum} nguyên âm 
`);
};
console.log(searchKeyWord(text));
