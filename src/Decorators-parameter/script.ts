function decoratorParameter() {
  // Nesse caso, o retorno é omitido, só é possível verificar as informações do parâmetro
  // Ele também é criado quando a classe é criada
  function decoradorParametro(
    classProtoype: any,
    nomeMetodo: string | symbol | undefined,
    index: number
  ): any {
    console.log(classProtoype);
    console.log(nomeMetodo);
    console.log(index);
    return "qualquer coisa"; // Nesse caso não vai funcionar, pois é retorno é omitido
  }

  class Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(
      @decoradorParametro nome: string,
      @decoradorParametro sobrenome: string,
      @decoradorParametro idade: number
    ) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
    }

    metodo(@decoradorParametro msg: string) {
      return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    get nomeCompleto() {
      return this.nome + " " + this.sobrenome;
    }

    set nomeCompleto(valor: string) {
      const palavras = valor.split(/\s+/g);
      const primeiroNome = palavras.shift();
      if (!primeiroNome) return;
      this.nome = primeiroNome;
      this.sobrenome = palavras.join(" ");
    }
  }

  const pessoa = new Pessoa("Allan", "Quiterio", 20);
  const metodo = pessoa.metodo("Hello World");
  console.log(metodo);
}

decoratorParameter();
