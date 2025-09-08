document.addEventListener('DOMContentLoaded',function(){
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

    //No funciona

    /*
function buscarElectricos(){
    let inyectorE = '';
    if (producto.tipo == "Electrodomesticos"){ 
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
    }else{
        return document.getElementById("titulo").innerHTML="Producto no encontrado error - 2"
    }
}
*/
}