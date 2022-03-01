// 0204 Números e Operadores

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 23;
var idadeIrma = 17;

if (minhaIdade > idadeIrma) {
    console.log('é maior')
} else if (minhaIdade === idadeIrma) {
    console.log('é igual')
} else {
    console.log('é menor')
};

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('brasil tem mais');
} else if (brasil === china) {
    console.log('mesma coisa');
} else {
    console.log('china tem mais');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // 'Falso'

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // 'Gato' && 'Cão'
