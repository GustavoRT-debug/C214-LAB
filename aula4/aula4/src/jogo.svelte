<script>
  import Jogador from "./Jogador.svelte";
  import { Motion, useAnimation } from "svelte-motion";

  let showMessage = false;
  const controls = useAnimation();

  function marcaGol() {
    console.log("Marcou 1 GOL");
    showMessage = true;

    // Configura a animação
    controls.start({
      opacity: 1,
      y: 0,
      duration: 500, // Duração da animação em milissegundos
      easing: (t) => t * (2 - t), // Easing personalizado para uma animação de mola
    });

    // Aguarda um período de tempo antes de esconder a mensagem
    setTimeout(() => {
      showMessage = false;
      controls.start({ opacity: 0, y: -20 });
    }, 2000); // 2 segundos
  }
</script>

<main>
  <h1>MARCADOR DE GOLS</h1>
  <Jogador acao={marcaGol} />
</main>

<!-- svelte-ignore missing-declaration -->
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
