/* class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    escribirDocumento(animal) {
        document.write(this.informacion + '<br>');
    }
}

let perro = new animal("Perro", 2, "rojo");
let gato = new animal("Gato", 1, "Negro");
let loro = new animal("Loro", 2, "Verde");
let puerco = new animal("Puerco", 5, "Rosa");

perro.escribirDocumento();
gato.escribirDocumento();
loro.escribirDocumento();
puerco.escribirDocumento();

let numeroAnimales = parseInt(prompt("Escribe el nùmero de animlaes que quieres escribir."));

while(numeroAnimales > 0) {
    let animalEspecie = prompt("Escribe la especie del animal.");
    let animalEdad = parseInt(prompt("Escribe la edad del animal."));
    let animalColor = prompt("Escribe el color del animal.");

    let animales = new animal(animalEspecie, animalEdad, animalColor);

    animales.escribirDocumento();

    numeroAnimales--;
}
 */

/* class carro {
    constructor (marca, modelo, anio, numeroPuertas, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.numeroPuertas = numeroPuertas;
        this.color = color;

        this.informacion = `La marca del carro es ${this.marca} el modelo es ${this.modelo} 
                            es del año ${this.anio} tiene ${numeroPuertas} puertas y es 
                            de color ${this.color}`;
    }

    escribirEnElDocumento() {
        document.writeln(this.informacion);
    }
}

let numeroDeAutos = parseInt(prompt("¿Cuántos carros quieres registrar?"));

for(let i = numeroDeAutos; i > 0; i--) {
    let marcaCarro = prompt("¿Qué marca es el carro?");
    let modeloCarro = prompt("¿Qué modelo es el carro?");
    let anioCarro = prompt("¿Què año es el carro?");
    let puertasCarro = parseInt(prompt("¿Cuántas puertas tiene el carro?"));
    let colorCarro = prompt("¿De qué color es el carro?");

    let carros = new carro(marcaCarro.toUpperCase(), modeloCarro, anioCarro, puertasCarro, colorCarro);

    carros.escribirEnElDocumento();
} */

/* class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    escribirDocumento(animal) {
        document.write(this.informacion + '<br>');
    }
}*/

//class perro extends animal { /* HERENCIA CON CLASES */
//    constructor(especie, edad, color, raza) {
//        super(especie, edad, color); /* PALABRA PARA INDICAR CUALES SON LAS QUE HEREDA */
/*        this.raza;
    }
    static ladrar() { /*Los static funcionan aunque no se les haya dado ningun valor aún */
/*        alert("¡GUAU!");
    }
    set modificarRaza(newName) { /*SET es para modificar atributos*/
/*        this.raza = newName;
    }
    get obtenerRaza() { /*PARA OBTENER DATOS O MOSTRARLOS*/
/*        return this.raza;
    }
}
/*
let perroo = new perro("Perro", 26, "negro", "Chihuahua");

perroo.escribirDocumento();
perro.ladrar();

perroo.modificarRaza = "Nueva Raza"; /*Ahí se utilizan los setters */
/*
document.writeln(perroo.obtenerRaza);
 */

/**** BUCLES O RECORRER ARRAYS****
    * for(let i=0; i<limite; i++) --> Como cualquier for, es lo mismo.
    * for(valor in valores) --> Recorre un arrgelo y muestra los INdices.
    * for(valor of valores) --> Recorre un arreglo y muestra el VALor.
 */

/**** METODOS DE CADENAS. ****|  
    * .concat(variable); --> Concatena cadenas de texto. 
    * .startWith(variable) --> Verifica si una cadena empieza con esa letra o palabra.
    * .endWith(variable) --> Verifica si una cadena termina con esa letra o palabra.
    * .includes(variable) --> Verifica si hay una cadena dentro de otra cadena.
    * .indexOf(variable) --> Devuelve la primera posición en la que se encuentra la palabra.
    * .lastIndexOf(variable) --> Devuelve la última posición en la que se encuentra la palabra. 
    * .padStart(numero, variable) --> Rellena la cadena (al inicio) las veces que le des y con la palabra que quieras. 
    * .padEnd(numero, variable) --> Rellena la cadena (al final) las veces que le des y con la palabra que quieras.
    * .repeat(numero) --> Repite la cadena las veces que se le indique.
    * .split(variable) -->  Divide la cadena como queramos.
    * .subString(varInicio, varFinal) --> Devuelve lo que seleccionamos.
    * .toLowerCase() --> Convierte la cadena a minuscula.
    * .toUpperCase() --> Convierte la cadena a mayuscula.
    * .toString() --> Convierte la variable en cadena.
    * .trim() --> Elimina los espacios al inicio y al final que tiene la cadena de texto.
    * .trimStart() --> Elimina los espacios al inicio que tiene la cadena de texto.
    * .trimEnd() --> Elimina los espacios al final que tiene la cadena de texto.
*/

