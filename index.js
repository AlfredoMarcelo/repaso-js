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
console.log("  ");

// Crear OBJETOS, permiten un conjunto de propiedades que estan relacionado con sus correspondientes valores

let miPerro = {//nombre de la variable que contiene el objeto
    "nombre": "Renata",//atributos, se deben separar por una coma
    "edad": 1,
    "peso": 30,
    "raza": "Beagle",
    5: "cinco"//también puede tener una propiedad int, pero esta será convertidad en cadena de texto "5" por javascript
};
console.log(" ")


//Acceder a propiedades por notacion de puntos

 miPerro = {//nombre de la variable que contiene el objeto
    "nombre": "Renata",//atributos, se deben separar por una coma
    "edad": 1,
    "peso": 30,
    "raza": "Beagle",
    5: "cinco"//también puede tener una propiedad int, pero esta será convertidad en cadena de texto "5" por javascript
};

console.log(miPerro.nombre);//Renata, No se puede utilizar variables para guardar y luego acceder con esta notacion a una propieda
console.log("  ");

//Acceder a propiedades: Notacion de Corchetes

let miCuaderno = {
    "color"             : "verde",
    "categoria"         : 3,
    "numero de paginas" : 200 //este atributo no se podría usar con la notacion de puntos, debe ser camelCase numeroDeOPaginas.
};

console.log(miCuaderno["numero de paginas"]);// 200, usar corchetes y agregar el atributo, no muy usado la notacion corchetes para obj
console.log("  ")


//Acceder a propiedades: con Variables

let resultados = {
    1 : "nora256",
    2 : "gino44",
    3 : "estef55",
    4 : "kiara44"
};

let posicion = 4;// se guarda el atributo en la variable posicion
console.log(resultados[posicion]);// kiara44, ayuda a ser más dinamico el programa, solo funciona con la notacion corchetes.
console.log("  ");


//Actualizar propiedad de un objeto

let mochila = {
    "color"     : "azul",
    "tamaño"    : "mediano",
    "contenido" : ["botella de agua", "cuaderno"] 
};
 console.log(mochila.color);//azul
 mochila.color = "rojo";
 console.log(mochila.color);//rojo
 console.log(mochila.contenido);
 mochila.contenido.push("lapiz");//se agrega al arreglo
 console.log(mochila.contenido);
 mochila.contenido = ["pelota", "guantes"];//cambia el array completo
 console.log(mochila.contenido);
 console.log("  ");


 //Agregar propiedades a un objeto

 let curso = {
    "titulo"    : "Javascript",
    "idioma"    : "español",
    "duracion"  : 30
 }

 curso.vistas = 34500;
 curso["inscritos"] = 50
 console.log(curso.vistas);
 console.log(curso.inscritos);
 console.log(curso);
console.log("   ")

//Eliminar propiedad, se utiliza el metodo delete

let cursoDos = {
    "titulo"    : "Javascript",
    "idioma"    : "español",
    "duracion"  : 30,
    "inscritos" : 100
 }

delete curso.duracion;// se utiliza el metodo delete
console.log(cursoDos);
console.log("  ")

//Objetos para busqueda, se puede cambiar un switch por un objeto para hace un codigo más conciso

function buscarElementoQuimico(simbolo){//se agregra parametro simbolo
    let simbolosQuimicos = {
        "Al"    : "Aluminio",
        "S"     : "Azufre",
        "Cl"    : "Cloro",
        "He"    : "Helio",
        "B"     : "Boro",
        "Li"    : "Litio"
    }
    return simbolosQuimicos[simbolo];//retorna el valor de la propiedad que venga como argumento de simpbolo param.
}
console.log(buscarElementoQuimico("S"));// Azufre, de esta manera se accede al valor del objeto.
console.log(" ");
//quede en el minuto 5:24:00

//Verificar propiedades de un objeto, esto con el metodo hasOwnProperty();

let libro = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};
console.log(libro.hasOwnProperty("color"));//true, 
console.log(libro.hasOwnProperty("origen"));//false

function verificarPropiedad(obj, propiedad){
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene la propiedad";
    }
}
console.log(verificarPropiedad(libro,"categoria"));// 3, la funcion reciebe como arg un obj y una cadena y devuelve el valor de la prop
console.log("  ")


//Objetos Complejos, los más usados en el desarrollo web, parecido a un Json 

