class Persona {
  // Propiedad privada
  #edad;

  constructor(nombre, edad) {
    this.nombre = nombre; // Propiedad pública
    this.edad = edad;     // Usa el setter para validar
  }

  // Getter para consultar la edad
  get edad() {
    return this.#edad;
  }

  // Setter para modificar la edad con validación
  set edad(nuevaEdad) {
    if (nuevaEdad < 0) {
      console.error("La edad no puede ser negativa.");
      return;
    }
    this.#edad = nuevaEdad;
  }
}

const p = new Persona("Ana", 25);
console.log(p.edad); // 25 (Acceso a través del getter)
p.edad = -5;         // Muestra mensaje de error y NO modifica la propiedad
// console.log(p.#edad); // Error de sintaxis: propiedad privada inaccesible desde fuera