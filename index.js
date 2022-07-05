//Repaso general de javascript
console.log("hola mundo");


//Arrays
let miArreglo = [10, 20, 30];
// indicie array  0 |1  | 2
console.log(miArreglo);
//para pintar el valor de un indice de array
console.log(miArreglo[1]);
//sumar valores de un array
let suma = miArreglo[0]+ miArreglo[1]+ miArreglo[2];
console.log(suma);
//modifica datos de un arreglo
miArreglo[0] = 30;
console.log(miArreglo);
//Array anidados, agregar
miArreglo[1] = ["manzana", "pera"];
console.log(miArreglo);
//Arreglo Anidados o multidimensionales
let miArregloAnidado = [[1,2,3],[4,5,6],[7,8,9]];
//  indice                  0       1       2
//  indices interno       0 1 2   0 1 2   0 1 2
console.log(miArregloAnidado[0]);//[1 , 2 , 3]
// Pintar un arreglo dentro de otro arreglo
console.log(miArregloAnidado[0][1]);//2

console.log("METODOS DE ARRAY, .push() .pop() .shift() .unshift()")

// PUSH() METHOD, agrega al final

let estaciones = ["Invierno", "Otoño", "Primaver"];
console.log(estaciones);//["Invierno", "Otoño", "Primaver"]

estaciones.push("Verano");
console.log(estaciones);//["Invierno", "Otoño", "Primaver", "Verano"]


//.POP() Method, quita el utlimo valor del arreglo y se puede guardar en una variable

estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
let estacion = estaciones.pop();
console.log(estaciones);//["Invierno", "Otoño", "Primavera"]

console.log(estacion);// "Verano"

// .SHIFT Method, quita el valor al comienzo del array

estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estaciones.shift();
console.log(estaciones)// ["Otoño", "Primavera", "Verano"]

// .UNSHIFT Method, agrega un valor al comienzo del array

estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.unshift("Verano");
console.log(estaciones)// ["Verano","Invierno","Otoño", "Primavera", ]