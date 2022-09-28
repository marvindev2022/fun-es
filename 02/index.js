let carro = {
  ligado: false,
  velocidade: 0,
  ligar: function () {
    if (carro.ligado === true) {
      return `Este carro já está ligado\nCarro ligado. velocidade: ${carro.velocidade}`;
    } else {
      return `ligado:${(carro["ligado"] = true)} velocidade:${
        carro.velocidade
      }`;
    }
  },
  desligar: function () {
    if (carro.ligado === false) {
      return "Este carro já está desligado.";
    } else {
      return `ligado:${(carro["ligado"] = false)} velocidade:${(carro[
        "velocidade"
      ] = 0)}`;
    }
  },
  acelerar: function () {
    if (carro.ligado === true) {
      return `Sua velocidade atual é  ${
        carro.velocidade
      } Km/h Aumentar Velocidade para ${(carro["velocidade"] += 10)} Km/h`;
    } else {
      return "Não é possível acelerar um carro desligado.";
    }
  },
  desacelerar: function () {
    if (carro.ligado === true) {
      return `Sua velocidade atual é  ${
        carro.velocidade
      } Km/h reduzir velocidade para ${(carro["velocidade"] -= 10)} Km/h`;
    } else {
      return "Não é possível desacelerar um carro desligado.";
    }
  },
};
console.log(carro.desligar(carro));
console.log(carro.ligar(carro));
console.log(carro.ligar(carro));
console.log(carro.acelerar(carro));
console.log(carro.acelerar(carro));
console.log(carro.desacelerar(carro));
console.log(carro.desacelerar(carro));
console.log(carro.desligar(carro));
console.log(carro.acelerar(carro));
console.log(carro.desacelerar(carro));
