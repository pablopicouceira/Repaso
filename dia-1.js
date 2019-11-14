'use strict';

// 217. Contains Duplicate

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is
// distinct.

const array = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsDuplicate(array));

// 485. Max Consecutive Ones

// Given a binary array, find the maximum number of consecutive 1s in this array.

const binarios = [1, 0, 1, 1, 1, 1, 0, 1, 1];

function findMaxConsecutiveOnes(nums) {
  let repeatedOnes = 0;
  let mayor = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      repeatedOnes++;
      if (repeatedOnes > mayor) {
        mayor = repeatedOnes;
      }
    }
    if (nums[i] === 0) {
      repeatedOnes = 0;
    }
  }
  return mayor;
}

console.log(findMaxConsecutiveOnes(binarios));

// 283. Move Zeroes

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

let zeroes = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
  let contador = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[contador++] = nums[i];
    }
  }
  while (contador < nums.length) {
    nums[contador++] = 0;
  }
  return nums;
}

console.log(moveZeroes(zeroes));

/*
 * ###################################
 * ###### E J E R C I C I O   1 ######
 * ###################################
 *
 * Sara y Laura juegan al baloncesto en diferentes equipos. En los
 * últimos 3 partidos, el equipo de Sara anotó 89, 120 y 103 puntos,
 * mientras que el equipo de Laura anotó 116, 94, y 123 puntos.
 *
 * `1.` Calcula la media de puntos para cada equipo.
 *
 * `2.` Muestra un mensaje que indique cuál de los dos equipos
 *      tiene mejor puntuación media. Incluye en este mismo mensaje
 *      la media de los dos equipos.
 *
 * `3.` María también juega en un equipo de baloncesto. Su equipo
 *      anotó 97, 134 y 105 puntos respectivamente en los últimos
 *      3 partidos. Repite los pasos 1 y 2 incorporando al equipo
 *      de María.
 *
 */

let sara = [89, 120, 103];
let sumaSara = 0;
for (let i = 0; i < sara.length; i++) {
  sumaSara += sara[i];
}
console.log(sumaSara);
let mediaSara = sumaSara / sara.length;
console.log(mediaSara);

let laura = [116, 94, 123];
let sumaLaura = 0;
for (let i = 0; i < laura.length; i++) {
  sumaLaura += laura[i];
}
console.log(sumaLaura);
let mediaLaura = sumaLaura / laura.length;
console.log(mediaLaura);

if (mediaSara > mediaLaura) {
  console.log(`El equipo de Sara tiene mejor media: \n Media Sara: ${mediaSara} \n Media Laura: ${mediaLaura}`);
} else console.log(`El equipo de Laura tiene mejor media: \n Media Sara: ${mediaSara} \n Media Laura: ${mediaLaura}`);

let maría = [97, 134, 105];
let sumaMaría = 0;
for (let i = 0; i < maría.length; i++) {
  sumaMaría += maría[i];
}
console.log(sumaMaría);
let mediaMaría = sumaMaría / maría.length;
console.log(mediaMaría);

if (mediaSara > mediaLaura && mediaSara > mediaMaría) {
  console.log(
    `El equipo de Sara tiene mejor media: \n Media Sara: ${mediaSara} \n Media Laura: ${mediaLaura} \n Media María: ${mediaMaría}`
  );
} else if (mediaLaura > mediaSara && mediaLaura > mediaMaría) {
  console.log(
    `El equipo de Laura tiene mejor media: \n Media Sara: ${mediaSara} \n Media Laura: ${mediaLaura} \n Media María: ${mediaMaría}`
  );
} else {
  console.log(
    `El equipo de María tiene mejor media: \n Media Sara: ${mediaSara} \n Media Laura: ${mediaLaura} \n Media María: ${mediaMaría}`
  );
}

