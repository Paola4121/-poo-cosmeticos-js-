// 1. Clase Padre
class ProductoCosmetico {
  // Propiedad privada
  #precio;

  constructor(nombre, marca, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.setPrecio(precio); // Uso del método de modificación controlada
  }

  // Método para consultar la propiedad privada de forma controlada
  getPrecio() {
    return `$${this.#precio.toFixed(2)}`;
  }

  // Método para modificar la propiedad privada con validación
  setPrecio(nuevoPrecio) {
    if (nuevoPrecio > 0) {
      this.#precio = nuevoPrecio;
    } else {
      console.log("El precio debe ser un valor positivo.");
    }
  }

  // Método base que demostrará polimorfismo
  aplicar() {
    console.log(`Aplicando el producto ${this.nombre}...`);
  }
}

// 2. Clase Hija 1 (Uso de extends)
class Labial extends ProductoCosmetico {
  constructor(nombre, marca, precio, tono) {
    // Uso de super() para llamar al constructor padre
    super(nombre, marca, precio);
    this.tono = tono;
  }

  // Polimorfismo: redefinición del método aplicar()
  aplicar() {
    console.log(`Deslizando el labial ${this.nombre} (Tono: ${this.tono}) sobre los labios.`);
  }
}

// 3. Clase Hija 2
class BaseMaquillaje extends ProductoCosmetico {
  constructor(nombre, marca, precio, cobertura) {
    super(nombre, marca, precio);
    this.cobertura = cobertura; // Ejemplo: 'Alta', 'Media', 'Ligera'
  }

  // Polimorfismo: comportamiento específico para la base
  aplicar() {
    console.log(`Difuminando la base ${this.nombre} con cobertura ${this.cobertura} en el rostro.`);
  }
}

// --- Demostración del código ---

// Creación de instancias de las clases hijas
const labialRojo = new Labial("Matte Lip", "BeautyCo", 15.50, "Rojo Pasión");
const baseFluida = new BaseMaquillaje("Fit Me", "Maybelline", 22.00, "Alta");

// Consulta controlada de la propiedad privada #precio
console.log(`${labialRojo.nombre} cuesta: ${labialRojo.getPrecio()}`);
console.log(`${baseFluida.nombre} cuesta: ${baseFluida.getPrecio()}`);

// Demostración de Polimorfismo (mismo método 'aplicar()', diferente comportamiento)
labialRojo.aplicar();
baseFluida.aplicar();

// Modificación controlada del precio
labialRojo.setPrecio(18.00);
console.log(`Nuevo precio de ${labialRojo.nombre}: ${labialRojo.getPrecio()}`);

// Intento de asignar un precio inválido
labialRojo.setPrecio(-5); // Muestra mensaje de error sin alterar el precio