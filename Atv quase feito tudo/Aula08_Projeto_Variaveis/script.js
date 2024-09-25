//criando uma variável do tipo var

var nome = 'Adamastor'
console.log(nome)

if(nome==='Adamastor'){
    var escola='CESF'
    console.log(escola)
}

console.log(escola)

escola = 'Sagrada'
console.log(escola)

//variáveis do tipo var elas são acessiveis fora do escopo no qual foram criadas isso implica na possibilidade de reatribuirmos novo valor a elas                                                                                                                                                                               

//variáveis do tipo let

if(nome==='Adamastor'){
    let curso ='DS'
    
}
// console.log(curso)
curso ='culinaria'
//Cuidado não conseguimos acessar a let curso porque ela só existe no escopo em que foi criada alem de não poder consumir támbem não podemos sobreescrever a variavel reatribuindo-lhe outro valor ao tentarmos fazer isso estamos criando um esqueleto dentro do armario e induzindo nosso código a bugs
console.log(curso)

//variável do tipo const

const cargo = 'Estudante'
console.log(cargo)
//Tentar reatribuir valor a cargo
cargo="Estagiario"
console.log(cargo)