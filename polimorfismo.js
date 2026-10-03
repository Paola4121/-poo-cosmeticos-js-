// Clase Padre
class Animal {
  hacerSonido() {
    console.log("El animal hace un sonido genérico.");
  }
}

// Clase Hija 1
class Perro extends Animal {
  hacerSonido() {
    console.log("Guau guau");
  }
}

// Clase Hija 2
class Gato extends Animal {
  hacerSonido() {
    console.log("Miau miau");
  }
}

// Uso polimórfico mediante un arreglo de animales
const animales = [new Perro(), new Gato(), new Animal()];

animales.forEach(animal => {
  // Un mismo método desencadena distintos comportamientos
  animal.hacerSonido();
});
// Salida:
// "Guau guau"
// "Miau miau"
// "El animal hace un sonido genérico."