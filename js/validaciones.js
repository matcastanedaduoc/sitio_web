
function validarCorreo(correo) {
  const dominiosPermitidos = ['@duocuc.cl', '@profesor.duoc.cl', '@gmail.com'];
  const esValidoEstructura = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  
  if (!esValidoEstructura) return false;
  return dominiosPermitidos.some(dominio => correo.toLowerCase().endsWith(dominio));
}

function validarRun(run) {
  const runLimpio = run.replace(/[\.\-]/g, '').trim();
  const regexRun = /^[0-9]{7,8}[0-9kK]{1}$/;
  return regexRun.test(runLimpio);
}

function validarFormularioLogin(email, password) {
  const errores = [];
  if (!email || !validarCorreo(email)) {
    errores.push("El correo electrónico no es válido o no pertenece a un dominio permitido (@duocuc.cl, @profesor.duoc.cl, @gmail.com).");
  }
  if (!password || password.length < 4 || password.length > 10) {
    errores.push("La contraseña debe tener entre 4 y 10 caracteres.");
  }
  return errores;
}


function validarFormularioRegistro(datos) {
  const errores = [];
  if (!datos.nombre || datos.nombre.trim().length < 3) {
    errores.push("El nombre completo debe tener al menos 3 caracteres.");
  }
  if (!validarRun(datos.run)) {
    errores.push("El RUN ingresado no es válido (ej: 19876543K).");
  }
  if (!validarCorreo(datos.correo)) {
    errores.push("El correo debe ser @duocuc.cl, @profesor.duoc.cl o @gmail.com.");
  }
  if (!datos.password || datos.password.length < 4 || datos.password.length > 10) {
    errores.push("La contraseña debe tener entre 4 y 10 caracteres.");
  }
  if (datos.password !== datos.confirmarPassword) {
    errores.push("Las contraseñas no coinciden.");
  }
  if (!datos.region) {
    errores.push("Debe seleccionar una región.");
  }
  if (!datos.comuna) {
    errores.push("Debe seleccionar una comuna.");
  }
  return errores;
}

function validarFormularioContacto(nombre, correo, mensaje) {
  const errores = [];
  if (!nombre || nombre.trim().length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres.");
  }
  if (!correo || !validarCorreo(correo)) {
    errores.push("El correo no es válido o no pertenece a un dominio autorizado.");
  }
  if (!mensaje || mensaje.trim().length < 10) {
    errores.push("El mensaje debe contener al menos 10 caracteres.");
  }
  return errores;
}