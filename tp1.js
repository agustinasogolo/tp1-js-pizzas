//Sogoló Agustina

//Hola! tuve un problema con una actualización de git 
//y mi sistema operativo así que envio el archivo. 
//Espero poder solucionarlo pronto, mil disculpas! Saludos

const arrayPizzas = [
  {
    id: 1, 
    nombre: 'Muzarella', 
    precio: 1500, 
    ingredientes: ['queso', 'salsa', 'aceitunas']
  },
  {
    id: 2, 
    nombre: 'Napolitana', 
    precio: 1600, 
    ingredientes: ['queso', 'jamón', 'tomate', 'ajo']
  },
  {
    id: 3, 
    nombre: 'Roquefort', 
    precio: 1800, 
    ingredientes: ['roquefort', 'jamón', 'nueces']
  },
  {
    id: 4, 
    nombre: 'Morrón', 
    precio: 1700, 
    ingredientes: ['queso', 'morrón', 'jamón', 'aceitunas']
  },
  {
    id: 5, 
    nombre: 'Verdura', 
    precio: 1700, 
    ingredientes: ['queso', 'salsa blanca', 'espinaca']
  },
  {
    id: 6, 
    nombre: 'Pizza chica', 
    precio: 590, 
    ingredientes: ['queso', 'salsa', 'aceitunas']
  },

];

//Crear una iteración del array que imprima en consola:

//a) Las pizzas que tengan un id impar.
const pizzasImpar = arrayPizzas.filter((e)=>{
  return e.id % 2!==0;
});

pizzasImpar.forEach((e) => {console.log(`Las pizzas con id par son ${e.nombre}`)});


//b) ¿Hay alguna pizza que valga menos de $600?
arrayPizzas.forEach((e)=>{
  if (e.precio < 600){
      console.log(`La pizza ${e.nombre} tiene precio menor a $600, sale $${e.precio}`)
  }
})


//c) El nombre de cada pizza con su respectivo precio.
arrayPizzas.forEach((e)=>{
    console.log(`La pizza ${e.nombre} tiene un precio de $${e.precio}.`)
})


//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.
arrayPizzas.forEach((e)=>{
  console.log(`Los ingredientes de la pizza ${e.nombre} son:`);
  e.ingredientes.forEach((i)=>{
    console.log(i);
})
})

/*const nuevoArray = arrayPizzas.map((e)=> {
    return {
        nombre: e.nombre,
        ingredientes: e.ingredientes,
        precio: e.precio,
    }
});*/


//console.log(`La pizza de ${arrayPizzas.nombre} tiene un precio de $ ${arrayPizzas.precio}`);