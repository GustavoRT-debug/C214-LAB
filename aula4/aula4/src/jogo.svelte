<script>

  import { onMount } from "svelte"; //importação é usada para adicionar um bloco de código que será executado após o componente Svelte ser montado no DOM
  import { tweened } from "svelte/motion"; //importação está relacionada à funcionalidade de animação no Svelte

  let showMessage = false;

  //função tweened para criar animações de mola 
  const opacity = tweened(0);
  const y = tweened(-20);

  const animationConfig = {
    duration: 500, // Duração da animação
    easing: (t) => t * (2 - t),
  };

  async function marcaGol() {
    console.log("Marcou 1 GOL");
    showMessage = true;

    //"await" é uma palavra-chave usada em programação assíncrona para pausar
    await opacity.set(1, animationConfig);
    await y.set(0, animationConfig);

    // Aguardar um período de tempo antes de esconder a mensagem
    setTimeout(async () => {
      await opacity.set(0, animationConfig);
      await y.set(-20, animationConfig);
      showMessage = false;
    }, 2000); // 2 segundos
  }

  //"onMount" função especial em Svelte um framework de construção de interfaces de usuário
  onMount(() => {
    // Inicializa a animação
    opacity.set(0, { duration: 0 });
    y.set(-20, { duration: 0 });
  });
</script>

<main>
  <h1>Marcador de Gols</h1>
  <button on:click={marcaGol}>Marcar GOL</button>
</main>

<div
  style="opacity: {opacity}; transform: translateY({y}px);"
  class="message"
  class:show={showMessage}
>
  GOL MARCADO!
</div>

<style>
  .message {
    background-color: #4caf50;
    color: #fff;
    padding: 10px;
    text-align: center;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .show {
    opacity: 1;
    transform: translateY(0);
  }
</style>
