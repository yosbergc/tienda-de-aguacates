let productosContainer = document.querySelector('.productos-container');
async function obtenerDatos() {
    try {
        let res = await fetch('https://platzi-avo.vercel.app/api/avo');
        let data = await res.json();
        agregarDatos(data.data);
    } catch (error) {
        console.error(error);
    }
}
function agregarDatos(datos) {
    let array = datos.map(articulo => {
        return `<div class="single-product">
        <img src="https://platzi-avo.vercel.app${articulo.image}" class="single-product-img">
        <div class="product-info">
        <h3 class="single-product-name">${articulo.name}</h3>
        <p class="single-product-price">$${articulo.price}</p>
        </div>
        </div>`
    })
    productosContainer.innerHTML = array.join('');
}
obtenerDatos()