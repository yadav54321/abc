const func1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4];
      resolve(data);
    }, 2000);
  });
};

const func2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data1 = [4, 5, 6, 7];
      resolve(data1);
    }, 2000);
  });
};
const func3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data2 = [8, 9, 10, 11];
      resolve(data2);
    }, 2000);
  });
};
promise.all([func1(), func2(), func3()]).then((dataArrayValues) => {
  console.log("data has been collected from the array");
});
