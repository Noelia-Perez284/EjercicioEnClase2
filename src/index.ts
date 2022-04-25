let btn1 = <HTMLButtonElement>document.getElementById("btn1");
let btn2 = <HTMLButtonElement>document.getElementById("btn2");
let btn3 = <HTMLButtonElement>document.getElementById("btn3");
//let rotulo1 = document.getElementById("rotulo1");
//let rotulo2 = document.getElementById("rotulo2");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let mostrarResultado = <HTMLElement>document.getElementById("mostrarResultado");

let base_1: number = 0;
let exponente_2: number = 0;

btn1.addEventListener("click", () => {
  base_1 = Number(dato1.value);
});

btn2.addEventListener("click", () => {
  exponente_2 = Number(dato2.value);
});

function potencia(base: number, exponente: number): number {
  return Math.pow(base, exponente);
}

btn3.addEventListener("click", () => {
  let resultado: number = potencia(base_1, exponente_2);
  mostrarResultado.innerHTML = "El resultado es: " + resultado;
});

//rotulo1.innerHTMl = "Ingrese La base";
//rotulo2.innerHTML = "Ingrese el Exponente";
