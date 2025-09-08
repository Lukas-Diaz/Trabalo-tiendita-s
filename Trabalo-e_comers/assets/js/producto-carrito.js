document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos(){
    let inyector = '';
    productos.forEach(producto => {
        inyector += `

        <div class="boxescard">
            <img src="${producto.img}" alt="img-boxes">
            <div class="boxescontainers">
                <h4><b>${producto.tipo}</b></h4>
                <p class="parrafo" id="card-data">${producto.descripcion}</p>
                <p class="parrafo" id="precio">Valor de la caja: $${producto.precio}</p>
                <button class="btn-añadir">Añadir al carrito</button>
            </div>
        </div>

        `;
    });
    return inyector;
}

//No funciona

/*
function buscarElectricos(){
    const urlParams = new URLSearchParams(window.location.search);
    const producto = urlParams.get('id');
    const productoEncontrado = productos.find(p => p.id == producto && p.tipo == "Electrodomesticos")
    if (productoEncontrado) {
        document.getElementById("imagen").src = productoEncontrado.img;
        document.getElementById("tipo de caja").innerText = productoEncontrado.tipo;
        document.getElementById("descripcion").innerText = productoEncontrado.descripcion;
        document.getElementById("precio").innerText = productoEncontrado.precio;
    }else{
        document.getElementById("titulo").innerHTML="Producto no encontrado error - 2"
    }
}
    */

