//Alt+shift+f indentar
const readline = require("readline");

const tarefas = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function adicionarTarefa(titulo, descricao) {
  tarefas.push({ titulo, descricao, status: "A fazer" });
  console.log("Tarefa adicionada com sucesso.");
  mostrarMenu();
}

function excluirTarefa(index) {
  if (index >= 0 && index < tarefas.length) {
    tarefas.splice(index, 1);
    console.log("Tarefa excluída com sucesso.");
  } else {
    console.log("Tarefa não encontrada.");
  }
  mostrarMenu();
}

function listarTarefas() {
  console.log("Lista de Tarefas:");
  tarefas.forEach((tarefa, index) => {
    console.log(
      `${index + 1}. Título: ${tarefa.titulo}, Descrição: ${
        tarefa.descricao
      }, Status: ${tarefa.status}`
    );
  });
  mostrarMenu();
}

function atualizarStatusTarefa(index) {
  if (index >= 0 && index < tarefas.length) {
    const tarefa = tarefas[index];
    if (tarefa.status === "A fazer") {
      tarefa.status = "Em andamento";
    } else if (tarefa.status === "Em andamento") {
      tarefa.status = "Concluída";
    } else {
      tarefa.status = "A fazer";
    }
    console.log("Status da tarefa atualizado com sucesso.");
  } else {
    console.log("Tarefa não encontrada.");
  }
  mostrarMenu();
}

function mostrarMenu() {
  console.log("\nMenu:");
  console.log("1. Adicionar uma nova tarefa");
  console.log("2. Atualizar o status de uma tarefa");
  console.log("3. Excluir uma tarefa");
  console.log("4. Listar tarefas");
  console.log("5. Sair");

  rl.question("Digite o número da opção desejada: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Digite o título da tarefa: ", (titulo) => {
          rl.question("Digite a descrição da tarefa: ", (descricao) => {
            adicionarTarefa(titulo, descricao);
          });
        });
        break;

      case "2":
        rl.question(
          "Digite o número da tarefa que deseja atualizar: ",
          (indexStr) => {
            const index = parseInt(indexStr) - 1;
            atualizarStatusTarefa(index);
          }
        );
        break;
      case "3":
        rl.question(
          "Digite o número da tarefa que deseja excluir: ",
          (indexStr) => {
            const index = parseInt(indexStr) - 1;
            excluirTarefa(index);
          }
        );
        break;

      case "4":
        listarTarefas();
        break;
      case "5":
        console.log("Saindo do programa.");
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        mostrarMenu();
        break;
    }
  });
}

console.log("Bem-vindo ao Gerenciador de Tarefas!");
mostrarMenu();
module.exports = {
  adicionarTarefa,
  atualizarStatusTarefa,
  excluirTarefa,
  listarTarefas,
  tarefas,
};
