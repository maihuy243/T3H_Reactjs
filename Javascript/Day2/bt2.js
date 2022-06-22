// Input: Cho 1 object
// - Output: Viết hàm kiểm tra xem object đó rỗng không

const obj1 = {};
const obj2 = { name: "A" };

const checkObj = (obj) => {
  const result =
    Object.keys(obj).length === 0
      ? "Đây là Obj rỗng"
      : "Đây không phải là Obj rỗng";
  return result;
};
console.log(checkObj(obj2));
console.log(checkObj(obj1));
