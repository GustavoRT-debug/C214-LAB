_Aplicativo simples de marcador de gols com animações em Svelte_

_Importações:_ Funcionalidades necessárias do Svelte incluindo onMount para lidar com eventos após a montagem do componente e tweened para criar animações suaves.

_Variáveis de Estado:_ "showMessage" é uma variável de estado que controla se uma mensagem de gol marcado deve ser exibida ou não.
"opacity" e y são variáveis de estado criadas usando "tweened", que serão usadas para controlar a animação de opacidade e posição vertical da mensagem.

_Configuração de Animação:_ "animationConfig" é um objeto que contém configurações para a animação

_Função marcaGol:_ Esta função é chamada quando o botão "Marcar GOL" é clicado.
Usando "await", a função então anima a opacidade e a posição da mensagem de "GOL MARCADO!" para torná-la visível e movê-la para cima.
Ela configura a variável showMessage para true, indicando que a mensagem deve ser exibida.

*Inicialização: *A função "onMount" é usada para inicializar as animações definindo "opacity" e y para seus valores iniciais quando o componente é montado no DOM.

Em resumo, este código cria um aplicativo simples de marcador de gols que exibe uma mensagem animada quando o botão é clicado.
