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
    estado: "pendiente"
    
    };

contador++;
arr.push(tarea);
console.log(arr);
input.value="";
 
});

function mostrarTareas() {
    let lista = document.getElementById("lista-tareas");
    lista.innerHTML = ""; 
    arr.forEach(function(tarea) {
        let item = document.createElement("tr");
        item.textContent =  tarea.id + " - " + tarea.descripcion + " - " + tarea.estado;
        lista.appendChild(item);
    });
 let datos=[item];
   arr.forEach(function(tarea) {
    dato = document.createElement("td");
    dato.textContent =  tarea.id + " - " + tarea.descripcion + " - " + tarea.estado;
    listas.appendChild(dato);
   })
 

}



