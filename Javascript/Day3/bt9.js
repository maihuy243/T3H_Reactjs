// Định dạng địa chỉ ở dạng: address, district, province, city
// -	Hãy cấu trúc dữ liệu để in ra địa chỉ dạng như trên
// -	Hãy viết hàm để in ra địa chỉ dạng trên với dữ liệu đã cấu trúc

const UserAddress = {
  address: "Tu Hoang",
  district: "Tu Liem",
  province: "Xuan Phuong",
  city: "Ha Noi",
};

const addressUser = (obj) => {
  const { address, district, province, city } = obj;
  return `Địa chỉ : ${address + " " + province + " " + district + " " + city}`;
};
console.log(addressUser(UserAddress));
