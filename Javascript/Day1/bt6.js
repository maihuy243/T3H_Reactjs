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

const studenRanking = (point, name) => {
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

studenRanking(62, "A");
studenRanking(76, "G");
studenRanking(35, "C");
