

module.exports = class ValidaCPF {
    constructor(cpf){
        this.cpf = cpf
    }

    get cpfLimpo(){
        if(this.cpf === undefined) return false;
        if(typeof this.cpf !== 'string') return false;

        return this.cpf.replace(/\D+/g, '');
    }

    cpfParcial(){
        if(this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo)return false
        if(this.cpfLimpo.length !== 11) return false;
        return this.cpfLimpo.slice(0, -2)
    }

   static criaDigito(cpfParcial){
        let cpfArray = Array.from(cpfParcial);
        let regrecivo = cpfArray.length + 1;

        let digito = cpfArray.reduce((ac, val)=>{
            ac += val * regrecivo;
            regrecivo --

            return ac
        }, 0)

        digito = 11 - (digito % 11)

        return digito < 9 ? digito : 0
    }

    validaCPF(){
       const digito1 = this.criaDigito(this.cpfParcial());
       const digito2 = this.criaDigito(this.cpfParcial() + digito1);

       const novoCPF = this.cpfParcial() + digito1 + digito2;


       if(novoCPF === this.cpfLimpo) return true
       return false

    }
}