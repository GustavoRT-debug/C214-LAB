# Gerenciador de Tarefas

O Gerenciador de Tarefas é um programa que permite aos usuários adicionar, atualizar o status, excluir e listar tarefas. Ele oferece uma maneira simples de organizar suas tarefas diárias.

## Como usar

1. **Execução do programa:**

   Para iniciar o programa, basta executar o arquivo JavaScript no ambiente Node.js. Você pode fazer isso executando o seguinte comando no terminal:

   ```bash
   npm test
   Enter
   Opção inválida.

   Menu:
   1. Adicionar uma nova tarefa
   2. Atualizar o status de uma tarefa
   3. Excluir uma tarefa
   4. Listar tarefas
   5. Sair
   Digite o número da opção desejada:
   ```

   O programa será iniciado e o menu principal será exibido no terminal.

2. **Menu Principal:**

   O menu principal permite que você escolha entre várias opções:

   - **1. Adicionar uma nova tarefa:** Esta opção permite adicionar uma nova tarefa à lista. Você será solicitado a inserir um título e uma descrição para a tarefa.

   - **2. Atualizar o status de uma tarefa:** Use esta opção para atualizar o status de uma tarefa existente. Você precisará fornecer o número da tarefa que deseja atualizar e escolher entre as opções 'A fazer', 'Em andamento' e 'Concluída'.

   - **3. Excluir uma tarefa:** Essa opção permite excluir uma tarefa da lista. Você deve fornecer o número da tarefa que deseja excluir.

   - **4. Listar tarefas:** Ao selecionar esta opção, todas as tarefas existentes serão listadas com seus números correspondentes, títulos, descrições e status.

   - **5. Sair:** Para sair do programa, escolha esta opção.

3. **Exemplo de Uso:**

   Vamos dar um exemplo de como usar o programa:

   - Escolha a opção "1" para adicionar uma nova tarefa.
   - Digite um título, por exemplo, "Comprar mantimentos".
   - Digite uma descrição, por exemplo, "Nota, ovos, pão".
   - A tarefa será adicionada à lista.
   - Você pode listar as tarefas para vê-las na lista.
   - Escolha a opção "2" para atualizar o status da tarefa.
   - Digite o número da tarefa que deseja atualizar.
   - Escolha entre 'A fazer', 'Em andamento' e 'Concluída'.
   - O status da tarefa será atualizado.
   - Continue adicionando, atualizando ou excluindo tarefas conforme necessário.

4. **Testes Unitários:**

   O programa também inclui testes unitários para verificar se as funções estão funcionando corretamente. Os testes são executados usando a biblioteca Chai.
