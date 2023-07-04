const path = require('path')
const caminhoArquivo = path.resolve(__dirname,  'lista_CPF.txt');
const CriarCPF = require('./modules/GeraCPF')
const escreve = require('./modules/escreva')
const listCPf = []


function geraLista(qtd){
    const cpf = new CriarCPF()
    for(let i = 0; i < qtd; i++){
        listCPf.push(cpf.geraNovoCpf())
    }
}


geraLista(100) // QUANTIDADE DE CPF Lista gerada 



let dados = JSON.stringify(listCPf)
dados = dados.split(',')
dados = dados.join('\n')
dados = dados.replaceAll("[","");
dados = dados.replaceAll("]","");

escreve(caminhoArquivo, dados)
