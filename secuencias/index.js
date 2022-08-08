const { tareaUno, tareaDos } = require('./tareas');


const main = async () => {
    try {
        console.time('Midiendo el tiempo');
        const resultados = await Promise.all([tareaUno(), tareaDos()]);
        console.timeEnd('Midiendo el tiempo');
    
        console.log('Lo que me retorna la tarea uno ' + resultados[0]);
        console.log('Lo que me retorna la tarea dos ' + resultados[1]);
    }
    catch(e) {
        console.log(e);
    }
}

main();