let ordenesDePizzas = [
    {
      "tipo": "margarita",
      "tamaño": "individual",
      "precio": 5.67,
      "toppings": [
          "extra queso",
          "champiñones",
          "piña"
      ],
      "paraLlevar": true
    },
    {
      "tipo": "cuatro quesos",
      "tamaño": "familiar",
      "precio": 18.34,
      "toppings": [
          "extra queso",
          "pimentón"
      ],
      "paraLlevar": false
    },
    {
     "tipo": "Hawaiana",
      "tamaño": "familiar",
      "precio": 18.34,
      "toppings": [
          "extra queso",
          "pimentón"
      ],
      "paraLlevar": false
    }
  ];


//como es un array de obj, es necesario si o si usar corchetes al comienzo
console.log(ordenesDePizzas[1].toppings);//De esta manera se accede a un array de objetos *****, con notacionde corchete y punto
console.log(ordenesDePizzas[1]["precio"]);//De esta manera se accede a un array de objetos *****, con notacionde corchete
console.log("  ");


//Objetos anidados, objetos dentro de otros objetos, para recorrer el objeto se puede usar la notacion de puntos

let miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
      "masa": {
        "harina": "100 grs",
        "sal": "1 cucharadita",
        "agua": "1 taza"
      },
      "cobertura": {
        "azucar": "120 grs",
        "chocolate": "4 cucharadas",
        "mantequilla": "200 grs"
      }
    }
  };

  console.log(miReceta.ingredientes.masa.sal);//ingresando con notacion de puntos
  console.log(miReceta["ingredientes"]["masa"]["sal"]);//ingresando con notacions de corchetes
  console.log(miReceta["ingredientes"].cobertura["mantequilla"]);//también se puede hacer una combinacion de ambas
  console.log("  ");

  // Arreglos anidados

  var misPlantas = [
    {
      tipo: "flores",
      lista: [
        "rosas",
        "tulipanes",
        "dientes de león"
      ]
    },
    {
      tipo: "árboles",
      lista: [
        "abeto",
        "pino",
        "abedul"
      ]
    }
  ];

  let miFlor = misPlantas[0].lista[0];
  let segundoArbol = misPlantas[1].lista[1];
  console.log(miFlor);
  console.log(segundoArbol);

  //Coleccion de Discos min 5:58:00

  let coleccionDeDiscos = {
    7853: {
      tituloDelAlbum: "Bee Gees Greatest",
      artista: "Bee Gees",
      canciones: ["Stayin' Alive"]
    },
    5439: {
      tituloDelAlbum: "ABBA Gold"
    }
  };

  function ActualizarDisco(discos, id, propiedad, valor){
    if(valor === ""){
        delete discos[id][propiedad];
    } else if(propiedad === "canciones"){
        discos[id][propiedad] = discos[id][propiedad] || [];//el operador or || hace que se elija una de las dos opciones en caso de que uno sea undefined, seleccionara la otra opcion
        discos[id][propiedad].push(valor);//agrega el valor a la propiedad
    } else{
        discos[id][propiedad] = valor;
    }
  }

  console.log(coleccionDeDiscos[5439].artista);
  ActualizarDisco(coleccionDeDiscos, 5439, "artista", "Abba")
  console.log(coleccionDeDiscos[5439].artista);
  console.log("  ");

  // Ciclos o Bucle o Loop

  //    While (Mientras, sea verdadera), se utiliza cuando no se tiene un numero especifico de iteracion (es una repeticion de bloque de codigo)

  let i = 0;

  while(i <= 3){//pinta 4 veces porque empieza de 0,1,2,3 recien termina
    console.log("Hola mundo")
    i++//aumenta en 1 el i
  }

  let miArreglo4 = [];
  i = 0;//para que vaya contando el while, se debe inicializar el valor en 0

  while(i < 10){//los operados indicaran cuantas veces se va a iterar el codigo
    miArreglo4.push(i+1);//si se agrega al i un 1, este comenzara de 1 y terminara en 10, si no se agrega sera de 0-9
    i++;//se aumenta en 1 el valor de i
  }

  console.log(miArreglo4);

  let numeros = [2,3,4,5,6,8,9,34];

  while(numeros.length > 4){//mientras el tamaño de numeros sea menor a 4, entonces
    numeros.pop();//eliminara los ultimos valores mientras se cumpla la condicion
  }

  console.log(numeros);//[2,3,4,5], deja solo 4 valores o en 4 el tamaño del array
  console.log(" ");


// Ciclo FOR, se usa cuando sabemos cuantas iteraciones son necesarias, este actualzia la bandera, la ventaja es que se pueden declarar las 

let miArreglo5 = [];

for(let i = 0; i < 10; i++){//dentro de la condicion se debe declarar una variable contable (i), en un ciclo solo puede ser "var" o "let"
// inicio var|condicion|actualizacion var
    miArreglo5.push(i);
}

