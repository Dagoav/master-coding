var array = [];
var random;

while (array.length < 10) {
  random = Math.ceil(Math.random() * 10);
  array.push(random);
}
document.write(array);
