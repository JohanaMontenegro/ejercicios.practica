l; //et numero: number = Number(prompt("ingrese numero "));
let suma: number = 0;

while (numero >= 1 && numero <= 10) {
  suma += numero;
  numero = Number(prompt("ingrese otro valor"));
}
console.log("el resultdo es", suma);