console.log(miArreglo5);//[0-9]

miArreglo5 = [];
for(let i = 0; i < 10; i = i +2){//con el aumento de +2 a i se logra agregar +2 en cada iteracion 2,4,6. tambien puede ser i += 2
    // inicio var|condicion|actualizacion var
    miArreglo5.push(i);
}

console.log(miArreglo5);//[2-4-6-8]
console.log(" ");

//Ciclos For, numeros impares

let miArreglo6 = [];

for(let i = 1; i < 20; i +=2 ){//para obtener impares, se debe iniciar i = 1 y actualizar con i += 2
    miArreglo6.push(i);
}

console.log(miArreglo6);//1,3,5,7,9,11..
console.log("  ");


// Ciclo For, Contar hacia atras *************************

for(let i = 15; i >= 10; i -= 1){//el valor i es mayor que la condicion, al actualizar i va ir disminuyendo en 1 15-14-13-12
    console.log(i);           // tambien se puede usar i -= 1, o para que sea de 2 en 2, i -= 2,15-13-11
}

let miArreglo7 = [];

for(let i = 10; i > 0; i -= 2){//hasta que llegue a 0 se va a iterar el scope
    miArreglo7.push(i);//va a ir agregando i al array, dismunuyendo en cada iteracion en 2, 10-8-6-4-2
}

console.log(miArreglo7);//[10,8,6,4,2]
console.log(" ");

//Iterar sobre un arreglo con el ciclo For, tambien pueden ser arr anidados, objetos, etc.Se recomienda clg para ver como funk el loop

let miArreglo8 = [4, 6, 8, 2];

let total = 0;

for(let i = 0; i < miArreglo8.length; i++){// el i++ se aplica despues que se itere el codigo
    console.log("iteracion " + i);//se ve el numero de iteracion
    console.log(miArreglo8[i]);//se ve el elemento que se va a agregar de acuerdo a su indice
    total += miArreglo8[i];//i entra como 0, y valdria 4 en el arreglo, esto va ir sumando cada elemento del arr a la var total
}
console.log(total);//20

let lenguajes = ["Javascript", "Python", "Java", "C++"];
let leng = [];
for(let i = 0; i < lenguajes.length;i++){
    console.log(lenguajes[i].toUpperCase())//con esto solo se cambia cada valor a mayusc, no hace cambios en el arr lenguajes
    leng.push(lenguajes[i].toUpperCase());//con este codigo, agrego el valor mayusc al arr leng
    //console.log(lenguajes);
}

console.log(leng);
console.log(" ");

//Ciclo for dentro de una funcion

function contarNumerosPares(arreglo){
    let total = 0;//va a contar los numero pares que se vayan encontrando
    for(let i = 0; i < arreglo.length; i++){//para recorrer el arreglo completo se usa .lenght y el operador estrico "<"
        if(arreglo[i] % 2 == 0){//si el valor del indice i del arreglo tiene resto 0 de la division por 2, entonces 
            total++;//suma 1 a la variable total
        }
    }
    return "Se encontraron: " + total+ " numeros pares.";
}

console.log(contarNumerosPares([5,3,1,11]))// total = 0;
console.log(contarNumerosPares([5,2,1,2]))// total = 2;
console.log(" ");


//Ciclos For Anidados, for dentro de otro for, sirve para iterar arrays que estan dentro de otro array en este caso se usa 2 for

let miArreglo9 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Mi forma :)
for(let i = 0; i < miArreglo9.length; i++){
    for(let a = 0; a < miArreglo9[i].length; a ++){
       // console.log(miArreglo9[i][a]);// pinta arreglo por arreglo, no recorre el interior de los arreglos elementos
    }
}

//como lo explican

for(let i = 0; i < miArreglo9.length; i ++){
    console.log("> Nueva iteracion")
    let arregloAnidado = miArreglo9[i];//arreglo
    console.log("Arreglo: " + arregloAnidado);
    for(let a = 0; a < arregloAnidado.length; a++ ){
        console.log(">>> Ciclo anidado");
        console.log("Elemento: " + arregloAnidado[a]);
        console.log(arregloAnidado[a]);//valor del elemento arr que esta dentro del arr mi arreglo9
    }
}

console.log(" ");

//Ciclo Do While, "hacer" tal cosa "mientras", recordar que al ciclo while se le deba añadir el i++ al final del scope
            /* Es recomendable usar cuando un usuario ingresa un valor y se necesite validar ese valor, cuando el valor sea true
            para la condicion, recien podrá continuar el programa si no, se le volvera a pedir el valor al user.
            */

let xs;
xs = 16;

