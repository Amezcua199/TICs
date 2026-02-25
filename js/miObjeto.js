const productos = [
    {
        id: 1, 
        nombre: "Laptop", 
        precio: 12000
    },

    {
        id: 2, 
        nombre: "Mouse", 
        precio: 300
    },

    {
        id: 3, 
        nombre: "Teclado", 
        precio: 800
    }
];

const long_array = productos.length;

setTimeout(() => {console.log(`El tamaño de mi array es de: ${long_array}`);
console.log("Voy a recorrer el array");

productos.forEach((valor, index) => {
    console.log(index, valor.nombre);
    console.log(valor.precio);
    console.log("------------");
});

console.table(productos, ["nombre", "precio"]);

let mensaje_estado = document.querySelector("#mensaje_estado");
console.log(mensaje_estado.textContent);

mensaje_estado.textContent = `Recorrí ${long_array} elementos`;}, 5000);
