// Viết một hàm gọi là displayName () lấy một đối tượng làm đối số và in ra họ và tên của người đó. Sử dụng cấu trúc đối tượng trong đối số hàm.

person = {
  first: "Elon",
  last: "Musk",
  twitter: "@elonmusk",
  company: "Space X",
};

person2 = {
  first: "Mai",
  last: "Huy",
  twitter: "@elonmusk",
  company: "Space X",
};

const displayName = ({ first, last, ...a }) => {
  const { twitter, company } = a;
  return `${first} ${last} ${twitter} ${company}`;
};

<<<<<<< HEAD
// console.log(displayName(person2));
//
=======
console.log(displayName(person2));
>>>>>>> master
