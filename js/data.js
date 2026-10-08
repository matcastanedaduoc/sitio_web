// Arreglos base iniciales
const productosIniciales = [
  { id: 1, codigo: "MOUSE-01", nombre: "Mouse Gamer RGB 16000 DPI", precio: 29990, descripcion: "Mouse óptico de alta precisión con iluminación RGB personalizable.", imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop", categoria: "Periféricos", stock: 15 },
  { id: 2, codigo: "TECLA-01", nombre: "Teclado Mecánico Switch Blue", precio: 49990, descripcion: "Teclado mecánico con switches táctiles y retroiluminación RGB.", imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop", categoria: "Periféricos", stock: 8 },
  { id: 3, codigo: "AUDI-01", nombre: "Audífonos Gamer 7.1 Surround", precio: 39990, descripcion: "Sonido envolvente 7.1 con micrófono con cancelación de ruido.", imagen: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop", categoria: "Audio", stock: 10 },
  { id: 4, codigo: "MON-01", nombre: "Monitor Gamer 144Hz 1ms 24''", precio: 159990, descripcion: "Monitor IPS FHD de alta tasa de refresco para juego competitivo.", imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop", categoria: "Monitores", stock: 5 },
  { id: 5, codigo: "SILLA-01", nombre: "Silla Gamer Ergonómica Pro", precio: 129990, descripcion: "Silla de ecocuero con soporte lumbar ajustable y reclinable 180°.", imagen: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format&fit=crop", categoria: "Mobiliario", stock: 4 }
];

const usuariosIniciales = [
  { id: 1, nombre: "Admin General", run: "111111111", correo: "admin@duocuc.cl", rol: "Administrador" },
  { id: 2, nombre: "Juan Pérez", run: "19876543K", correo: "juan.perez@gmail.com", rol: "Cliente" }
];

const regionesData = [
  { region: "Región Metropolitana", comunas: ["Santiago", "Providencia", "Puente Alto", "Maipú", "La Florida"] },
  { region: "Valparaíso", comunas: ["Valparaíso", "Viña del Mar", "Concón", "Quilpué"] },
  { region: "Bío Bío", comunas: ["Concepción", "Talcahuano", "San Pedro de la Paz"] }
];

// Cargar o inicializar productos en localStorage
function obtenerProductosDB() {
  const prods = localStorage.getItem('pixelcraft_productos');
  if (!prods) {
    localStorage.setItem('pixelcraft_productos', JSON.stringify(productosIniciales));
    return productosIniciales;
  }
  return JSON.parse(prods);
}

// Cargar o inicializar usuarios en localStorage
function obtenerUsuariosDB() {
  const users = localStorage.getItem('pixelcraft_usuarios');
  if (!users) {
    localStorage.setItem('pixelcraft_usuarios', JSON.stringify(usuariosIniciales));
    return usuariosIniciales;
  }
  return JSON.parse(users);
}

let productosData = obtenerProductosDB();
let usuariosData = obtenerUsuariosDB();