do {                //ejecuta el codigo al menos 1 vez si o si
    console.log(xs)
    xs++;           //aumenta sx en 1, 5+1, 6+1, 7+1
}while(xs < 10);    // mientras xs sea menor a 10

console.log(xs); //17, porque se alcanzo a ejecutar el codigo do

while(xs < 10){ //a diferencia, de do while, aqui la condicion es false por lo tanto nunca entra al scope de while
    console.log(xs);
    xs++
}

console.log(" ");


// Ejercicio Busqueda de perfil, excelente explicacion

var contactos = [
    {
      "nombre": "Nora",
      "apellido": "Nav",
      "numero": "0543236543",
      "gustos": ["Pizza", "Programación"]
    },
    {
      "nombre": "Harry",
      "apellido": "Potter",
      "numero": "0994372684",
      "gustos": ["Hogwarts", "Magia"]
    },
    {
      "nombre": "Sherlock",
      "apellido": "Holmes",
      "numero": "0487345643",
      "gustos": ["Casos interesantes", "Violín"]
    }
  ];


  function buscarPerfil(nombre, propiedad){     //2 parametros, que recibe el nombre del contacto y la propiedad a buscar
    for(let i = 0; i < contactos.length; i ++){//recorre el array
        if(contactos[i].nombre === nombre){     //condicional que compara la propiedad nombre con el argumento nombre enviado a la fun
            return contactos[i][propiedad] || "la propiedad no existe.";//se usa OR ||, si es undefined o no se encuentra el nombre,
                                                                            //devolvera la cadena de texto.
        }
    }
    return "El contacto no esta en la lista de contacto";//si no encuentra el nombre se saltara el if y retornara esta cadena
  }

  console.log(buscarPerfil("Alfredo", "gustos"));//no se encuentra el contacto, como no entra al if 953, pasa al return de la fun
console.log(buscarPerfil("Sherlock","numero"));//0487345643, existe el contacto y la propiedad
console.log(buscarPerfil("Sherlock","seguidores"));//la propiedad no existe, existe el contacto, pero no la propiedad
console.log(" ");


// Numeros aleatorios, con Math.random()

function generarNumeroAleatorio(){
    //return Math.floor(Math.random() * 10 + 1); //entre 0 y 0.99, no genera el entero 1
    return Math.random();// generea numeros decimales entre 0 y 0.99
}
console.log(generarNumeroAleatorio());
console.log(" ");


//Numeros aleatorios Enteros, con Math.random()

let numeroAleatorioEntre0y19 = Math.floor(Math.random()*20);// con M.floor(), se recupera el entero anterior sin decimales, 
                                                            //primero se resuelve M.random x 20 ej:0.99 * 20 == 19.8
                                                            //con Math.floor(19.8) se transforma en 19
console.log(numeroAleatorioEntre0y19);

function generarEnteroAleatorio(limiteSuperior){
    //generara un entero aleatorio entre 0 y el limite
    //superior (sin incluirlo)
    return Math.floor(Math.random() * limiteSuperior);
}
//console.log(generarEnteroAleatorio(5));
for(let i = 0; i < 10; i++){//pintara 10 numeros aleatorios
    console.log(generarEnteroAleatorio(i));// se llama a la funcion
}
console.log("  ")

//Numeros aleatorios Enteros en un rango, con Math.random()

function rangoAleatorio(limiteInferior, limiteSuperior){
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;//esta funcion incluye el inferior y superior
}
console.log(rangoAleatorio(1,6));
console.log("");


//Funcion parseInt(), convierte una cadena de caracteres string en un int

let z = parseInt("5");
let y = parseInt("7");

console.log(z + y);//12, si no se utiliza el parseInt sumaría 57, porque une las cadenas

console.log(parseInt("5"));
console.log(parseInt("-5"));
console.log(parseInt("6.7"));// en este caso, solo pinta el 6, elimina el decimal
console.log(parseInt("Alfredo"));//pinta un valor NaN (Not a Number), no es un numero
console.log(" ");

//Funcion parseInt Con base

console.log(parseInt("110111", 2))//55, numero binario convertido a entero, puede ser declarado sin comas y tiene el mismo result
console.log(parseInt("3E0A",16))//15882, numero exadecimal convertido a entero, debe ser indicado con ""
console.log("");


//Operador Condicional (Ternario) condicion?verdadero:falso ***************

let ab = 5;
let cd = 9;

function retornarMinimo(x, y){
    console.log(x > y ? x : y);
    return x < y ? x : y;
}
console.log(retornarMinimo(2,9))//9
console.log(retornarMinimo(9,2))//2
console.log(ab > cd ? ab + 2: cd *3);//27
console.log(" ");


