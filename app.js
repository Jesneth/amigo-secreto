// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//1. Crear una variable tipo array
const listaDeNombres = [];

//2. Crear una funcion para agregar los nombres a esa lista
function agregarAmigo(){
    //3. Capturar el valor del campo de entrada
    const nombreAmigo = document.getElementById('amigo').value;
    
    //3. Validar la entrada: Validación que el campo no este vacio
    if(!/^[a-zA-Z\s]+$/.test(nombreAmigo)){
        alert("Por favor, inserte un nombre");
        return;

    }else if ( listaDeNombres.includes(nombreAmigo)){
        alert(`Este nombre: ${nombreAmigo} ya está en la lista`);
        return;

    }else{
        //4 Actualizar el array de amigos
        listaDeNombres.push(nombreAmigo);
        actualizarLista();
        limpiarCampo()
       
    }
}
agregarAmigo()

//5 Limpiar el campo de entrada
function limpiarCampo(){
    document.getElementById('amigo').value = "";
}

function actualizarLista(){
    //6 Obtener el elemento de la lista
    let listaNombreDeAmigo = document.getElementById("listaAmigos");
    //7 Limpiar la lista existente
    listaNombreDeAmigo.innerHTML = "";

    //8 Iterar sobre el arreglo 
    for (let i = 0; i < listaDeNombres.length ; i++){
        const item = document.createElement("li");
        item.textContent = listaDeNombres[i];
        //9 Agregar elementos a la lista.
        listaNombreDeAmigo.appendChild(item);
    
    }
}

function sortearAmigo(){

    // 10 Validar que haya amigos disponibles
    if(listaDeNombres.length === 0){ //== "" || listaDeNombres.length < 2
        alert("Agrega al menos dos amigos para poder sortear");
        return;
    }

    //11 Generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeNombres.length);

    //12 Obtener el nombre sorteado y eliminarlo del array 
    const nombreSorteado = listaDeNombres.splice(indiceAleatorio,1)[0]; 
    //13 Mostrar el resultado 
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
   
    if (listaDeNombres.length === 1) {
        setTimeout(reiniciarJuego, 3000); // Reinicia el juego después de 3 segundos
    }
    actualizarLista();

     
}

function reiniciarJuego(){
    alert("Todos los amigos han sido sorteados. ¡El juego se reiniciará ahora!")

    //vaciar el array de los nombres
    listaDeNombres.length == 1;
   
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

}