/**** METODOS DE ARRAYS ****|
    * .pop() --> Elimina el último elemento del array y lo muestra.
    * .shift() --> Elimina el primer elemento del array y lo muestra.
    * .push(variable) --> Agrega un elemento al array al final y devuelve el total de elementos en el array.
    * .reverse() --> invierte el array y le cambia el orden al revés.
    * .unshift(variable1, nVariable) --> Agrega uno o más elementos y devuelve la nueva longitud del array.
    * .sort() --> Ordena alfabeticamente los elementos de un arreglo y lo devuelve.
    * .splice(varInicio, varCuantosEliminar, varQueAgregar) --> Reemplaza elementos o los elimina depende de los parametros que les demos
    * .join(variabhle) --> Convierte el array en una cadena de texto, y entre parentesis va con lo que quieras separar la cadena de texto.
    * .slice(varInicio, varFinal) --> Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
    * .filter() --> Recibe como parametro una funciónm. Crea un nuevo array con todos los elementos que cumplan la condición. Ejemplo: resultado = numeros.filter(numero => numero.length > 5) (Devuelve solo las palabras con mas de 5 letras.)
    * .foreach() --> Es lo mismo que filter, devuelve un array nuevo.
*/

/**** OBJETO MATH ****|
        Math.METODO();
    * .sqrt() --> Devuelve la raíz cuadrada positiva de un número.
    * .cbrt() --> Devuelve la raíz cuadrada cúbica de un número.
    * .max() --> Devuelve el mayor de cero o más números.
    * .min() --> Devuelve el más pequeño de cero o más números.
    * .random() --> Devuelve un número pseudo aleatorio entre 0 y 1.
    * .round() --> Devuelve el valor de un número redondeado al número entero más cercano.
    * .fround() --> Devuelve la representacíon flotante de precisión simple más cercana de un número.
    * .floor() --> Devuelve el mayor entero menor que o igual a un número.
    * .trunc() --> Devuelve la parte entera del número x, la eliminación de los digitos fraccionarios.
    * 
*/

/**** MÉTODOS CONSOLE ****|
    * console.assert(condición) --> Aparece un mensaje de error en la consola si la afirmación es falsa, si es verdadera no aparecerá nada.
    * console.clear() --> Limpia la pantall de la consola.
    * console.error(Escribir mensaje de error) --> Muestra un mensaje de error en la consola.
    * console.info("Mensaje de información") --> Muestra un mensaje de información.
    * console.log("Mensaje de depuración") --> Sirve para mostrar mensajes de depuración.
    * console.table() --> Ésta función toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: columns y 
                          nos muestra una tabla en consola.
    * console.warn("Mensaje de advertencia") --> Funciona para darle un mensaje de advertencia al usuario.
    * console.dir(array) --> Despliega una lista interactiva de las propiedades del objeto JS especificado.
    * console.count() --> Registra el número de veces que se llama a count(). Ésta función toma como argumento opcional una etiqueta.
    * console.countReset() --> Resetea el contador console.count().
    * console.group("nombreDelGrupo") --> Crea un grupo en línea.
    * console.groupEnd() --> Cierra el último grupo.
    * console.groupCollapsed() --> Crea un grupo pero lo muestra cerrado.
    * console.time() --> Inicia un temporizador.
    * console.timeLog() --> Nos muestra cuanto tiempo pasó desde que se inició.
    * console.timeEnd() --> Termina el temporizador y muestra el total de tiempo que pasó hasta que se paró.
*/

/* DOM --> DOCUMENT OBJECT MODEL
    * Document: Es el nodo raíz, apartir del cual derivan el resto de nodos.
    * Element: Nodos definidos por etiquetas html.
    * Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
    * Attribute: Los atributos de las etiquetas definen nodos, (En JS no los veremos como nodos, sino como información asociada al nodo de tipo element).
    * Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.
 */
 
