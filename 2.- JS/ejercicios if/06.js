num1 = parseInt(prompt("Ingresa un número"));
num2 = parseInt(prompt("Ingresa un número"));
num3 = parseInt(prompt("Ingresa un número"));

if (num1 > num2 && num1 > num3) {
  document.write(num1, " (num1) es mayor");
} else if (num1 == num2 || num1 == num3 || num2 == num3) {
  document.write(
    "alguno de dos numeros es igual -> ",
    num1 + " ",
    num2 + " ",
    num3 + " "
  );
} else if (num2 > num3) {
  document.write(num2, " (num2) es mayor");
} else {
  document.write(num3, " (num3) es mayor");
}
