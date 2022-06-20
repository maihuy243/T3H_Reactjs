const ex = (arr) => {
  let ar = [];
  for (const item of arr) {
    const ave = item.point.reduce((a, b) => a + b) / item.point.length;
    console.log(`Điểm trung bình của ${item.name} là : ${ave}`);
    ar.push(ave);
  }
  const max = Math.max(...ar);
  const index = ar.indexOf(max);
  for (const i of ar) {
    const indexI = ar.indexOf(i);
    if (i === max) {
      console.log(
        `Đội chiến thắng là ${arr[index].name} và ${arr[indexI].name}`
      );
    } else console.log(`Đội chiến thắng là ${arr[index].name}`);
  }
};

ex([
  {
    name: "A",
    point: [122, 418, 112],
  },
  {
    name: "B",
    point: [122, 418, 112],
  },
  {
    name: "C",
    point: [10, 23, 82],
  },
]);
