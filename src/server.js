const express = require('express');
const { idade } = require('./calcularIdade')
const server = express();

const todaysDate = new Date()
const currentYear = todaysDate.getFullYear()

console.log("idade: " + idade(currentYear, '1997'))

console.log("Par: ")

function isEven(value) {
    return value % 2 == 0;
}

stack1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

var filtered = stack1.filter(isEven)
console.log(filtered)

function isBig(value) {
    return value >= 9;
}

programador = {
    nome: 'Fulano da Silva',
    stack2: [
        {
            nome: 'Javascript',
            note: 8
        },
        {
            nome: 'Java',
            note: 8
        },

        {
            nome: 'Node',
            note: 10
        },
        {
            nome: 'SQL',
            note: 9
        }
    ]
}

for (var i = 0; i < programador.stack2.length;) {

    if (programador.stack2[i].note >= 9) {
        console.log("-> " + programador.stack2[i].note)
    }
    i++
}

server.listen(3333, () => {
})