//Multiples operadores Condicionales

function compararNumeros(a, b){
    if(a == b){
        return "a y b son iguales"
    } else if(a > b){
        return "a es mayor que b"
    }else{
        return "a es menor que b"
    }
}

function compararNumerosConTernario(a, b){
    return a == b ? "a y b son iguales"
        //condicion     true
            : a > b ? "a es mayor que b"
        //condicion     else if
            :"b es mayor que a";
}       //              else

console.log(compararNumerosConTernario(11, 27));
console.log("");


// VAR vs LET

let campista = "james";// let solo puede ser declarado una sola vez con un nombre que no se puede repetir, pero si se puede llamar y actualizar su valor
var campista2 = "david";//var se puede repetir e incluso en la declaracion actualizar su valor
console.log(campista)
console.log("  ");


//Ambito de VAR vs LET

//Var

var miVariableGlobal = 4;

function miFuncion(){
    console.log(miVariableGlobal);//4
    var miVariableLocal = 8;
    console.log(miVariableLocal);//8
}

miFuncion();
console.log(miVariableGlobal);//4
//console.log(miVariableLocal);//is not defined porque es local
console.log(" ");

//Let

for(var f = 0; f < 3; f++){
    console.log(f);
}

console.log("Variable: " + f);//al estar el for como bucle global, la var f pasa a ser global, no local del ciclo, por ello se puede llamar

for(let xsz = 0; xsz < 3; xsz++){
    //console.log(xs);
}

//console.log("Variable: " + xsz);//is not defined, al usar let en un ciclo global, solo podrá ser llamado dentro de la funcion y no
                                //podrá ser llamado de manera global
console.log("")

var mostrarColor = true;

if(mostrarColor){
    var color = "verde";//si es var, se puede llamar como global, si es let no lo permitira y solo se usará en la condicional
    console.log("Mi color favorito es: " + color);
}
console.log(color);//is not defined, no puede acceder a la variable local color, porque es variable let, es lo mismo en la funcion
console.log("");

//Variable Const o constante, solo pueden ser usadas para acceder, no pueden ser modificadas una vez tenga valor

const miConstante = 35;// const inicializado con un valor
console.log(miConstante);
//miConstante = 15;// da un error porque el const no puede cambiar de valor, solo leer*************

//const miConstante2;// da error porque una constante siempre debe ser inicializada con un valor**************
const miConstante2 = 20;
console.log(miConstante2);//20

//Const en funcion

function calcularAreaCirculo(radio){
    const PI = 3.14;        //Const se usara más cuando queramos que un valor no cambie durante todo el programa
    if(radio < 0){          //patron de retorno anticipado, o evaluar un valor antes de ejecutar un codigo
        return undefined
    }
    return PI * (radio ** 2);//dos ** es para elevar con exponente, en este caso **2 es radio al cuadrado 
}
console.log(calcularAreaCirculo(2));

//Mutar Arreglo Declarado con Const , no significa que el valor no pueda cambiar, sino que no se puede asignar un valor nuevo
        // NOTA: Las constantes pueden ser declaradas en mayusculas o minusculaas,**************
        //pero por convencion para distinguirlas del resto de variables se escribe todo en mayusculas**********

const MI_ARREGLO = [1, 2, 3, 4];
//MI_ARREGLO = [5, 6, 7, 8];//esto genera un error, Assignment to constant variable, no se puede iniciar nuevamente el valor d un const
MI_ARREGLO[0] = 35;//********Pero si lo podemos MUTAR, o reasignar los valores individuales  */
console.log(MI_ARREGLO);
console.log("");


//Crear un objeto INMUTABLE con freeze(), previene la modificacion de atributos y valores y que se agreguen más

let colores = {
    "verde": "#3333",
    "azul": "#454455"
}

Object.freeze(colores);
colores.amarillo = "#4554";//como se uso freeze, bloquea todo tipo de edicion y no se agrega el amarillo
delete colores.verde;//freeze tambien bloque el metodo delete
console.log(colores);//{"verde": "#3333","azul": "#454455"}, object is not extensible
console.log("");


//Funciones flecha, son utiles cuando se necesita pasar una funcion como argumento de una funcion

const fecha = function(){//esta es una funcion anonima, porque no se le define el nombre
    return new Date();
}

//Cambio de anonima a flecha

const fechaFlecha = () => new Date();

console.log(fecha());//anonima
console.log(fechaFlecha());//flecha
console.log("");


//Funciones flecha con parametros

const sumarTres = function(x){//funcion anonima con parametro 
    return x + 3;
}
console.log(sumarTres(10));//13

