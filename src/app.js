const {casco, guantes, vendas, botas, bucales} = require('./utils.js');
var total = 0;

/*Cargar las opciones de los select de forma dinamica*/
function cargarProductos(){
    cargarOpciones('helmet', casco);
    cargarOpciones('gloves', guantes);
    cargarOpciones('vendas', vendas);
    cargarOpciones('botas', botas);
    cargarOpciones('bucal', bucales);
}

function cargarOpciones(selectedId, productos){
    let select = document.getElementById(selectedId);
    if(select){
        for(let [nombre, precio] of Object.entries(productos)){
            let option = document.createElement('option');
            option.text = `${nombre} - ${precio}€`;
            option.value = nombre;
            select.appendChild(option);
        }

        //Agreamos el evento para detectar cada cambio del select
        select.addEventListener("change", (event) => {
            actualizarSeleccion(selectedId, event.target.value, productos[event.target.value]);    
        });
    }
}

/*Actualiza la lista de los elementos seleccionados*/
function actualizarSeleccion(selectedId, producto, precio){
    let selectedElement = document.getElementById(`selected-${selectedId}`);
    if(selectedElement){
        if(producto != '0'){
            selectedElement.innerHTML = `${producto} <span>${precio}€</span>`;
        } else{
            selectedElement.innerHTML = ''; 
        }
        
    }
    calcularTotal(); //Llamamos a calcularTotal cada vez que se seleccione un producto
}

/* Calcula el precio total */
function calcularTotal() {
    total = 0;
    totalElement = document.getElementById('total');

    //Recorrer todos los elementos seleccionados y sumar los precios
    document.querySelectorAll(".selected-option span").forEach(span => {
        let precio = parseFloat(span.textContent.replace('€', '')) || 0;
        total += precio;
    });

    totalElement.innerHTML = `${total}€`;
}


document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});