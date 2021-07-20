const getName = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("bode");
    }, 1500);
  });
};

// console.time("waiting");
// getName().then((name) => {
//   console.log(name);
//   console.timeEnd("waiting");
// });

console.time("waiting");
const sayHello = async () => {
  const name = await getName();
  return `Hello ${name}`;
};

sayHello().then((res) => {
  console.log(res);
  console.timeEnd("waiting");
});
