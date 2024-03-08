function decoratorClass2() {
  @inverteNomeECor
  class Animal {
    constructor(public nome: string, public cor: string) {
      console.log("Sou a classe");
    }
  }

  function inverteNomeECor<T extends new (...args: any[]) => any>(target: T) {
    // O decorador é iniciado assim que a classe é criada, ou seja, ele vem antes da instanciação da classe.
    console.log("Sou o decorator e recebi", target);
    return class extends target {
      nome: string;
      cor: string;
      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string) {
        return valor.split("").reverse().join("");
      }
    };
  }

  const animal = new Animal("Allan", "verde");
  console.log(animal);
}

decoratorClass2();
