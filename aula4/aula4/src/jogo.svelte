<script>
  import Jogador from "./Jogador.svelte";
  import { Motion, useAnimation, transition } from "svelte-motion"; // Importe a função "transition" da biblioteca "svelte-motion"

  let showMessage = false;
  const controls = useAnimation();

  function marcaGol() {
    console.log("Marcou 1 GOL");
    showMessage = true;

    // Use a função "transition" para configurar a transição
    controls.start({
      opacity: 1,
      y: 0,
      transition: transition, // Adicione a transição aqui
    });

    // Defina um tempo limite para esconder a mensagem após um período de tempo
    setTimeout(() => {
      showMessage = false;
      controls.start({ opacity: 0, y: -20 });
    }, 2000); // 2 segundos
  }
</script>

<main>
  <h1>Exibe a informação quando marca GOL</h1>
  <Jogador acao={marcaGol} />
</main>

<motion.div
  in:transition={{ duration: 0.5 }}
  out:transition={{ duration: 0.5 }}
  animate={controls}
  style="opacity: 0; transform: translateY(-20px);"
>
  {#if showMessage}
    <div class="message">GOL MARCADO!</div>
  {/if}
</motion.div>

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
</style>
