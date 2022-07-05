//Repaso general de javascript
console.log("hola mundo");


//ARRAYS
console.log("*********ARREGLOS-ARRAYS**********")

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


//ACTIVIDAD LISTA DE COMPRAS

let miListaDeCompras = [["Mando", 2],["X-Box", 3],["Cargador", 5]];
console.log("Voy a comprar " + miListaDeCompras[1][1] + " unidades de " + miListaDeCompras[1][0] + ".");
console.log("Voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0] + ".");



//FUNCIONES
console.log("*********FUNCIONES**********")

function mostrarMensaje() {
    /* for(i = 0;i<10;i++){
        console.log("hola mi nombre es alfredo desde una funcion");
    } */
}
mostrarMensaje();

//Argumentos son los valores que asignamos a los parametros de la funcion

function sumar(a, b){
    //    parametros a, b
    let suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma)
    //return a + b;
}
sumar(5,6);// 11
//   argumento 5,6
sumar(20,30);//50

function concatenar(a,b,c){
    console.log(a + " " + b + " " + c);
}

concatenar("Estoy","aprendiendo","a programar");

//Ambito global, se puede usar, modificar etc en cualquier lugar del programa

let nombre = "Alfredo";// esta disponible para todas las funciones

function pintarNombre(){
    console.log(nombre)
}
pintarNombre();
//Ambito Local, solo se puede usar dentro de una funcion

function miFuncion(){
    var variableLocal = 4; //solo disponible para la funcion
    console.log(variableLocal);
}
 miFuncion();
 //console.log(variableLocal);// genera un error de "variableLocal is not defined"


 //Ambito Global vs Ambito local

 nombre = "Marcelo";// esta disponible para todas las funciones

function pintarNombreLocal(){
    let nombre = "Miguel";// Una varible local tiene más prioridad que una global dentro de una función
    console.log(nombre)
}
pintarNombreLocal();//miguel => Local
console.log(nombre);//marcelo => global


//Return

function sumar(a,b){
    return a + b;
}
console.log(sumar(5,3));

//Undefined, es un valor por defecto que devuelve las funciones si no se utiliza el return

function restar(a,b){
    console.log(a - b);
}
console.log(restar(5,3));// devuelve un UNDEFINED

// Asignar el valor retornado de una funcion a una variable

function multiplicar(a,b){
    return a * b;
}
let producto = multiplicar(5,3);// se guarda el valor retornado de la funcion multiplicar => 15
console.log(producto);

function crearCadenaConMeta (lenguajeProgramacion){
    return "Mi meta es aprender " + lenguajeProgramacion;
}
let miMeta = crearCadenaConMeta("Java");
console.log(miMeta);// mi meta es aprender java


// EJERCICIO 1 Permanece en fila

let miArreglo2 = [2,3];//este fue mi parte pero esta muy hardcoreado
function proximoEnLaFila(){
    miArreglo2.push(4);
    let numEliminado = miArreglo2.shift();
    return  numEliminado;
}
//Ejercicio 1 mejorado
function proximoEnLaFila2(arr, num){
    arr.push(num); //agrega un elemento al final
    return arr.shift(); //remueve el primer elemento

}
let miArreglo3 = [1,2,3,4,5];

console.log("Antes: " + JSON.stringify(miArreglo3));//JSON.stringify convierte en texto 
console.log(proximoEnLaFila2(miArreglo3,6))//1
console.log("Después: " + JSON.stringify(miArreglo3));// [2,3,4,5,6]


//VALORES BOOLEANOS true-false

console.log(true);
console.log(false);

//Operador de igualdad, ==

console.log(5 == 5);// true
console.log(6 == 5);// false
console.log("hola" == "hola");//true
console.log("hola" == "Hola");//false
console.log([1] == [1]);//false, no es recomendado para comparar arreglos porq no compara el contenido sino el objeto
console.log("  ")

//Operador de igualdad estricta, ===

console.log(1 === "1");//false, estricto
console.log(1 == "1");//true, no estricto
console.log(2 === 2);//true
console.log("  ")

//Operador de desigualdad, != es distinto

console.log(9 != 6);//true
console.log(9 != 9);//false
console.log("hola" != "hola");// false