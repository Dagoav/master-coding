var num = parseInt(prompt("ingresa un número"));
var multiplos = [];
var i = 1;

if (!num || num == NaN) {
  num = "No hay valor";
  multiplos.push(num);
}

while (i <= num) {
  if (i % 5 == 0 || i == 1) {
    multiplos.push(i);
  }

  i++;
}

document.write(
  `
    <div style="width:400px;">los multiplos de 5 desde el 1 hasta el ${num} son: 
      <p  style="color:red;width: 600px;"> ${multiplos}</p>
    </div>
  `
);