/*  Document 
    
    Métodos de selección de elementos
    * document.getElementById() --> Selecciona un elemento por ID.
    * getElementsByTagName() --> Selecciona todos los elementos que coinciden con el nombre de la etiqueta especificada.
    * querySelector() --> Devuelve el primer elemento que coincide con el grupo especificado de selectores.
    * querySelectorAll() --> Devuelve todos los elementos que coinciden con el grupo especificado de selectores.

    Métodos para Definir, Obtener y Eliminar atributos.
    * .setAttribute("atributo","valorCambiar") --> Modifica el valor de un atributo.
    * .getAttribute("atributo") --> Obtiene el valor de un atributo.
    * .removeAttribute() --> Elimina el valor de un atributo.

    Atributos Globales
    * contentEditable --> indica si el elemento puede ser modificable por el usuario (bool).
    * dir --> Indica la direccionalidad del texto.
    * hidden --> Indica si el elemento aún no es, o ya no es, relevante.
    * tabindex --> indica si el elemento puede obtener un focus de input.
    * title --> Contiene un texto con información relacionada al elemento al que pertenece.
    * style --> Contiene declaraciones de estilo CSS para ser aplicadas al elemento.

    const titulo = document.querySelector(".titulo");
    titulo.setAttribute("contentEditable", "true"); //Sirve para activar la edición del texto.
    titulo.setAttribute("dir", "rtl"); //Para acomodar la dirección en la que se verá el contenido.
    titulo.setAttribute("hidden", "false"); //Esconder el atributo, Si esta inicializada siempre se va a esconder.
    titulo.setAttribute("tabindex","0"); //Para hacer el atributo FOCUSEABLE. El numero es el orden en el que se seleccionara cuando se preciona la tecla TAB.
    titulo.setAttribute("title","hola"); //Le pone un título, para cuando dejas el mouse sobre el atributo, te sale un letrero.

    Atributos en INPUTS
    * .className --> Devuelve el nombre de la clase. O puedes modificarlo si le das un valor.
    * .value --> Devuelve el valor que tiene el input. O puedes modificarlo si le das un valor.
    * .type --> Devuelve el tipo de input. O puedes modificarlo si le das un valor.
    * .accept --> Se indica que formato va a aceptar el input.
    * .form --> Sirve para indicarle al input cual es el formulario al que debe pertenecer. ("ponerle el valor del ID")
    * .minLength --> Es para indicar la cantidad mínima de caracteres que debe de aceptar el input.
    * .placeholder --> Modifica la propiedad PLACEHOLDER
    * .required --> Para obligar al usuario a llenar ese dato.
    
    const input = document.querySelector(".inputNormal");
    document.writeln(input.className = "NuevaClase");
    input.value = "122";
    input.type = "file";
    input.accept = "image/gif";
    input.form = "nombreDelFormulario";
    input.minLength = 3;
    input.placeholder = "hola";
    input.required = "true";

    Atributo Style
        Se modifica igual a como se agregan estilos en CSS.

        let titulo = document.querySelector(".titulo");
        titulo.style.color = "#fff";
        titulo.style.backgroundColor = "white";
        titulo.style = "padding: 30px; background-color: white; color: red; border: 5px solid gray";

    Clases, classList y Métodos de classList
        add() --> Añade una clase.
        remove() --> Remueve una clase.
        item() --> Devuelve la clase del indice especificado.
        contains() --> Verifica si ese elemento posee o no, la clase especificada.
        replace() --> Reemplaza una clase por otra.
        toggle() --> Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.
    
        titulo.classList.add("grande") //Agrega una clase.
        titulo.classList.remove("grande"); //Elimina una clase.
        titulo.classList.item(0); //Muestra la clase que esta en la posición indicada.
        titulo.classList.contains("titulo"); //Compureba si tiene la clase, devuelve true o false.
        titulo.classList.replace("uno", "dos"); //Remplaza la clase por una nueva que se indica.
        titulo.classList.toggle("holaMundo"); //Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.
    
    Obtención y Modificaciòn de Elementos
        textContent --> Devuelve el texto en cualquier nodo.
        innerHTML --> Devuelve el contenido HTML de un elemento.
        outerHTML --> Devuelve el código HTML completo del elemento.

        let titulo = document.querySelector(".titulo");
        let resultado = titulo.textContent;
        let resultado2 = titulo.innerHTML;
        let resultado3 = titulo.outerHTML;

        document.write(resultado);
        document.write(resultado2);
        document.write(resultado3);
    
    Creación de elemeentos.
        .createElement("Tipo de elemento") --> Crea un elemento.
        .createTextNode() --> Crea el contenido que va a llevar el Elemento.
        .appendChild() --> Agrega el item al contenido padre. (Ejemplo: CONTENEDOR.appendChild(itemElemento);)
        .createDocumentFragment() --> Crea fragmenos de documento para que sea más fácil agregarlos.
        
        let contenedor = document.querySelector(".contenedor");

        const item = document.createElement("LI");
        const textoDelItem = document.createTextNode("Este es un item de la lista");

        item.appendChild(textoDelItem);
        contenedor.appendChild(item);

        console.log(item);

        item.innerHTML = "hola mundo";
        
        const contenedor = document.querySelector(".contenedor");
        const fragmento = document.createDocumentFragment();
        
        for(let i=0; i<20; i++) {
            const elemento = document.createElement("LI");
            elemento.innerHTML = "Hola Mundo" + parseInt(1+i);
            fragmento.appendChild(elemento);
        }
        
        contenedor.appendChild(fragmento)

    Obtención y Modificación de Child (Hijos)
        .firstChild --> Obtiene el primer hijo. (Si hay espacios dara de resultado #text)
        .lastChild --> Obtiene el último hijo. (Si hay espacios dara de resultado #text)
        .firstElementChild --> Obtiene el primer elemento hijo. (No importa que haya espacios, es el recomendado de usar)
        .lastElementChild --> Obtiene el último elemenot hijo. (No importa que haya espacios, es el recomendado de usar)
        .childNodes --> Devuelve todos los nodos hijos, si hay (Si hay espacios mostrara un #text) 
        .children --> Devuelve todos los elementos que hay dentro del contenedor. (Es el recomendad).
        
        const contenedor = document.querySelector(".contenedor");
        const primerHijo = contenedor.firstChild;
        const ultimoHijo = contenedor.lastChild;
        const primerElementoHijio = contenedor.firstElementChild;
        const ultimoElementoHijo = contenedor.lastElementChild;
        const todosLosNodosHijos = contenedor.childNodes;
        const todosLosHijos = contenedor.children;
        
        console.log(primerHijo)
        console.log(ultimoHijo);
        console.log(primerElementoHijio);
        console.log(ultimoElementoHijo);
        console.log(todosLosNodosHijos);
        console.log(todosLosHijos);
        
        for (const valor of todosLosHijos) {
            console.log(valor);
        }

    Métodos de childs (Hijos)
        * .replaceChild(elementoViejo, elementoNuevo) --> Reemplaza un elemento hijo del contenedor.
        * .removeChild() --> Elimina un elemento de un contenedor.
        * .hasChildNodes() --> Para comprobar si tiene un elemento hijo o no.
    
        const contenedor = document.querySelector(".contenedor");
        
        const parrafo = document.createElement("P").innerHTML = "Parrafo";
        const h2_nuevo = document.createElement("H2");
        h2_nuevo.innerHTML = "Tìtulo";
        
        h2_antiguo = document.querySelector(".h2");
        
        contenedor.replaceChild(h2_nuevo, h2_antiguo);
        
        contenedor.removeChild(h2_nuevo);
        
        let respuesta = h2_antiguo.hasChildNodes()
        
        if(respuesta == true) {
            document.write("El contenedor tiene hijos.");
        }
        else {
            document.write("El contenedor no tiene hijos.")
        }

    Propiedades de parents (Padres)
        * .parentElement --> Selecciona el padre elemento de un elemento.
        * .parentNode --> Selecciona el padre de un elemento.

        const contenedor = document.querySelector(".contenedor");
        const h2_antiguo = document.querySelector(".h2");
        const h2_nuevo = document.createElement("H2");
        
        console.log(h2_nuevo.parentElement);

    Propiedades de Siblings (Hermanos) / (Los hermanos son los que están en el mismo rango.)
        * .nextSibling --> Devuelve el hermano que le sigue. (Si hay espacios te devuelve #text, no recomendado)
        * .previousSibling --> Devuelve el hermano anterior. (Si hay espacios te devuelve #text, no recomendado)
        * .nextElementSibling --> Devuelve el hermano que le sigue. (RECOMENDADO porque si hay texto no te devuelve #text, sino el elemento)
        * .previousElementSibling --> Devuelve el hermano anterior. (RECOMENDADO porque si hay texto no te devuelve #text, sino el elemento)
    
        const contenedor = document.querySelector(".contenedor");
        const h2 = document.querySelector(".h2");
        const h4 = document.querySelector(".h4");
        
        console.log(h2.nextSibling);
        console.log(h2.previousSibling);
        console.log(h2.nextElementSibling);
        console.log(h4.previousElementSibling);
    
    Nodos Extra
        * .closest() --> Selecciona el contenedor ascendente más cercano que coincida con el selector. (Hacia arriba)
        
        const contenedor = document.querySelector(".h4");
        console.log(contenedor.closest(".contenedor"));
*/        

