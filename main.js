// // EJERCICIOS Nº1

// person = (name,lastname,age) => {
//     return `Mi nomnbre es ${name} ${lastname} y tengo ${age} años de edad`
// } 

// console.log(person('Piero','Montalvo',20))


// // EJERCICIO Nº2

// alCubo = (x,z,y) => {
//     let num1 = x **3
//     let num2 = z **3
//     let num3 = y **3

//     resultado = num1 + num2 + num3

//     return `El resultado es ${resultado}`
// }

// console.log(alCubo(1,5,9))


// // EJERCICIO Nº3

// valor = (y) => {
//     let tipo = typeof(y)

//     return `El tipo de valor de '${y}' es : ${tipo}`
// }

// console.log(valor(8))


// // EJERCICIOS Nº4

// function sumarTodo(a,b,...numeros){
//     let resultado = a + b

//     numeros.forEach(n => {
//         resultado += n
//     })

//     return resultado
// }

// console.log(sumarTodo(1,2,3,4,5,6))


// // EJERCICIO Nº5

// let valores = [10,'Hola', 'Juan', {lastname:'montalvo'} , undefined]

// let valoresRecorrido = valores.filter(function(valor){
//     if(typeof valor != 'string'){
//        console.log(valor)
//     }
// })

// valoresRecorrido


// // EJERCICIO Nº6

// const minAndMax = [50,80,10,40,5,9]

//     console.log(Math.min(...minAndMax))
//     console.log(Math.max(...minAndMax))


// // EJERCICIO Nº7


// let telefono = [1,2,3,4,5,6,7,8,9,0]

// let numeroTelefono = telefono.join('')
// let num = numeroTelefono.substr(0,3)
// let num2 = numeroTelefono.substr(3,3)
// let num3 = numeroTelefono.substr(6,4)

// console.log(`El numero de telefono es : (${num}) ${num2} - ${num3}`)


// // EJERCICIO Nº8

