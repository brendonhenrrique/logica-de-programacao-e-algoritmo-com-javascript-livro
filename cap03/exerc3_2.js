const prompt = require("prompt-sync")()    // adiciona o pacote ao programa

const peso = Number(prompt('Peso da Ração (kg): '));
const consumo = Number(prompt('Consumo Diário (gr): '));

const pesoGr = peso * 1000 // conversão do kg para gramas
const duracao = Math.floor(pesoGr / consumo)
// const sobra = pesoGr - (consumo * duracao)

const sobra = pesoGr % consumo // resposta do livro

console.log(`Duração: ${duracao} dias `)
console.log(`Sobra: ${sobra}gr`)