const random = (n) => Math.floor(Math.random() * n);

const array = [];
const longArray = random(100);
console.log(longArray);

for (let i = 0; i < longArray; i++) {
  const elem = random(100);
  array.push(elem);
}

console.log(array);

const prom = () => {
  let sum = 0;
  array.forEach((val) => {
    sum += val;
  });
  calcProm = sum / array.length;
  return calcProm;
};

console.log("l promedio es: ", prom());
