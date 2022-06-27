const arr = {
  name: "huy",
  a1: "a1",
  a2: "a2",
  a3: {
    a4: "a4",
    a5: "a5",
    a6: [1, 2, 3],
  },
};

const {
  a3: {
    a6: [a, b, c],
  },
} = arr;
console.log(c);