const sumarTresFlecha = (x) => x + 3;//funcion flecha con Un parametro
console.log(sumarTresFlecha(11));//14

const concatenarArreglos = function(arr1, arr2){//Funcion anonima con 2 parametros
    return arr1.concat(arr2);//concatena o une al final el valor ingresado en concat(xxx).
}
console.log(concatenarArreglos([1, 2], [3, 4, 5]));//[1, 2, 3, 4, 5], une los dos arreglos en 1

const concatenarArreglosFlecha = (arr1, arr2) => arr1.concat(arr2);//funcion flecha con 2 parametros
console.log(concatenarArreglosFlecha([6, 7], [8, 9, 10]));//[6, 7, 8, 9, 10], une los dos arreglos en 1
console.log("");

//Funcion flecha con más de una line en scope

const sumarFlecha = (a, b) => {//funcion flecha que contiene un scope, solo cambia el eliminar "function"
    let num = 6;
    return a + b + num;//en el scope se debe declarar el return
};
console.log(sumarFlecha(4,6));
console.log("");

//Valores por defecto para Parametros funcion Flecha, se utiliza cuando queramos que el usuario emita un valor por defecto

const incrementar = (num, valor = 1) => num + valor;//si el user no pasa dos argumentos y pasa el primero,
                                                    //valor valdrá 1, si pasa dos argumentos, entonces tomará
                                                    //el valor enviado por el user
console.log(incrementar(5));//6, num = 5 y se suma el valor por defecto porque solo recibio un argumento
console.log(incrementar(5,6));//11, como se envian 2 argumentos, el valor por defecto no se toma en cuenta
console.log("");



//Operador Rest, permite pasar x numeros de argumentos a una funcion y que se agrupen como un arreglo

function miFuncionRest(...args){//el parametro puede tener x nombre, lo importante es que antes lleve 3 puntos ...
    console.log(args);
}
miFuncionRest(1);//[1], devuelve un arreglo con el valor de los argumentos

const sumarRest = (...args) => {
    return args.reduce((a, b) => a + b, 0);//.reduce(), con este metodo suma los elemntos del arr y los retorna
    //      REDUCE()     a es valor previo, b valor actual y 0 el valor por defecto que igual se sumara
}

console.log(sumarRest(1,2,3,4,5));//15, sumo todos los argumentos que se envio a la funcion.
console.log("");

//Operador Spread, hace lo contrario que el operador rest, toma un arreglo y los descompone 

const numeroSpread = [1, 2, 3];

function sumarSpread(x, y, z){
    return x + y + z;
}
console.log(sumarSpread(numeroSpread[0], numeroSpread[1], numeroSpread[2]));//6, sin spread
console.log(sumarSpread(...numeroSpread));//6,con .spread(...xxxx), descompone el arreglo y los envia individual
console.log("");
//La diferencia es que el Rest(...args) va en el parametro de la funcion, en cambio Spread va cuando se llama a  la funcion 

//              DESTRUCTURING OBJETOS

//Sintaxis de destructuracion, esto nos permite asginar propiedades y valores de un objeto a variables

const usuarioDestructuring = {
    nombreUser: "Gino Smith",
    edad: 34
};
//const nombreD = usuarioDestructuring.nombre;//a al antigua
//const edadD = usuarioDestructuring.edad;//a la antigua
//console.log(nombreD);
//console.log(edadD);

const {nombreUser, edad} = usuarioDestructuring;//da error si hay una variable global con el nombre de un atributo
//  atributos||propiedades = objeto

let coordenadas = {
    xd: 4,
    yd: 6,
    zd: 12
};

const {xd,yd,zd} = coordenadas;
console.log(yd + zd);//18, con el destructuring se puede declarar las propiedades que fueron guardadas como variables
console.log("");


//Destructuracion de objetos anidados, sirve para json************************************

const usuarioDestructurin2 = {
    johnDoe: { 
      edadD: 27,
      correo: "johnDoe@freecodecamp.com"
    }
  };

const {johnDoe: {edadD, correo}} = usuarioDestructurin2;//sirve para guardar propiedades de un objeto dentro de otro
//  propiedad:  objeto hijo      = objeto padre
console.log(edadD);//27
const {johnDoe: {edadD:edadUser, correo: correoUser}} = usuarioDestructurin2;//se renombra las propiedades
//  propiedad:objHijo{prop:nuevoNombre}
console.log(edadUser);//27,ahora se debe declarar el nuevo nombre
console.log("");

