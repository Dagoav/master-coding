var result = [];
var words = "";

while (result.length <= 5) {
  var user = prompt("ingresa caracteres");
  if (user !== "") {
    words += user + ",";
    result = words.split(",");
  }
  
  console.log(result);
}
result.pop()
console.log(result);
document.write(result);
