function composicao() {
  interface Constructor {
    new (...args: any[]): any;
  }

  function inverteNomeECor(param1: string, param2: string) {
    return function <T extends Constructor>(target: T) {
      console.log("Sou o decorador e recebi: ", target);
      return class extends target {
        nome: string;
        cor: string;
        constructor(...args: any[]) {
          super(...args);
          this.nome = this.inverte(args[0]);
          this.cor = this.inverte(args[1]);
        }

        inverte(valor: string) {
          return valor.split("").reverse().join("") + ` ${param1} ${param2}`;
        }
      };
    };
  }

  function outroDecorator(param1: string) {
    return function (target: Constructor) {
      console.log("Sou o outro decorator: " + param1);
      return target;
    };
  }

  @outroDecorator("Um novo parâmetro")
  @inverteNomeECor("Valor1", "Valor2")
  class Animal {
    constructor(public nome: string, public cor: string) {
      console.log("Sou a classe");
    }
  }

  const animal = new Animal("Allan", "verde");
  console.log(animal);
}

composicao();
