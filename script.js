/**
 * Devuelve la suma de todos los número de un array recibido por argumentos, excluye de la suma el valor más bajo y el más alto
 * Si recibimos null, undefined, array vacío o un array con un número o dos número, deberá devolverse 0
 *
 * OBLIGATORIO: USA TESTS!
 *
 * Hazlo de dos maneras distintas:
 * 1- Como quieras
 * 2- Sin el método de Array "sort" ni con "reduce"
 *
 * Datos para pruebas: input | ouput
 * sumArray(null) | 0
 * sumArray([ ]) | 0
 * sumArray([ 3 ]) | 0
 * sumArray([ 3, 5 ]) | 0
 * sumArray([ 6, 2, 1, 8, 10 ]) | 16
 * sumArray([ 0, 1, 6, 10, 10 ]) | 17
 * sumArray([ -6, -20, -1, -10, -12 ]) | -28
 * sumArray([ -6, 20, -1, 10, -12 ]) | 3
 */

function sumArray(array) {
  if (array === undefined || array === null || array.length < 3) {
    return 0;
  } else {
    const maxValue = Math.max(...array);
    const minValue = Math.min(...array);

    array.splice(array.indexOf(maxValue), 1);
    array.splice(array.indexOf(minValue), 1);

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
}

//Solution with sort and reduce
// array.sort(function (a, b) {
//     return a - b;
//   });
// array.splice(0, 1);
// array.splice(array.length - 1, 1);
// let sum = 0;
// sum = array.reduce((a, b) => a + b, 0);
