// nome variaveis
let $function = "whatever"
let PI = 3.14
let firstName = "Victor"

// tipos de dados primitivos
let x = 5; 
let name = "Victor";
let isStudent = true;
let y; //undefined
let person = null;
let id = Symbol("id");

// Tipos de dados não primitivos
let application = {name: "Victor", age: 31}
let array = [1, 2, 3];
function add(x, y){return x + y;}
let date = new Date();

// console.log(typeof ...) 

// declaracao de variaveis
let a  = 0
const b = 0
var z = 0 //não usar!

function test(){
    let x = 10
    var y = 20

    if(true){
        let x = 5;
        var y = 50;
        console.log(x)
        console.log(y)
    }
    console.log(x) //10
    console.log(y) //50
}
test()

//operadores logicos
const firstName1 = "Victor"
const lastName = "Destefani"
console.log(firstName1 + " " + lastName)

//tipos são diferentes
let n = 10
let m = "10"
if(n == m){console.log("n == m")}
if(n === m){console.log("n === m")}

//Template String
const firstName2 = "Victor"
const job = "It tech"
const dateOfBirth = 1993;

const employee = `My name is ${firstName2} and my job ${job}, my date of birth ${dateOfBirth}`
console.log(employee)

//Conversões
let myString = "10";
let myNumber = 5;
const result = myString + myNumber //concatena, se for outros operadores, realiza normal
const result2 = Number(myString) + myNumber 
console.log(result)
console.log(result2)

console.log("6" - "3" - "10" + 3) // se houver dois operadores negativos, converte-se automaticamente para number
console.log("6" + "3" - "10" + 3)

//Valores verdadeiros e falsos
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean({}))
console.log(Boolean(employee))

//Expressões dão sempre um valor
let h = 3 + 4

//Operador ternário
//Condicao ? verdadeiro : falso

//Declaração, algo que não é manipulado como um dado, não nos retorna valor final
// if(24 > 25)
let age = 23
const drink = age >= 18 ? "wine" : "water"
console.log(drink)

//FUNÇÕES
    //Declaração
function add(x, y){
    return x+y;
}

    //Função anônima/expression
const add = function(x, y){
    return x+y
}

    //Arrow function
let soma = (x, y) => {x + y};

const birthYear = 1993
const yearsUtils = (birthYear) => {
    const age = 2024 - birthYear;
    const retirement = 65-age;
    return retirement;
}

const cutFruitsPieces = function(fruit) {
    return fruit * 4
}

const fruitProcessor = function(apples, oranges)
const applePiece = cutFruitsPieces(apples)
const orangePieces = cutFruitsPieces(oragens)
const juice = `{applePiece}....`

console.log(juice)