/*
 * ###################################
 * ###### E J E R C I C I O   2 ######
 * ###################################
 *
 * Jorge y su familia han ido a comer a tres restaurantes distintos.
 * La factura fue de 124€, 58€ y 268€ respectivamente.
 *
 * Para calcular la propina que va a dejar al camarero, Jorge ha
 * decidido crear un sistema de calculo (una función). Quiere
 * dejar un 20% de propina si la factura es menor que 50€, un 15%
 * si la factura está entre 50€ y 200€, y un 10% si la factura es
 * mayor que 200€.
 *
 * Al final, Jorge tendrá dos arrays:
 *
 * - `Array 1` Contiene las propinas que ha dejado en cada uno de
 *    los tres restaurantes.
 *
 * - `Array 2` Contiene el total de lo que ha pagado en cada uno de
 *    los restaurantes (sumando la propina).
 *
 * `NOTA` Para calcular el 20% de un valor, simplemente multiplica
 *  por `0.2`. Este resultado se obtiene de dividir `20/100`. Si
 *  quisieramos averiguar el 25% de un valor lo multiplicaríamos
 *  por 0.25.
 *
 * `25 / 100 = 0.25`.
 *
 */

function calcularPropina(factura) {
  let propina = 0;
  if (factura < 50) {
    propina = factura * 0.2;
  } else if (factura < 201) {
    propina = factura * 0.15;
  } else {
    propina = factura * 0.1;
  }
  return propina;
}

const facturas = [124, 58, 258];
const array1 = [];
for (let i = 0; i < facturas.length; i++) {
  array1.push(calcularPropina(facturas[i]));
}
console.log(array1);

const array2 = [];
for (let i = 0; i < facturas.length; i++) {
  array2.push(facturas[i] + array1[i]);
}
console.log(array2);

/*
 * ###################################
 * ###### E J E R C I C I O   3 ######
 * ###################################
 *
 * Dado el siguiente array de números:
 *
 * `nums = [100, 3, 4, 2, 10, 4, 1, 10]`
 *
 * `1.` Recorre todo el array y muestra por consola cada uno de sus
 *      elementos con la ayuda de un `for`, con la ayuda de un `map`
 *      y con la ayuda de un `for...of`.
 *
 * `2.` Ordena el array de menor a mayor sin emplear `sort()`.
 *
 * `3.` Ordena el array de mayor a menor empleando `sort()`.
 *
 */

// 1.
const numeros = [100, 3, 4, 2, 10, 4, 1, 10];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

for (const numero of numeros) {
  console.log(numero);
}

let numerosConsole = numeros.map(function(numero) {
  console.log(numero);
});

// 2.

// for (let i = 0; i < numeros.length - 1; i++) {
//   for (let j = i + 1; j < numeros.length; j++) {
//     if (numeros[j] < numeros[i]) {
//       let temp = numeros[j];
//       numeros[j] = numeros[i];
//       numeros[i] = temp;
//     }
//   }
// }

// console.log(numeros);

// 3.
function compare(a, b) {
  return b - a;
}
let newNumeros = numeros.sort(compare);
console.log(numeros);
/*
 * ###################################
 * ###### E J E R C I C I O   4 ######
 * ###################################
 *
 * Crea una `arrow function` que reciba dos números por medio del
 * `prompt`, reste ambos números, y nos devuelva el resultado.
 * En caso de que el resultado sea negativo debe cambiarse a
 * positivo. Este resultado se mostrará por medio de un `alert`.
 *
 */

let num1 = prompt('Introduce primer número');
let num2 = prompt('Introduce segundo número');

const resta = (numero1, numero2) => {
  alert(Math.abs(numero1 - numero2));
};

resta(num1, num2);

// 242. Valid Anagram

// Given two strings s and t , write a function to determine if t is an anagram of s.

let string1 = 'anagram';
let string2 = 'nagaram';

function isAnagram(s, t) {
  let newString1 = s
    .split('')
    .sort()
    .join('');
  console.log(newString1);

  let newString2 = t
    .split('')
    .sort()
    .join('');
  console.log(newString2);

  if (newString1 === newString2) {
    return true;
  }
  return false;
}

console.log(isAnagram(string1, string2));
