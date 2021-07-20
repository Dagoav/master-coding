// Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

const user = parseInt(prompt("introduce un número"));
let i = 0;
console.info(pokemons);

for (let i = 0; i < pokemons.length; i++) {
  let li = document.createElement("li");
  li.textContent = pokemons[i];
  unOrderList.appendChild(li);
}

while (i <= user) {
  if (i % 5 == 0 || i == 0) {
    console.log(i, pokemons[i]);
    let li = document.createElement("li");
    li.textContent = `${i == 0 ? "1" : i}.- ${pokemons[i]}`;
    multiplos.appendChild(li);
  }
  i++;
}
