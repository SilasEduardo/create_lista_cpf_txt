  const ValidaCPF = require('./ValidaCPF') 


 
module.exports = class CriarCPF{
    rand(min = 100000000, max = 999999999 ){
       
      return Math.floor(Math.random() * (max - min) + min)
    }
    formatado(cpf){
      return (
          cpf.slice(0, 3) + '.' +
          cpf.slice(3, 6) + '.' +
          cpf.slice(6, 9) + '-' +
          cpf.slice(9, 11) 
      );
  }

    geraNovoCpf(){
      const cpfSemDigito = this.rand()
      const digito1 = ValidaCPF.criaDigito(cpfSemDigito)
      const digito2 = ValidaCPF.criaDigito(cpfSemDigito)

      const novoCPF = cpfSemDigito + digito1 + digito2

      return novoCPF
  }
}
