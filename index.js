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
console.log([1,2] != [1,2]);// true, son distintos
console.log("  ")

//Desigualdad estricta, !==

console.log(1 != "1");//false
console.log(1 !== "1");//true, desigualdad estricta
console.log("  ")

//Operador mayor que, >
console.log(6 > 5); //true
console.log(3 > 5); //false
console.log("ACB" > "ABC");//true, en los string, se va comparando letra por letra, en este caso C[1] está ubicado despues de B[1].
console.log("ABC" > "ABC");//false, son iguales
console.log("AB" > "A");//true, porque la primera cadena tiene más letras, es mayor que "A"
console.log("M" > "H");//true, porque M esta después de "H"
console.log("  ")


//Operador mayor o igual qué, >= devuelve un booleano

console.log(5 > 5);//false, en este caso no incluye el valor de la derecha, solo lo toma si es 6
console.log(5 >= 5)//true, en este caso incluye el 5 del lado derecho, la condicion es "es mayor o igual a 5" y se cumple una
console.log("  ")

//Operador menor que, < devuelve un booleano

console.log(5 < 6);//true
console.log(10 < 3);//false
console.log("A" < "B");//true
console.log("ABC" < "ACB");//true, B va antes de C por lo tanto es menor
console.log("  ")

//Operador mayor o igual qué, >= devuelve un booleano

console.log(5 < 5);//false, en este caso no incluye el valor de la derecha, solo lo toma si es 6
console.log(5 <= 5)//true, en este caso incluye el 5 del lado derecho, la condicion es "es menor o igual a 5" y se cumple una
console.log("  ");

//Operador logico and, &&. La expresion solo es verdadera cuando ambos operandos son verdaderos.

console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//false
console.log((2 == 2) && (3 == 3));//true, ambas igualdades devuelven un true
console.log((2 == 6) && (3 == 3));//false, la primera igualdad devuelve un false, false && true = false
console.log("  ");

//Operador Logico OR, ||. La expresion es verdadera si alguno de los dos operando o ambos son verdaderos.

console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false
console.log((2 == 2) || (3 == 3));//true, ambas igualdades devuelven un true
console.log((2 == 6) || (3 == 3));//true, la segunda comparacion es true, false || true = true
console.log("  ");


//Operador Logico NOT, !, va antes y junto a la expresion que se quiere negar. convierte un true a un false y viceversa

console.log(!true);//false
console.log(!false);//true

let a = 8;
console.log(!(a > 5));//false, se comienza por el parentesis, luego pasa a evaluar el !not. Primero es true y luego pasa a ser false
console.log(!(a > 9));//true, se comienza por el parentesis, luego pasa a evaluar el !not. Primero es false y luego pasa a ser true
console.log("  ");

// SENTENCIAS CONDICIONALES

//If

let x = 5;
if(x > 2 || x > 10){//condicion true
    console.log("la condicion es verdadera")//se ejecuta codigo
}
console.log("  ");

//Clausula else, siempre estará después de una clausula if
x = 1;
if(x > 2 || x > 10){//condicion falsa
    console.log("la condicion es verdadera")
} else {
    console.log("la condicion es falsa");//se ejecuta codigo
}
console.log("  ");


//Clausula else if, sino

function clasificacionValor(valor){
    if(valor % 2 == 0){
        console.log("Divisible entre 2.");
    } else if(valor % 3 == 0){
        console.log("divisible entre 3.");
    } else{
        console.log("No es divisible entre las opciones.");
    }
}

clasificacionValor(3);
clasificacionValor(2);
clasificacionValor(11);
console.log("  ");


//Condicionales orden logico

function clasificarValor(valor){
    if(valor < 5){
        console.log("Menor que 5");
    } else if(valor < 10){
        console.log("menor que 10.")
    } else{
        console.log("Mayor o igual a 10.")
    }
}

clasificarValor(2);//las dos primeras condiciones son true, pero por orden solo muestra el codigo de la primera condicion
clasificarValor(5);
console.log("  ");

//Encadenar Sentencias "if..else"

function interpretarIMC(imc){
    if(imc < 18.5){
        console.log("Bajo peso")
    } else if (imc <= 24.9){
        console.log("Normal")
    } else if (imc <= 29.9){
        console.log("Sobrepeso")
    } else {//si no se cumplen ninguna de las condiciones anteriores
        console.log("Obeso")
    }

}

interpretarIMC(15);
interpretarIMC(24.9);
interpretarIMC(29.9);
interpretarIMC(30);
console.log("  ");

//Ejercicio Golf

function puntajeDeGolf(par, golpes){
    if(golpes == 1){
        return "Hole-in-one!";
    } else if(golpes <= par - 2){
        return "Eagle";
    } else if(golpes == par - 1){
        return "Birdie";
    } else if(golpes == par){
        return "Par";
    } else if(golpes == par + 1 ){
        return "Bogey";
    } else if(golpes == par + 2){
        return "Double Bogey";
    } else if(golpes >= par + 3){
        return "Go Home!";
    }
}

console.log(puntajeDeGolf(10,2));
console.log("  ");

//Sentencias SWITCH, de acuerdo al valor de la condicion se ejecutara el codigo dentro del switch, se utiliza para casos especificos

function clasValor(valor){
    let respuesta;
    switch(valor){
        case 1:
            respuesta = "Alpha";
            break;//hasta aquí llega el codigo, se ignora lo demas
        case 2:
            respuesta = "beta"; 
            break;//se sale
        case 3:
            respuesta = "gamma";
            break;//se sale
        case 4:
            respuesta = "delta";
            break;//sale
    }
    return respuesta;// esta variable local tendra el valor que le designe la sentencia switch: alpha || beta || gamma || delta
}

console.log(clasValor(2));//beta
console.log("  ");

//Sentencia SWITCH, default

function seleccionarIdioma( valor ){
    let idioma;
    switch(valor){
        case 1:
            idioma = "español";
            break;
        case 2:
            idioma = "frances";
            break;
        case 3:
            idioma = "italiano";
            break;
        default:
            idioma = "ingles";
            break;
    }
    return idioma;
}
console.log(seleccionarIdioma(10));
console.log("  ");

//Sentencia SWITCH multiples casos

function clasificarVolumen(valor){
    let volumen;
    switch (valor){
        case 1:
            volumen = "bajo";
            break;
        case 2://se puede anidar dos case para un mismo resultada
        case 3://se puede anidar dos case para el mismo resultado
            volumen = "intermedio";
            break;
        case 4://hasta 3 
        case 5:
        case 6:
            volumen = "alto";//case 4,5,6
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(2));//"intermedio"
console.log("  ");

//Retornar valores Booleanos, acortando codigo 

function esMenorQue( a, b ){
    return a < b;
}
console.log(esMenorQue(5, 5));//devuelve true o false, sin necesidad de usar if else.
console.log("  ");

// Patron de retorno anticipado, es util cuando se desea detener la funcion por una condicion especifica

function miFuncion4(){
    console.log("Hola");
    return "Mundo";
    console.log("Adios");//esta linea no se ejecuta
}
console.log(miFuncion4())

function calcularRaiz(num){
    if(num < 0){//Esta condicion se utiliza para validar la entrada antes de ejecutar el código, a utilizar
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(calcularRaiz(25));

// Ejercicio Black Jack

let conteo = 0;

function contarCartas(carta){
    let decision;
    switch(carta){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break;
    }
    if(conteo > 0){
        decision = "Apostar";
    } else{
        decision = "Esperar";
    }
    return conteo + " " + decision;   
}

console.log(contarCartas(2));