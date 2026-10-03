# Ejercicio Práctico de POO - Productos Cosméticos

Este repositorio contiene un ejercicio práctico desarrollado en JavaScript que aplica los tres pilares de la Programación Orientada a Objetos (POO): Herencia, Polimorfismo y Encapsulamiento.

## Conceptos Aplicados

1. **Herencia:** Se utiliza la clase base `ProductoCosmetico` de la cual heredan las subclases `Labial` y `BaseMaquillaje` mediante `extends` y `super()`.
2. **Encapsulamiento:** La propiedad `#precio` está protegida como privada y solo se consulta o modifica mediante los métodos `getPrecio()` y `setPrecio()`.
3. **Polimorfismo:** El método `aplicar()` está redefinido en cada clase hija para ejecutar un comportamiento específico según el tipo de cosmético.

## Ejecución
Para probar el proyecto, puedes abrir una consola de navegador (F12) o ejecutar el archivo utilizando Node.js:

```bash
node script.js