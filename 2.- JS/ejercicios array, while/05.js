var num1 = parseInt(prompt("ingresa un número"));
var num2 = parseInt(prompt("ingresa un número"));
var loteria = 1;

while (loteria < 50) {
  if (loteria == num1 || loteria == num2) {
    document.write("Loteria!! ");
  } else {
    document.write(loteria, " ");
  }
  loteria++;
}
