function decoratorMethod() {
  // Recurso de decorator por método é algo experimental, não está 100% para uso
  function decoradorMetodo(
    classProtoype: any,
    nomeMetodo: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    console.log(classProtoype);
    console.log(nomeMetodo);
    console.log(descriptor);
    return {
      // Nesse caso, o ts não consegue enxergar que esse recurso não pode ser sobrescrito, por isso lá embaixo ele deixa utilizar, porém há um erro de runtime
      writable: false,
      enumerable: false,
      configurable: false,

      //Nesse caso, ele está acessando o método em si e fazendo uma alteração: metodo
      value: function (...args: string[]) {
        return args[0].toUpperCase();
      },
    };
  }

  class Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
    }

    @decoradorMetodo
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
  // pessoa.metodo = () => "Hello Hello"; //Erro => Pois definimos que esse método não pode ser sobrescrito
  const metodo = pessoa.metodo("Hello World");
  console.log(metodo);
}

decoratorMethod();