//TERCER EJEMPLO
const PRONOSTICO_LOCAL = {
    "ayer": { 
      minima: 61, 
      maxima: 75 
    },
    "hoy": { 
      minima: 64, 
      maxima: 77 
    },
    "mañana": {
      minima: 68,
      maxima: 80 
    }
  };

const {hoy: {minima:minimaHoy}} = PRONOSTICO_LOCAL;//una vez cambiada el valor de la key, no se podrá declarar nuevamente
const {ayer: {minima:minimaAyer, maxima: maximaAyer}} = PRONOSTICO_LOCAL;
console.log(minimaHoy);//solo se podrá usar en nombre nuevo(minimaHoy);
console.log(minimaAyer);//61 se puede cambiar el nombre de cualquier propiedad o atributo
console.log("");

//                          DESTRUCTURING DE ARREGLOS

//Destructuring de arreglos

let aA;
let bB;
let cC;
[aA, bB, cC] = [1, 2, 3];//de esta manera se le asigna el valor de un arreglo a una variable ya declarada
[aA, bB, cC] = [1, 2, 3, 4, 5]//si hay más valores, solo se considerarán los 3 primeros

let aAa;
let bBb;
let cCc;
[aAa, bBb,,, cCc] = [1, 2, 3, 4, 5]//se puede agregar comas para hacer saltos y tomar otro valor para la variable

console.log(cCc);//5, se salta 2 posiciones y en vez de ser 3 será 5

let aAaA = 8;
let bBbB = 6;

[bBbB, aAaA] = [aAaA, bBbB];//se intercambian el valor con las variables. 
console.log("aAaA: " + aAaA);//6
console.log("bBbB: " + bBbB);//8
console.log("");

// Sintaxis de Desestructuracion (unir) con el Operador rest

let aA1;
let bB1;
let arr1;

[aA1, bB1, ...arr1] = [1, 2, 3, 4, 5, 6, 7];// el operador rest toma todos los valores sobrantes y los asigna a arr1
console.log(aA1);//1
console.log(bB1);//2
console.log(arr1);//[3, 4, 5, 6, 7], se agrupan todos los demas valores en un array, recordar que rest retorna un arreglo


const arregloInicial1 = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosElementos(arreglo){//recibe un arreglo como parametro
    const [ , , , ...nuevoArreglo12] = arreglo;//con las ,,, se salta los 3 primeros elementos
    return nuevoArreglo12;                       //retorna el nuevo arreglo
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial1);
console.log(arregloFinal);//[3, 4, 5, 6, 7], array sin los 3 primeros elementos del array original
console.log("");


//Sintaxis de DESestructuracion: Pasar Objeto como Argumento

var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Española",
    ubicacion: "España"
  };
//1er manera
const actualizarPerfil = (informacionPerfil) => {//se recibe objeto 
    const {nombre:nombrePerfil2//se renombra la propiedad en la nueva variable
            , edad: edadPerfil2
            , nacionalidad: nacionalidadPerfil2
            , ubicacion: ubicacionPerfil2 
        } = informacionPerfil;//objeto que entra como parametro
    console.log(nombrePerfil2, edadPerfil2, nacionalidadPerfil2, ubicacionPerfil2);//pinta los valores
}

actualizarPerfil(nuevoPerfilCliente);

//2da manera
const actualizarPerfilEnVariables = ({nombre, edad, nacionalidad}) => {//se pasa las propiedades
                                    //dentro de {} y luego se podran usar individualmente
                                    //la funcion se debe declarar con un argumento valor objetos
                                    //tambien se pueden tener de parametros las propiedades que se necesiten y no todas
    console.log(nombre, edad, nacionalidad);
};

actualizarPerfilEnVariables(nuevoPerfilCliente);//Jane Doe 24 Española

const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
  };

const mitad = (e) => (e.max + e.min) / 2.0;//manera normal de extraer valores de propiedades de objetos
const mitadDestructurin = ({max, min}) => (max + min) / 2.0;//destructurando el objeto segun sus propiedades, solo se estan tomando en cuenta dos propiedades
console.log(mitadDestructurin(estadisticas))//28.015
console.log("");


//                           Plantillas Literales o Plantillas de cadenas o interpolacion

        //se usa el acento invertido (backtick) ` `en lugar de comillas
        //pueden contener comillas simples o dobles
        //las lineas se preservan como se esciben en el codigo
        //Para reemplazar una variable se escribe ${variable}
        //dentro de ${} tambien puedes escribir expresiones,(funciones, condiciones) como multiplicar, restar sumar etc.

let texto = 5;
console.log(`EL valor de texto es ${texto}`);

let nombreEj = "Nora";
let edadEj = 6;

