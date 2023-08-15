  //1
  class filme
  {
    constructor(titulo,ano,genero,duracao,assistindo,avaliacao){
          this.titulo=titulo;
          this.genero=genero;
          this.ano=ano;
          this.duracao=duracao;
          this.assistindo=assistindo;
          this.avaliacao=avaliacao;
      }
      sefoiAssistido() {
          this.assistindo = true;
      }

    AvaliarFilme(novaAvaliacao) {
      if (novaAvaliacao >= 0 && novaAvaliacao <= 10) {
        this.avaliacao = novaAvaliacao;
      } else {
        console.log('Erro:avaliação deve estar entre 0 e 10');
      }
    }
  }

    //2-a
    //Trasformar hr em min
    //2h × 60m = 120 min
    //120m + 26m = 146 min

    const detalhes=new filme('Harry Potter and the Deathly Hallows',2010,'Fantasia',146,false,0);
    console.log(detalhes);

    //2-b
    detalhes.sefoiAssistido();

    //2-c
    detalhes.AvaliarFilme(10);
    //Print
    console.log(detalhes);

    //3
    //2h × 60m = 120 min
    //120m + 58m = 146 min
    const senhorDosAneis = {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        ano: 2001,
        genero: "Fantasia",
        duracao:178,
        assistindo:false,
        avaliacao:8,
      };

    const RedWhiteRoyalBlue={
        titulo: "Red, White & Royal Blue",
        ano: 2023,
        genero: "Romance/Comédia",
        duracao:118,
        assistindo:true,
        avaliacao:7,
    };

    const KillCommand={
        titulo: "Kill Command",
        ano: 2016,
        genero: "Ficção científica/Ação",
        duracao:99,
        assistindo:true,
        avaliacao:10,
    };