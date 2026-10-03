// Clase Padre
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  comer() {
    console.log(`${this.nombre} está comiendo.`);
  }
}

// Clase Hija
class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad); // Llama al constructor de la clase padre
    this.raza = raza;
  }

  ladrar() {
    console.log("¡Guau, guau!");
  }
}