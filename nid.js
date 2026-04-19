let arr = [];
let contador = 0;

let form = document.getElementById("crear");
let input = document.getElementById("input-tarea");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valor = input.value;

    if (valor === "") {
        console.log("No puedes agregar una tarea vacía");
        return;
    }

    let tarea = {
        id: contador,
        descripcion: valor,
        estado: "pendiente"
    };

    contador++;
    arr.push(tarea);

    mostrarTareas();

    input.value = "";
});

function mostrarTareas() {
    let lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";

    arr.forEach(function(tarea) {
        let fila = document.createElement("tr");

        let datos = [tarea.id, tarea.descripcion, tarea.estado];

        datos.forEach(function(dato) {
            let celda = document.createElement("td");
            celda.textContent = dato;
            fila.appendChild(celda);
        });

        // Celda de acciones
        let celdaAcciones = document.createElement("td");

        let botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";

        botonEditar.addEventListener("click", function() {
            Editar(tarea.id);
        });

        celdaAcciones.appendChild(botonEditar);

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function() {
            eliminar(tarea.id);
        });

        celdaAcciones.appendChild(botonEliminar);
        fila.appendChild(celdaAcciones);

        lista.appendChild(fila);
    });
}

function eliminar(id) {
    arr = arr.filter(function(tarea) {
        return tarea.id !== id;
    });

    mostrarTareas();
};


function Editar(id) {
    let tarea = arr.find(function(tarea) { 
        return tarea.id === id;
    });
    let nuevoValor = prompt("Ingrese la nueva descripción de la tarea:", tarea.descripcion);

     if (nuevoValor !== null && nuevoValor.trim() !== "") {
        tarea.descripcion = nuevoValor;

     }
      
    mostrarTareas();
};