/*  PROBLEMA A:
        - Indicarle las 20 llaves posibles con sus 4 imagenes y cofla debe seleccionar cual llave usar.
        - Una vez seleccionada enviar los datos al servidor y que otro programador se encargue.     */

/* const contenedor = document.querySelector(".flex-container");
let contador = 0;


function crearLlave(nombre, modelo, precio) {
    contador++;
    imagen = "<img src='llave.png' alt='llave'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;


    return [imagen, nombre, modelo, precio];
}

let documentFragment = document.createDocumentFragment();

for(var i=0; i<20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i}`, ` modelo: ${modeloRandom}`, precioRandom);

    let div = document.createElement("DIV");
    div.classList.add(`flex-item`, `item-${i}`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment); */
/* 

const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");
const contenedorConScroll = document.querySelector(".contenedorConScroll");
const boton = document.querySelector(".boton");
const input = document.querySelector(".teclado");
const img = document.querySelector(".img-robot");

boton.addEventListener("click",()=>{
    console.log("Click");
});

boton.addEventListener("dblclick",()=>{
    console.log("Doble Click");
});

boton.addEventListener("mouseover",()=>{
    console.log("Mouse Over");
});

boton.addEventListener("mouseout",()=>{
    console.log("Mouse Out");
});

boton.addEventListener("contextmenu",()=>{
    console.log("Context Menu");
});

boton.addEventListener("mouseenter",()=>{
    console.log("Mouse Enter");
});

boton.addEventListener("mousemove",()=>{
    console.log("Mouse Move");
});

boton.addEventListener("mouseleave",()=>{
    console.log("Mouse Leave");
});

boton.addEventListener("mouseup",()=>{
    console.log("Mouse Up");
});

boton.addEventListener("mousedown",()=>{
    console.log("Mouse Down");
});

input.addEventListener("keydown", () => {
    console.log("Una tecla presionada.");
});

input.addEventListener("keypress",()=>{
    console.log("Un usuario presionó una tecla.");
});

input.addEventListener("keyup", ()=>{
    console.log("Una tecla fué soltada.");
});

img.addEventListener("error", ()=>{
    console.log("Error al cargar la imágen.");
});

addEventListener("load", () =>{
    console.log("Ha cargado el sitio correctamente.");
})

addEventListener("beforeunload", ()=>{
    console.log("Estás por irte del sitio.");
});

addEventListener("unload", () =>{
    console.log("Ya te fuiste del sitio.");
} );

addEventListener("resize", ()=>{
    console.log("La ventana está cambiando de tamaño.");
});

contenedorConScroll.addEventListener("scroll", ()=>{
    console.log("Se está scrolleando.");
});

input.addEventListener("select", ()=>{
    console.log("Texto seleccionado.");
});

let primeraLetra = 0;
input.addEventListener("keyup", (e)=>{
    console.log(e);
    boton.style.borderRadius = "20px";
    let tecla = e.key;
    if(primeraLetra === 0) {
        boton.innerHTML = tecla;
        boton.style.backgroundColor = "red";
        boton.style.color = "white";
    }
    else {
        boton.innerHTML += tecla;
        boton.style.backgroundColor = "black";
        boton.style.color = "white";
        let palabras = input.value;
        let longitudPalabras = input.value.length
        console.log("palabras = " + palabras);
        if(tecla == 'Backspace') {
            boton.innerHTML = "";
            for(let i=0; i<longitudPalabras; i++) {
                boton.innerHTML += palabras[i];
            }
        }
    }
    primeraLetra++;
});

const meses          = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviempre", "Diciembre"];
const diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sàbado"];

const reloj = document.querySelector(".reloj");
const pararReloj = document.querySelector(".pararReloj");

reloj.style.position = "absolute";
reloj.style.top = "0";
reloj.style.right = "0"
pararReloj.style.position = "absolute";
pararReloj.style.top = "50px";
pararReloj.style.right = "0"


const actualizarReloj = setInterval(()=>{
    const fecha = new Date();
    
    let diaDeLaSemana = fecha.getDay();
    let dia           = fecha.getDate();
    let mes           = fecha.getMonth();
    let año           = fecha.getFullYear();
    let hora          = fecha.getHours();
    let minutos       = fecha.getMinutes();
    let segundos      = fecha.getSeconds();

    if(segundos.toString().length == 1) {
        console.log("longitud de los segundos: " + segundos.length);
        reloj.innerHTML = `Hoy es ${diasDeLaSemana[diaDeLaSemana]}, ${dia}/${meses[mes]}/${año} - ${hora}:${minutos}:0${segundos}`;
    }
    else {
        reloj.innerHTML = `Hoy es ${diasDeLaSemana[diaDeLaSemana]}, ${dia}/${meses[mes]}/${año} - ${hora}:${minutos}:${segundos}`;
    }
}, 500);

pararReloj.addEventListener("dblclick", ()=>{
    reloj.style.color = "red";
    clearInterval(actualizarReloj);
}); */

