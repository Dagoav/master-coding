let user = null;
let result = "";

while (user !== "") {
  user = prompt("ingresa letras o palabras");
  result += user + " ";
}

document.write(result);
