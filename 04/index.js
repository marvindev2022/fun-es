const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    let deposito = valor / 100;
    this.saldo += deposito;
    contaBancaria.historicos += `\nDeposito de R$${deposito},00\n`;
    console.log(
      `Deposito de R$${deposito},00 realizado para cliente: ${contaBancaria.nome}`
    );
  },
  sacar:function(valor){
    let saque=valor/100
 
if(this.saldo < saque){
  console.log(`Saldo insuficiente para o saque de: ${contaBancaria.nome}.`)
}else {  
  this.saldo-=saque
contaBancaria.historicos+=(`Saque de R$${valor/100},00\n`
)
console.log(
  `Saque de R$${valor / 100},00 realizado para o cliente: ${
    contaBancaria.nome
  }`
);
};
  },
  extrato:function(){
    
    console.log(`Extrato de ${contaBancaria.nome} - Saldo: R$ ${this.saldo},00 \nHistorico: ${this.historicos}`);
  }
};

contaBancaria.depositar(10000);
contaBancaria.sacar(50000)
contaBancaria.sacar(5000)
contaBancaria.extrato(contaBancaria)
