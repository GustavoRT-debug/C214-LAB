<script>
  // Variáveis de estado
  let peso = 0; // Peso do usuário
  let altura = 0; // Altura do usuário
  let imc = 0; // Índice de Massa Corporal

  let classificacao = ""; //Armazenar

  // Função para calcular o IMC
  function calcularIMC() {
    if (peso > 0 && altura > 0) {
      imc = (peso / Math.pow(altura, 2)).toFixed(2);
    } else {
      imc = 0;
    }
  }

  function determinarClassificacao() {
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = "Peso ideal";
    } else if (imc >= 25 && imc <= 29.9) {
      classificacao = "Levemente acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
      classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
      classificacao = "Obesidade grau 2";
    } else {
      classificacao = "Obesidade grau 3";
    }
    determinarDicasSaudaveis();
  }

  let dicasSaudaveis = "";

  function determinarDicasSaudaveis() {
    if (classificacao === "Abaixo do peso") {
      dicasSaudaveis =
        "Considere uma dieta balanceada e exercícios regulares para ganhar peso de maneira saudável.";
    } else if (classificacao === "Peso ideal") {
      dicasSaudaveis =
        "Continue mantendo um estilo de vida saudável com dieta equilibrada e atividade física regular.";
    } else if (classificacao === "Levemente acima do peso") {
      dicasSaudaveis =
        "Aumente a prática de exercícios e escolha opções alimentares mais saudáveis para manter seu peso.";
    } else if (classificacao === "Obesidade grau 1") {
      dicasSaudaveis =
        "Procure um profissional de saúde para orientações personalizadas sobre dieta e exercícios.";
    } else if (classificacao === "Obesidade grau 2") {
      dicasSaudaveis =
        "Busque ajuda médica para estabelecer um plano abrangente de saúde e bem-estar.";
    } else if (classificacao === "Obesidade grau 3") {
      dicasSaudaveis =
        "Procure o  Dr. 'now' do programa quilos mortais para lhe ajudar";
    } else {
      dicasSaudaveis = "";
    }
  }
</script>

<main>
  <h1>Calculadora de IMC</h1>
  <label>
    Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
  </label>
  <label>
    Altura (m): <input
      type="number"
      bind:value={altura}
      on:input={calcularIMC}
      on:input={determinarClassificacao}
      on:input={determinarDicasSaudaveis}
    />
  </label>
  {#if imc > 0}
    <p>Seu IMC é {imc}</p>
    <p>Classificação: {classificacao}</p>
    <p>Dica de uma saúde melhor: {dicasSaudaveis}</p>
  {/if}
</main>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
    padding: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.25rem;
  }
</style>
