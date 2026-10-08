function obtenerCarrito() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContadorCarrito();
}

function agregarAlCarrito(idProducto, cantidad = 1) {
  let carrito = obtenerCarrito();
  const productos = obtenerProductosDB();
  const producto = productos.find(p => p.id === idProducto);

  if (!producto) return;

  const itemExistente = carrito.find(item => item.id === idProducto);

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
  } else {
    carrito.push({ ...producto, cantidad });
  }

  guardarCarrito(carrito);
  alert(`Producto "${producto.nombre}" agregado al carrito.`);
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  actualizarContadorCarrito();
  if (typeof renderizarTablaCarrito === 'function') {
    renderizarTablaCarrito();
  }
}

function eliminarDelCarrito(idProducto) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter(item => item.id !== idProducto);
  guardarCarrito(carrito);
  if (typeof renderizarTablaCarrito === 'function') {
    renderizarTablaCarrito();
  }
}

function actualizarContadorCarrito() {
  const carrito = obtenerCarrito();
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  const contadorElemento = document.getElementById('cart-count');
  if (contadorElemento) {
    contadorElemento.textContent = totalItems;
  }
}

document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);