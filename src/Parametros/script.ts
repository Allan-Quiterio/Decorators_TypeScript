function parametros() {
  function inverteNomeECor(param1: string, param2: string) {
    // Closure => Através do Closure, é possível manipular agora os parâmetros recebidos através do decorator

    return function <T extends new (...args: any[]) => any>(target: T) {
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

  @inverteNomeECor("Valor1", "Valor2")
  class Animal {
    constructor(public nome: string, public cor: string) {}
  }

  const animal = new Animal("Allan", "verde");
  console.log(animal);
}

parametros();
