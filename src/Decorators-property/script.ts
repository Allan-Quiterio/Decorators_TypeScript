function decoratorProperty() {
  function decorator(classProtoype: any, nome: string | symbol): any {
    let valorPropriedade: any;
    return {
      // Além de ter acesso as propriedades de writable, configurable, enumerable é possível ter acesso ao get e set da propriedade
      get: () => {
        valorPropriedade;
      },
      set: (valor: any) => {
        if (typeof valor === "string") {
          valorPropriedade = valor.toUpperCase();
          return;
        }
        valorPropriedade = valor;
      },
    };
  }

  class Pessoa {
    @decorator
    nome: string;
    @decorator
    sobrenome: string;
    @decorator
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
    }

    metodo(msg: string) {
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

decoratorProperty();