/* CALLBACK --> FUNCIÓN QUE LLAMA A OTRA FUNCIÓN.

function prueba(callback) {
    callback("esto es un callback");
}

function decirNombre(nombre) {
    console.log(nombre);
}

prueba(decirNombre); 
*/

/* class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const datosPersonas = [
    ["carlos", "caxlsh"],
    ["daniel", "cjavat"],
    ["javato"]
]

const personas = [];

for(let i=0; i < datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0], datosPersonas[i][1]);
}

const obtenerPersona = (id, callback) => {
    if(personas[id] == undefined) {
        callback("No se ha encontrado a la persona");
    } else {
        callback(null,personas[id],id);
    }
}

const obtenerInstagram = (id, callback) => {
    if(personas[id].instagram == undefined) {
        callback("No se ha encontrado el instagram");
    } else {
        callback(null,personas[id].instagram);
    }

}

obtenerPersona(1,(error,persona, id) => { 
    if(error) {
        console.log(error);
    } else {
        console.log(`Nombre: ${persona.nombre}`);
        obtenerInstagram(id,(error, instagram)=>{
            if(error) {
                console.log(error);
            } else {
                console.log(instagram);

            }
        });
    }
}); */

/*PROMISE*/
/* let nombre = "peddro";
let promesa = new Promise((reslove, reject) => {
    if(nombre != "pedro") reject("Lo siento el nombre no es pedro");
    else reslove(nombre);
});
promesa.then((resultado) => {
    console.log(resultado);
}).catch((e) => {
    console.log(e);
}); 

class Persona {
    constructor(nombre, instagram, seguidores) {
        this.nombre = nombre;
        this.instagram = instagram;
        this.seguidores = seguidores;
    }
}

const datosPersonas = [
    ["carlos", "caxlsh", "100"],
    ["daniel", "cjavat", "1"],
    ["javato",null,"300"],
    [,"cofla", "150"]
]

const personas = [];

for(let i=0; i < datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0], datosPersonas[i][1], datosPersonas[i][2]);
}

const obtenerPersona = (id) => {
    return new Promise((resolve, reject)=>{
        //personas[id] == undefined ? reject("No se ha encontrado a la persona"); : resolve(personas[id]);
        if(personas[id] == undefined) {reject("No se ha encontrado a la persona");}
        else {resolve(personas[id]);}
    });
}

const obtenerInstagram = (id) => {
    return new Promise((resolve,reject) => {
        if(personas[id].instagram == undefined) {reject("No se ha encontrado el instagram");}
        else {resolve(personas[id].instagram);}
    });
}

const obtenerSeguidores = (id) => {
    return new Promise((resolve, reject) => {
        personas[id].seguidores == undefined ? reject("No se han encontrado los seguidores.") : resolve(personas[id].seguidores);
    });
}

let parametro = 0;
obtenerPersona(parametro).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(parametro);
}).then((instagram) => {
    console.log(instagram);
    return obtenerSeguidores(parametro);
}).then((seguidores)=>{
    console.log(seguidores);
}).catch((e) => {
    console.log(e);
});
*/

