const prompt = require("prompt-sync")()    // adiciona o pacote ao programa

const salario = Number(prompt('Salário R$: '));
const tempoTrabalho = Number(prompt('Tempo trabalhado:'));

const quadrienos =  Math.floor(tempoTrabalho / 4);
const acrescimo = salario * quadrienos / 100;

console.log(`Quadriênos: ${quadrienos}`);
console.log(`Salário com acréscimo R$${(salario + acrescimo).toFixed(2)}`);