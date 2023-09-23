const { expect } = require('chai');
const {
    adicionarTarefa,
    atualizarStatusTarefa,
    excluirTarefa,
    listarTarefas,
    tarefas,
} = require('../src/tarefas'); 

describe('Gerenciador de Tarefas', () => {
    beforeEach(() => {
        tarefas.length = 0; // Limpa a lista de tarefas antes de cada teste
    });

    it('Deve adicionar uma nova tarefa', () => {
        adicionarTarefa('Título da Tarefa', 'Descrição da Tarefa');
        expect(tarefas).to.have.lengthOf(1);
    });
    
    it('Deve atualizar o status de uma tarefa', () => {
        adicionarTarefa('Título da Tarefa', 'Descrição da Tarefa');
        
        // Primeira mudança: de 'A fazer' para 'Em andamento'
        atualizarStatusTarefa(0);
        expect(tarefas[0].status).to.equal('Em andamento');
    
        // Segunda mudança: de 'Em andamento' para 'Concluída'
        atualizarStatusTarefa(0);
        expect(tarefas[0].status).to.equal('Concluída');
    });
    
    it('Deve excluir uma tarefa', () => {
        adicionarTarefa();
        excluirTarefa(0);
        expect(tarefas).to.have.lengthOf(0);
    });

    it('Deve listar tarefas', () => {
        adicionarTarefa('Título da Tarefa', 'Descrição da Tarefa');
        expect(() => listarTarefas()).not.to.throw();
    });
    
});
