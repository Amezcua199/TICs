document.write("Una agenda");
let seguir = true;
let contactos = [];
while(seguir){ 
    let opcion = parseInt(prompt("Escoge una opción\n1.- Agregar\n2.- Listar\n3.- Salir"));
    switch (opcion){
        case 1:
            alert("Escogiste la opción 1");
            let id = parseInt(contactos.length + 1);
            let nombre = prompt("Ingresa tu nombre");
            let edad = parseInt(prompt("Ingresa tu edad"));
            let telefono = prompt("Ingresa tu numero de telefono");

            let contacto = {
                id: id, 
                nombre: nombre, 
                edad: edad, 
                telefono: telefono
            };
            contactos.push(contacto); //ingresar el contacto al array
            alert("El contacto ha sido agregado");
            console.table(contactos);
            break;
        case 2:
            let lista = ""
            for(let i = 0; i < contactos.length; i++){
                lista += "id: " + contactos[i].id + "\n";
                lista += "Nombre: " + contactos[i].nombre + "\n";
                lista += "Edad: " + contactos[i].edad + "\n";
                lista += "Telefono: " + contactos[i].telefono + "\n";
            }

            if(contactos.length === 0){
                alert("No hay contactos registrados");
            } else {
                alert(lista);
            }

            break;
        case 3:
            alert("Escogiste la opción 3");
            seguir = false;
            break;
        default:
            alert("No recibí una opción valida");
            break;
    }
    //
}