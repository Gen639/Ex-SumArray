# Ex-SumArray
Suma de Números en un Array - Descripción
La función sumArray toma un array como argumento y devuelve la suma de todos los números en el array, excluyendo el valor más bajo y el más alto. Además, se manejan casos especiales como valores nulos, indefinidos, arrays vacíos o arrays con uno o dos elementos, en los cuales la función devuelve 0.

##Especificaciones
La función sumArray debe implementarse de dos maneras distintas:

Método 1: Con Uso de Métodos de Array (por ejemplo, sort y reduce)
Esta implementación utiliza métodos de Array para ordenar el array y luego realizar la suma excluyendo el valor más bajo y el más alto.

Método 2: Sin Uso de Métodos de Array sort ni reduce
Esta implementación logra la misma funcionalidad sin recurrir a los métodos de Array sort y reduce.
(Está la soluccion en commentarios en index.js)

##Consideraciones
La función debe manejar casos especiales y devolver 0 cuando el array es nulo, indefinido, vacío o contiene uno o dos elementos.
La implementación sin el uso de sort y reduce debe ser eficiente y clara en su lógica.

##Pruebas
Se incluyen casos de prueba para garantizar el correcto funcionamiento de la función en diferentes escenarios. Estas pruebas validan la capacidad de la función para manejar los casos específicos mencionados.
