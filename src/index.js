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
        return `<div class="single-product flex gap-2 items-center hover:bg-gray-900 p-2 hover:text-white transition ease-in-out delay-150 rounded-md cursor-pointer text-left items-center w-fit">
        <img src="https://platzi-avo.vercel.app${articulo.image}" class="w-1/4 rounded-md">
        <div class="product-info">
        <h3 class="text-xl font-bold">${articulo.name}</h3>
        <p class="text-xl font-normal">$${articulo.price}</p>
        </div>
        </div>`
    })
    productosContainer.innerHTML = array.join('');
}
obtenerDatos()