//******¿que es esmaccript6 (es6)

//conjunto de reglas que se utilizan para dar mayor compatibilidad al navegador

/*****************--------------------------------------------------------------------------------------------------*/

//*******¿ que es un scope?

function suma(val1 , val2){
    const val3 = 1;
    //val3 esta definido dentro del scope interno y solo puede utilizarse aqui y no llamar a fuera ######
    return val1 + val2 + val3;
    //es el lugar donde definimos nuestro metodos y variables ####
}
console.log(suma(1, 2));
//console.log(val3);//val 13 is not defined ######

/*-----------------------------------------------------------------------------------------------------------------*/
console.log("\nPregunta 3")

const a = 1;          //se declara una variable const y se le asigna el valor 1

function suma2(){
  const b = 2;        //b solo se inicia dentro del scope local pero no se utiliza, por eso no hace nada
  return suma3();     // retorna el llamado de la función suma3(), ahora se ejecutara esa funcion
}

const b = 3;          //se declara una variable const y se le asigna el valor 3
const c = 1;          //se declara una variable const y se le asigna el valor 1

function suma3(){     //es llamada desde la funcion suma2()
  const c = 3;        //se declara una variable local const y se le asigna el valor 3
  return a + b + c;   //retorno de la suma de las variables globales a + b y se suma la variable local c 
}
console.log(suma2()); // resultado = 7

/*-----------------------------------------------------------------------------------------------------------------*/

console.log("\nPregunta 4")

// ¿Que es una clausura?

//Una funcion podra acceder a todos los elementos que se hagan dentro de la misma pero tambien a todas
  //las cosas que esten definidas en el mismo lugar en el que este definido el metodo

const conejo = {
  nombre: "bad",                                  //atributo y valor
  tareas: ['hablar', 'saltar', 'comer'],          //arreglo dentro un obj
  mostrarTareas() {                     //un obj puede tener funciones, pero se declara "nameKey: function(){-----}"
    this.tareas.forEach(function (tarea){         //con forEach loop se recorre this.tareas(hace referencia a las tareas del) 
      let name = conejo.nombre;          //esta es la manera correcta, guardar el nombre en una variable local
      console.log(this.name + " quiere: " + tarea)//this.name es incorrecto, dara un undefined porque esta dentro de una
                                                    //funcion que no esta a la par del this.nombre, this.tarea es correcto
    })
  }
}

conejo.mostrarTareas();


/*-----------------------------------------------------------------------------------------------------------------*/

console.log("\nPregunta 5")

// ¿Que es el prototype?

  //Es la base y objeto que se encuentra en todos los objetos de javascript, como String y que con el se
    //puede modificar lo que hacen sus metodos


/*-----------------------------------------------------------------------------------------------------------------*/

console.log("\nPregunta 6")

// ¿Cual es la diferencia entre === y ==?
  
  // === es más estricto, compara el valor y tipo de dato en cambio == solo compara el valor

const aE = 1;
const bE = "1";
console.log(aE == bE)   // true 
console.log(aE === bE)  // false

/*-----------------------------------------------------------------------------------------------------------------*/

console.log("\nPregunta 7")

//*****¿ Diferencia entre var, let y const?

  //var ya esta deprecada desde  es6, es una variablre global
  //let, esta asociado a un scope, solo tendrá vida dentro de un scope o de manera global y no se podra repetir el nombre
    //
  //const

/* for(var i = 1; i <= 9; i++) { //si se realiza con let el resultado cambia
  setTimeout(() => {
      console.log(i)            //por el tiempo de 10, es que no toma en cuenta la var i una por una, cuando se cumple el tiempo la var i ya vale 10
  }, 10);                     //tiempo para el temporarizador, una vez corrido, ejecutara lo que esta dentro del scope
} */

const persona = {         //persona es la llave a un espacio de memoria
  name: "Alan",           
  lastName: "Supanta"
}

persona.name = "marcelo";
console.log(persona + "\n");

for(let i = 1; i <= 100;i++){ //forma larga
  let resultado = '';         //se declara una variable tipo cadena vacia, esta guardar las cadenas
  if(i % 3 == 0){             //si el resto es 0 (multiplo de 3), resultado será fizz
    resultado += "fizz";      // se usa el += para sumar la cadena a la variable resultado
  }
  if(i % 5 == 0){             //si el resto es 0 (multiplo de 5), resultado será fizz
    resultado += "buzz";      // se usa el += para sumar la cadena a la variable resultado, si contiene 
                                //fizz se le sumara Buzz y ser fizzBuzz(multiplo de 3 y 5)
  } 
  console.log(resultado || i);//se usa || (o) para indicar si '' es false , pinte el numero i, si
                                //hay una cadena fizz o buzz, pintara esa cadena.
}
console.log("\n")
for(let i = 1; i <= 100; i++)console.log(`${i % 3 ? '':'Fizz'}${i % 5 ? '':'Buzz'}` || i); //forma corta
//se declara el for con su iniciador en 1, en condicion si el iniciador es menor o igual a 100(se considera 100)
  //por ultimo se suma 1 a i, en cada recorrido será i = i + 1
  // en la ejecucion del scope, se pinta una plantilla literal, usando ${} se crean operadores ternarios
    //dentro de los op. ternarios se agrega la condicion si "i % 3"? true '': false 'Fizz'
    //dentro de los op. ternarios se agrega la condicion si "i % 5"? true '': false 'Buzz'
    //al final el resultado va en una sola cadena, si es multiplo de 3 pintara fizz''
    //al final el resultado va en una sola cadena, si es multiplo de 5 pintara Buzz''
    //al final el resultado va en una sola cadena, si es multiplo de 3 y 5 pintara fizzBuzz
  // recordar que 0 es igual a FALSE, por eso el condicional si el resto es un int de 1 o mas pinta ''
    //y si es 0 pinta la cadena fizz o buzz




