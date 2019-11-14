'use strict';

// Robot

class Robot {
  rowsPosition = 0;
  columnsPosition = 0;

  constructor(space) {
    this.space = space;
  }
  moveLeft() {
    if (this.columnsPosition === 0) {
      return false;
    }
    this.columnsPosition--;
    return true;
  }
  moveRight() {
    if (this.columnsPosition === this.space[this.rowsPosition].length - 1) {
      // Pongo esto para que valga también para una matriz que no sea cuadrada
      return false;
    }
    this.columnsPosition++;
    return true;
  }
  moveUp() {
    if (this.rowsPosition === 0) {
      return false;
    }
    this.rowsPosition--;
    return true;
  }
  moveDown() {
    if (this.rowsPosition === this.space.length - 1) {
      return false;
    }
    this.rowsPosition++;
    return true;
  }
  currentPosition() {
    return this.space[this.rowsPosition][this.columnsPosition];
  }
}

const mySpace = [
  [1, 9, 5],
  [7, 6, 3],
  [6, 6, 8]
];

console.log(mySpace[0].length);
console.log(mySpace[1][2]);
const myLittlePrettyRobot = new Robot(mySpace);

console.log(myLittlePrettyRobot.currentPosition());

myLittlePrettyRobot.moveRight();
myLittlePrettyRobot.moveRight();
myLittlePrettyRobot.moveRight();
console.log(myLittlePrettyRobot.currentPosition());

myLittlePrettyRobot.moveDown();
myLittlePrettyRobot.moveDown();
console.log(myLittlePrettyRobot.currentPosition());

myLittlePrettyRobot.moveUp();
console.log(myLittlePrettyRobot.currentPosition());

myLittlePrettyRobot.moveLeft();
myLittlePrettyRobot.moveLeft();
myLittlePrettyRobot.moveUp();
console.log(myLittlePrettyRobot.currentPosition());

// Banco

class Banco {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.clientes = [];
  }
}

class CuentaBancaria {
  constructor(id) {
    this.balance = 10000;
    this.id = Math.floor(Math.random() * 9999999999999999);
  }
}

class Titular {
  constructor(nombre, genero, monedero) {
    this.nombre = nombre;
    this.genero = genero;
    this.monedero = monedero;
    this.id = Math.floor(Math.random() * 99999999);
    this.cuentas = [];
  }

  abrirCuentaBancaria(banco) {
    // 1. Generar un ID para la nueva cuenta bancaria.
    const newID = Math.floor(Math.random() * 999999999);
    // 2. Acceder al array "clientes" del banco y almacenar el nombre y el ID de la cuenta bancaria del nuevo cliente
    banco.clientes.push({ name: this.nombre, ID: this.id });
    // 3. Crear una nueva cuenta bancaria a la que debemos pasar el nuevo ID.
    this.cuentas.push({ Entidad: banco.nombre });

    return new CuentaBancaria(newID);
  }

  ingresarDinero(cantidad, cuenta) {
    // 1. Comprobar si en el monedero tenemos la cantidad q deseamos ingresar. De no ser así, mostrar un mensaje que diga que no tenemos
    //    suficiente dinero en el monedero.
    if (this.monedero < cantidad) {
      console.error('No hay suficiente');
    }
    // 2. Si tenemos suficiente dinero en el monedero, solo queda restar en el monedero la cantidad que vamos a ingresar.
    else {
      this.monedero = this.monedero - cantidad;
      // 3. Acceder a la propiedad "balance" de la cuenta bancaria y sumar la cantidad a ingresar. Mostrar un mensaje de que el ingreso ha
      //    sido realizado.
      cuenta.balance = cuenta.balance + cantidad;
      console.warn(`Dinero ingresado: ${cantidad} €\n  Saldo en cuenta: ${cuenta.balance} €`);
    }
  }

  retirarDinero(cantidad, cuenta) {
    // 1. Comprobar si en la propiedad "balance" de nuestra cuenta tenemos la cantidad que deseamos retirar. De no ser asÃ­, mostrar un
    //    mensaje que diga que no tenemos suficiente dinero en la cuenta.
    if (cuenta.balance < cantidad) {
      console.error(
        `SALDO INSUFICIENTE! (${cuenta.balance -
          cantidad} €)\n  Cantidad solicitada: ${cantidad} €\n  Saldo en cuenta: ${cuenta.balance} €`
      );
    }
    // 2. Si tenemos suficiente dinero en la cuenta, solo queda restar en el balance la cantidad que vamos a retirar.
    else {
      cuenta.balance = cuenta.balance - cantidad;
      // 3. Acceder a la propiedad "monedero" del titular y sumar la cantidad retirada al monedero. Mostrar un mensaje de que el dinero
      //    ha sido retirado.
      this.monedero = this.monedero + cantidad;
      console.warn(`Dinero retirado: ${cantidad} €\n  Saldo en cuenta: ${cuenta.balance} €`);
    }
  }

  mostrarSaldo(cuenta1, cuenta2) {
    // 1. Acceder a la propiedad "balance" de la cuenta y mostrar un mensaje que nos indique nuestro saldo actual.
    console.log(
      `Balance ${cuenta1.id}: ${cuenta1.balance} €\nBalance ${cuenta2.id}: ${
        cuenta2.balance
      } €\nTOTAL: ${cuenta1.balance + cuenta2.balance}`
    );
  }
}

const pablo = new Titular('Pablo Pico Uceira', 'Hombre', 0);
console.log(pablo);

const ing = new Banco('ING', 'A Coruña');
console.log(ing);

const cuentaPabloIng = pablo.abrirCuentaBancaria(ing);

console.log(cuentaPabloIng);
console.log(ing);

pablo.retirarDinero(1250, cuentaPabloIng);
console.log(pablo);

pablo.retirarDinero(4000, cuentaPabloIng);
console.log(pablo);

pablo.ingresarDinero(2000, cuentaPabloIng);
console.log(pablo);

pablo.retirarDinero(500, cuentaPabloIng);

pablo.retirarDinero(1000, cuentaPabloIng);

const bbva = new Banco('BBVA', 'As Pontes');
console.log(bbva);

pablo.retirarDinero(6000, cuentaPabloIng);

const cuentaPabloBbva = pablo.abrirCuentaBancaria(bbva);
console.log(cuentaPabloBbva);

pablo.ingresarDinero(4000, cuentaPabloBbva);

pablo.retirarDinero(6000, cuentaPabloBbva);

console.log(pablo);

pablo.mostrarSaldo(cuentaPabloIng, cuentaPabloBbva);
