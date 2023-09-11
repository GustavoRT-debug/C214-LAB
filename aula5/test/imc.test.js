const { expect } = require('chai');
const { calcularIMC, determinarClassificacao } = require('../src/imc');

describe('Calculadora de IMC', () => {
  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });

  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('determinarClassificacao - Abaixo do Peso', () => {
    const IMC = 18.4; // "Abaixo do Peso"

    const interpretacao = determinarClassificacao(IMC);

    expect(interpretacao).to.equal('Abaixo do peso');
  });

  it('determinarClassificacao - Obesidade Grau II', () => {
    const IMC = 35.5; // "Obesidade Grau 2"

    const interpretacao = determinarClassificacao(IMC);

    expect(interpretacao).to.equal('Obesidade grau 2');
  });
}); 