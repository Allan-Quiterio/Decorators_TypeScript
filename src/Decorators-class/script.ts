function decoratorClass() {
  @decorator
  class Animal {
    constructor(public nome: string, public cor: string) {}
  }

  //Nesse caso a função se passa como um decorator, ela finge ser uma classe, na verdade ela é a classe, porém é possível realizar algum tipo de ação que queira ser feita.
  function decorator<T extends new (...args: any[]) => any>(target: T) {
    // Fazendo a extensão de uma classe anônima da classe principal para poder manipulá-la
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

decoratorClass();