/*AWAIT & ASYNC
const obtenerInformacion = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text), Math.random()*2000);
    });
}

const mostrarDatos = async () => {
    dato1 = await obtenerInformacion("pito1")
    dato2 = await obtenerInformacion("pito2")
    dato3 = await obtenerInformacion("pito3")
    console.log(dato1);
    console.log(dato2);
    console.log(dato3);
};

mostrarDatos(); */

/*
-- JSON -----------------------------
Estructura:
    objeto = {
        'variable1' : 'variable',
        'variable2' : 'variable2'
    };
Serializar - Deserializar
JSON.parse()      --> Convierte un string con estructura JSON a formato JSON (deserialización).
JSON.stringify()  --> Convierte un dato de JavaScript en una cadena de texto JSON (serialización).
JSON Polifill
*/



/*
-- AJAX  -----------------------
- Objeto XMLHttpRequest
- Enviar peticiones GET
- Objeto ActiveXObject 
- Nueva forma de trabajar el resultado
- Enviar peticiones POST
- Objeto FormData
*/

/* let peticion;

if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = ActiveXObject("Microsoft.XMLHTTP");


peticion.addEventListener("load", ()=>{
    let respuesta;
    if(peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el racurso.";

    console.log(JSON.parse(respuesta));
});


peticion.open("POST", "informacion.txt");
peticion.send();



console.log(peticion); */


