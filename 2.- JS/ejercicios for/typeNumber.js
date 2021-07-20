// Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

const array = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
  if (typeof array[i] === "number") {
    console.log(array[i], " es un número");
  } else {
    console.log(array[i], " No es un número");
  }
}
