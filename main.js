//////////////////////* Nullish Coalescing Operator *//////////////////////
const idade = 28;
const idade2 = 0;
const idade3 = 0;

console.log('Você possui ' + idade + ' anos.');
console.log('Sua idade é:' + (idade2 || ' Não informado')); // considera o zero como null
console.log('Sua idade é: ' + (idade3 ?? ' Não informado')); // olha apenas para valores não validos como null e undefined

//////////////////////* Objetos *//////////////////////
const user = {
    name: 'Elina',
    idade: 28,
    address: {
        street: 'Rua de pg',
        number: 1952,
        zip: {
            code: '84061000',
        },
        showFullAddress() {
            return 'ok';
        }
    },
};
console.log('name' in user); //true
console.log('nickname' in user); //false
console.log(Object.keys(user)); //retorna todas as chaves do objeto
console.log(Object.values(user)); //retorna todos os valores do objeto
console.log(JSON.stringify(Object.values(user))); //retorna todos os valores do objeto em json, retornando os valores dentro do objeto adress tb
console.log(Object.entries(user)); //retorna array com varios arrays dentro 0: chave / 1: valor

//////////////////////* Desestruturação *//////////////////////
const addressVariavel = user.address;
console.log(JSON.stringify(addressVariavel));

const { address, idade: age, nickname = 'Não tem' } = user;
console.log(JSON.stringify({address, age, nickname}));

function showAge (user){
    return user.idade;
}
console.log(showAge(user));


//////////////////////* Rest Operator *//////////////////////
//const { name, ...rest } = user;
//console.log(JSON.stringify({rest}));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const first = array[0];
const second = array[1];
console.log(JSON.stringify({first, second}));

const [firstD, , thirdD, ...restD] = array;
console.log(JSON.stringify({firstD, thirdD, restD}));


//////////////////////* Short Syntax *//////////////////////
const environment = 'teste';
const member = 'Elina';
const profile = 'admin';

const invite = {
    environment,
    member,
    profile,
};
console.log(JSON.stringify({invite}));

//////////////////////* Optional Chaining *//////////////////////

document.body.innerText = user.address 
    ? user.address.zip
        ? user.address.zip.code
        : 'Não informado'
    : 'Não informado'

console.log(user.address?.zip?.code ?? 'Não informado');
console.log(user.address?.showFullAddress?.());

const key = 'state';
console.log(user.address?.[key]);

//////////////////////* Métodos de Array | for() *//////////////////////

for (const i of array){
    console.log(+i);
}

//////////////////////* Métodos de Array | forEach() *//////////////////////

array.forEach(item => {
    console.log(+item);
})

//////////////////////* Métodos de Array | map() *//////////////////////
// ao invés de fazer
const novoArray = [];
array.forEach(item => {
    novoArray.push(item * 2);
})
console.log(novoArray);


// fazer
const arrayMap = array.map(item => {
    return item * 2;
})
console.log(arrayMap);

const divArray = array.map(item => {
    if(item % 2 === 0){
        return item * 10;
    }
    return item;
})
console.log(divArray);

//////////////////////* Métodos de Array | filter() *//////////////////////
const arrayFilter = array.filter(item => item % 2 === 0) //se a condição for true vai retornar
console.log(arrayFilter);

const arrayFilterMap = array
    .filter(item => item % 2 === 0) //se a condição for true vai retornar
    .map(item => item * 10) // depois que filtrar vai multiplar cada item do array por 10
console.log(arrayFilterMap);

//////////////////////* Métodos de Array | every() *//////////////////////
const arrayEvery = array.every(item => {
    return typeof item === 'number';  //se todos os itens do array forem do tipo number vai retornar true
});
console.log(arrayEvery);

const shortArrayEvery = array.every(item => typeof item === 'number');

//////////////////////* Métodos de Array | some() *//////////////////////
const arraySome = array.some(item => {
    return typeof item !== 'number'; //se pelo menos um dos itens do array não é  do tipo number vai retornar true
});
console.log(arraySome);

//////////////////////* Métodos de Array | find() e findIndex() *//////////////////////
const arrayFind = array.find(item => item % 2 === 0);
console.log(arrayFind);

const arrayFindIndex = array.findIndex(item => item % 2 === 0);
console.log(arrayFindIndex);

//////////////////////* Métodos de Array | reduce() *//////////////////////

const arrayReduce = array.reduce((acc, item) => {
    console.log(+acc, item);
    return acc + item;
}, 0)
console.log(arrayReduce);

//////////////////////* Template Literals *//////////////////////

const nome = 'Elina';

const messageI = 'Bem vinda, ' + nome; //usando interpolação de strings
console.log(messageI);

const message = `Bem vinda, ${nome ?? 'Visitante'}`; //usando template literals
console.log(message);

//////////////////////* Promises *//////////////////////
const promisesSoma = (a, b) => {
    return new Promise((resolve, reject) => { // resolve chamo para indicar que deu tudo certo /reject chamo para indicar que deu ruim
        setTimeout (() => {
            resolve(a + b);
        }, 0);
    });
}

promisesSoma(1, 3)
    .then (soma => {
        console.log(soma);
    }) // para mostrar a soma após 2 segundos
    .catch (err => {
        console.log(err);
    }) // para mostrar se acontecer um erro


fetch('https://api.github.com/users/elinatorresn')
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })

fetch('https://api.github.com/users/elinatorresn')
    .then(response => {
        response.text().then(body => {
            console.log(body);
        })
    })
    .catch(err => {
        console.log(err);
    })

fetch('https://api.github.com/users/elinatorresn')
    .then(response => {
        return response.json();
    })
    .then(body => {
        console.log(body);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log('finalizou then, catch, finally');
    })


// async e await 
async function buscaDadosGitHub() { //toda função do js que é usada com async automaticamente vira uma promise
    try{
        const response = await fetch('https://api.github.com/users/elinatorresn')
        const body = await response.json();
        console.log(body);

    } catch (err) {
        console.log(err);
    } finally{
        console.log('finalizou async');
    }
}

buscaDadosGitHub();


async function buscaDadosGitHub2() { //retornando somente o name
    try{
        const response = await fetch('https://api.github.com/users/elinatorresn')
        const body = await response.json();
        return body.name;
    } catch (err) {
        console.log(err);
    } finally{
        console.log('finalizou return name');
    }
}

buscaDadosGitHub2().then (name => {
    console.log(name);
});

//////////////////////* ES Modules *//////////////////////
// importações e exportações dentro do JS


import { sub } from "./lib/math"
import soma from "./lib/sum" // sum vira soma mas é ruim pra acompanhar

console.log(soma(2,6));
console.log(sub(2,1));

import * as math from "./lib/math"
console.log(math);

import {sub as subtracao } from "./lib/math"
console.log(subtracao(2,1));

import { PI } from "./lib/sum"
console.log(PI);