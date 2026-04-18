let arr=[];
let contador=0;
let form= document.getElementById("crear");
let input= document.getElementById("input-tarea");

form.addEventListener("submit", function(e){
     e.preventDefault();

    //  Obtenemos el valor del input
    let valor = input.value;

    if (valor === "") {
        console.log("No puedes agregar una tarea vacía");
        return; 
    }



    let tarea={
    id: contador,
    descripcion: valor,
    estado: "pendiente",
     
    
    };

contador++;
arr.push(tarea);
mostrarTareas();
console.log(arr);
input.value="";
 
});

function mostrarTareas() {
    let lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";

    arr.forEach(function(tarea) {
        let fila = document.createElement("tr");
        let datos = [tarea.id, tarea.descripcion, tarea.estado ];

        datos.forEach(function(dato) {
            let celda = document.createElement("td");
            celda.textContent = dato;
            fila.appendChild(celda);
            let accion= document.createElement("button");
            accion.textContent="Eliminar";
       
        });
        let celdaAcciones = document.createElement("td");

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        celdaAcciones.appendChild(botonEliminar);
        fila.appendChild(celdaAcciones);

        lista.appendChild(fila);
    });

    

}
 





