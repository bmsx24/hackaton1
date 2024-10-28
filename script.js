const botones = document.querySelectorAll(".miBoton")
const carrito = document.getElementById("carrito");
const eliminar = document.getElementById("eliminarbtn");


const modalElement = document.getElementById('miModal');
const modal = new bootstrap.Modal(modalElement);



// funcion que por cada boton del producto añade la img y titulo al carrito
botones.forEach(boton => {
    boton.addEventListener("click",function(){


        //traigo el numero del producto quitando boton y solo dejando el numero y traigo el titulo acorde
        const imgNumber = boton.id.replace("boton", "");
        const titulo = document.getElementById(`titulo${imgNumber}`);

        // creo el img y h5
        const nuevoProducto = document.createElement("img");
        const nuevoTitulo = document.createElement("h5");

        //especifico que la imgen y titulo deben de ser correspondientes al numero
        nuevoProducto.src = `img/img${imgNumber}.jpg`;
        nuevoTitulo.textContent = titulo.textContent;

        //añado un espacio despues de cada img y titulo
        const espacio = document.createElement("br");

        //enviar todo para que se vea
        carrito.appendChild(nuevoProducto);
        carrito.appendChild(nuevoTitulo);
        carrito.appendChild(espacio);
    });
});


// Esta funcion elimina 3 ultimo elementos (img,br,titulo)
eliminar.addEventListener("click", function(){
    if(carrito.hasChildNodes()){
        carrito.removeChild(carrito.lastChild);
        carrito.removeChild(carrito.lastChild);
        carrito.removeChild(carrito.lastChild);
        
    }else{
        modal.show();
    }
});