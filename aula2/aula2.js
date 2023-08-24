const prompt = require('prompt-sync')();
class Filme {
  constructor(titulo, ano, genero, duracao, assistido, avaliacao) {
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.duracao = duracao;
    this.assistido = assistido;
    this.avaliacao = avaliacao;
  }
  
}
class ListaFilmes 
{
  constructor() 
  {
    this.filmes = [];
  }

  adicionarFilme(filme) {
    this.filmes.push(filme);
  }

  listarFilmes() {
    return this.filmes;
  }

  buscarFilme(titulo) {
    return this.filmes.find(filme =>filme.titulo === titulo);
  }

  Assistido(titulo) {
    const filme = this.buscarFilme(titulo);
    if (filme) {
      filme.assistido = true;
    }
  }

  Avaliacao(titulo, avaliacao) {
    const filme = this.buscarFilme(titulo);
    if (filme>=0 && filme <=10) {
      filme.avaliacao = avaliacao;
    }else{
      console.log('Erro: Avaliação deve estar entre 0 e 10');
    }
  }
}

function exibirMenu(listaDeFilmes) {
  console.log('\n-----Menu------');
  console.log('1- Adicionar um novo filme');
  console.log('2- Marcar um filme como assistido');
  console.log('3- Avaliar um filme');
  console.log('4- Exibir a lista de filmes');
  console.log('5- Sair');

  var op =prompt('Digite o número da opção desejada: ');

  switch (op) {
    case '1':
      const titulo = prompt('Digite o título do filme:');
      const ano = prompt('Digite o ano do filme:');
      const genero = prompt('Digite o gênero do filme:');
      const duracao = prompt('Digite a duração do filme:');
      const novoFilme = new Filme(titulo, ano, genero, duracao);
      listaDeFilmes.adicionarFilme(novoFilme);
      console.log('Filme adicionado');
      break;

    case '2':
      const tituloAssistido = prompt('Digite o título do filme que você assistiu:');
      listaDeFilmes.Assistido(tituloAssistido); 
      console.log('Marcado como assistido!');
      break;

    case '3':
      const tituloAvaliar = prompt('Digite o título do filme que você quer avaliar:');
      const avaliacao = prompt('Digite a avaliação (de 1 a 5) do filme:');
      listaDeFilmes.Avaliacao(tituloAvaliar, avaliacao); 
      console.log('Avaliado com sucesso!');
      break;

    case '4':
      const filmes = listaDeFilmes.listarFilmes();
      console.log('Lista de Filmes:');
      
      if (filmes.length === 0) {
        console.log('Nenhum filme na lista.');
      } else {
        filmes.forEach(filme => {
          console.log(`Título: ${filme.titulo}, 
          Ano: ${filme.ano}, 
          Gênero: ${filme.genero}, 
          Duração: ${filme.duracao}, 
          Assistido: ${filme.assistido}, 
          Avaliação: ${filme.avaliacao}`);
        });
      }
      break;

    case '5':
      console.log('Saindo...');
      return;
    default:
      console.log('Opção inválida!');
  }

  exibirMenu(listaDeFilmes);
}

const listaDeFilmes = new ListaFilmes();

exibirMenu(listaDeFilmes);