console.log(`Mi nombre es ${nombreEj} y tengo ${2*3} años.`);//se pueden hacer expresiones dentro de ${}
console.log(`Mi nombre es ${nombreEj} y tengo ${edadEj} años.`);//se invocan variables

let arrEj = [1, 2, 3, 4];
console.log(`El arreglo es ${arrEj}`);//el arreglo es 1,2,3,4. Pinta solo los valores y las comas
console.log(`El arreglo es ${JSON.stringify(arrEj)}`)//el arreglo es [1,2,3,4].stringify convierte el array en un texto plano
//tener en cuenta JSON y sus demas metodos como stringify y demas.

let personEj = {//objeto, con dos propiedades  
    nombre: "Gino Cass",
    edad: 10
};

const SALUDO = `¡Hola! Mi nombre es ${personEj.nombre} y tengo ${personEj.edad} años.`;//se llama a las propiedades del obj
console.log(SALUDO);//Hola mi nombre es gino cass y tengo 10 años. Lo usaria para saludar cuando se obtenga un jSon


//Funcion para crear un objeto desde una funcion, crear objetos de forma concisa

//manera normal
const crearUser = (nombre, edad, idioma) => {
    return {
        nombre: nombre,//tener en cuenta que js, siempre cambia los atributos a texto
        edad: edad,// al tener el mismo nombre,los parametros pasan a estar al lado del valor de la propiedad
        idioma: idioma
    };
};

console.log(crearUser("Alfredo", 21, "Español"));//{nombre: 'Alfredo', edad: 21, idioma: 'Español'}, se crea un obj


//Manera pro concisa

const crearUserConciso =(nombre, edad,idioma) => ({nombre, edad, idioma});//al agregar las llaves, js entiende que queremos retornar un objeto
                                        //estos serán los nombres de las propiedades, y los argumentos seran sus valores
console.log(crearUserConciso("Coni", 25, "Bombastic"));//{ nombre: 'Coni', edad: 25, idioma: 'Bombastic' }                                       
console.log("");

// METODOS JS, funciones dentro de los objetos

//este metodo es de esmac5
const person = {
    nombre: "Isabel",
    presentarse: function(){// la funcino pasa a ser metodo cuando se declara dentro de un objeto
        return `Hola, mi nombre es ${this.nombre}`;//this(este objeto), se refiere al objeto con el q estamos trabajando
    }
}
//Una funcion dentro de un Objeto, pasa a llamarse METODO. Y para hacer referencia a una propiedad del mismo 
    // objeto dentro de la funcion o metodo, se debe usar el metodo THIS.propiedad
console.log(person.presentarse());//como presentarse es una propiedad funcion (metodo), se debe usar ().

//Misma funcion pero con esmac6, se debe usar esta forma  *************************************

const personEs6 = {
    nombre: "Isabel",
    presentarse(){// para declarar el metodo solo basta con quitar los dos puntos y agregar ()
        return `Hola, mi nombre es ${this.nombre}`;//this(este objeto), se refiere al objeto con el q estamos trabajando
    }
}

console.log(personEs6.presentarse());//

//  Definir una clase o declarar, una clase es un plano o modelo que permite reusarlo n veces
    //estas clases no son tan funcinales como las que se crean en Java o Python, es una manera más
    //concisa de crear un objeto, pero no tiene la misma funcionalidad que Java o Pyton

class TransbordadorEspacial {//El nombre de la clase debe empezar con UpperCamelCase *****************
    constructor(planeta){//constructor que se llamará automaticamente cuando se creé una clase
        this.planeta = planeta;
    }
}
var zeus =  new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);

class Mascota {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

var chocolo = new Mascota("chocolo","10");// de esta manera se utiliza la clase, se envian los datos como argumentos
var renata = new Mascota("Renata","8");
console.log(chocolo);
console.log(chocolo.nombre);
console.log(chocolo.edad);
console.log(renata);
console.log(renata.nombre);
console.log(renata.edad);

//      Getters y Setters, los objetos pueden tener funciones y las clases tambien

class Libro {
    constructor(autor) {
      this._autor = autor;//con el _ se entiende que la clase es privada
    }
  
    // Getter
    get autor() {//con el get obtenemos el valor de las propiedades
        console.log("getter")
      return this._autor;
    }
  
    // Setter
    set autor(nuevoAutor) {//con el set podemos actualizar el valor
        console.log("setter")
      this._autor = nuevoAutor;
    }
  }
  
  const libroS = new Libro("anónimo");
  console.log(libroS.autor);//anonimo
  
  libroS.autor = "Gino Smith";
  console.log(libroS.autor);//cambia mediante el se de anonimo a Gino Smith


  //Terminado
