        function calcularIMC(peso, altura) {
            if (altura === 0) {
            return 'NaN'; // Retorna "NaN" se a altura for igual a zero
            }
        
            const alturaMetros = altura / 100; // Converte altura de centímetros para metros
            return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
        }

        function determinarClassificacao(imc) {
            if (imc < 18.5) {
            return 'Abaixo do peso';
            } else if (imc >= 18.5 && imc <= 24.9) {
            return  'Peso ideal';
            } else if (imc >= 25 && imc <= 29.9) {
                return 'Levemente acima do peso';
            } else if (imc >= 30 && imc <= 34.9) {
                return 'Obesidade grau 1';
            } else if (imc >= 35 && imc <= 39.9) {
                return 'Obesidade grau 2';
            } else {
                return 'Obesidade grau 3';
            }
        }
        module.exports = { calcularIMC,determinarClassificacao}; 