/*
    --FETCH--------------
    fetch("https://www.asad.com/", {
        method : "POST", //ESTE ES EL METODO PARA USAR EL METODO DE POST.
        body : JSON.stringify({
            "nombre" : "Daniel",
            "apellido" : "Plascencia"
        }),
        headers : {"content-type" : "application/json"}
    }) //Por defecto el metodo de evio es GET.
        .then(res => res.text()) // || res.json() || res.blob.
        .then(res=>console.log(JSON.parse(res)));
*/

/*
    --AXIOS----------
axios("informacion.txt")
    .then(res=>console.log(res));
*/

//CURSO JSON.
/* const person = {
    "name" : "Daniel",
    "lastname" : "Plascencia",
    "age" : 20,
    "nickname" : "cjavat",
    "hobbies" : ["run", "eat", "code"],
    "address" : {
        "street" : "123 main st",
        "city" : "New York"
    },
    "married" : true
};

const friends = [
    {"name" : "Carlos", nickname : "Blakk"},
    {"name" : "Eliot", nickname : "javat"}
];

person.friends = friends;

console.log(person);
console.log(JSON.stringify(person));

console.log(person.address.city); */

/* let postElement = '';
//! https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        for(let i=0; i<json.length; i++) {
            postElement += `<li>${json[i].userId} - ${json[i].title}</li>`;
        }
        document.getElementById("post").innerHTML = postElement;
    });

let postElement2 = '';
fetch('/user.json')
    .then(response => response.json())
    .then(data => {
        for(let i=0; i<data.length; i++) {
            postElement2 += `<li>${data[i].nickname} - ${data[i].nickname}</li>`;
            document.getElementById("person").innerHTML = postElement2;
        }
    }); */

/* const productos = [
    {nombre: 'Platanos', valor: 500},
    {nombre: 'Manzanas', valor: 200},
    {nombre: 'Peras', valor: 100},
    {nombre: 'Sandias', valor: 50},
    {nombre: 'Melón', valor: 20}
];
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultados = document.querySelector('#resultados');

const filtrar = () => {
    resultados.innerHTML = '<li></li>';

    const texto = formulario.value.toLowerCase();

    for(let producto of productos) {
        let nombre = producto.nombre.toLocaleLowerCase();
        if(nombre.indexOf(texto) !== -1) {
            resultados.innerHTML += `
            <li>${producto.nombre} - ${producto.valor}</li>`;
        }
    }
    if(resultados === '') {
        resultados.innerHTML += `<li>Producto no encontrado</li>`;
    }
}
boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar)
filtrar(); */





















