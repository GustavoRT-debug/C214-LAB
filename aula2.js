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
    return this.filmes.find(filme => filme.titulo === titulo);
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
      console.log('Erro:Avaliação deve estar entre 0 e 10');
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

  
  const op= 'Digite o número do que você quer fazer:  ';
  console.log(op);

  switch (digite) {
    case '1':
      const titulo= 'Digite o título do filme: ';
      console.log(titulo);
      const ano= 'Digite o ano do filme: ';
      console.log(ano);
      const genero='Digite o gênero do filme em minitos: ';
      console.log(genero);
      const duracao='Digite a duração do filme: ';
      console.log(duracao);
      const novoFilme = new Filme(titulo, ano, genero, duracao);
      listaDeFilmes.adicionarFilme(novoFilme);
      console.log('Filme adicionado');
      break;

    case '2':
      const tituloAssistido='Digite o título do filme que você assistiu: ';
      console.log(tituloAssistido);
      listaDeFilmes.marcarAssistido(tituloAssistido);
      console.log('Marcado como assistido!');
      break;

    case '3':
      const tituloAvaliar='Digite o título do filme que você quer avaliar: ';
      console.log(tituloAvaliar);
      const avaliacao='Digite a avaliação (de 0 a 10) do filme: ';
      console.log(avaliacao);
      listaDeFilmes.atribuirAvaliacao(tituloAvaliar, avaliacao);
      console.log('Avaliação atribuída!');
      break;

    case '4':
      const filmes = listaDeFilmes.listarFilmes();
      console.log('Lista de Filmes:');
      //Estrutura de repetição forEach
      filmes.forEach(filme => console.log(`Título: ${filme.titulo}, 
      Ano: ${filme.ano}, 
      Gênero: ${filme.genero}, 
      Duração: ${filme.duracao}, 
      Assistido: ${filme.assistido},
      Avaliação: ${filme.avaliacao}`));
      break;

    case '5':
      console.log('Saindo...');
      return;
    default:
      console.log('Erro!');
  }

  exibirMenu(listaDeFilmes);
}

const listaDeFilmes = new ListaFilmes();

exibirMenu(listaDeFilmes);



    

    