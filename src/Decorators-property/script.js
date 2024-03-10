"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function decoratorProperty() {
    function decorator(classProtoype, nome) {
        let valorPropriedade;
        return {
            get: () => {
                valorPropriedade;
            },
            set: (valor) => {
                if (typeof valor === "string") {
                    valorPropriedade = valor.toUpperCase();
                    return;
                }
                valorPropriedade = valor;
            },
        };
    }
    class Pessoa {
        nome;
        sobrenome;
        idade;
        constructor(nome, sobrenome, idade) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.idade = idade;
        }
        metodo(msg) {
            return `${this.nome} ${this.sobrenome}: ${msg}`;
        }
        get nomeCompleto() {
            return this.nome + " " + this.sobrenome;
        }
        set nomeCompleto(valor) {
            const palavras = valor.split(/\s+/g);
            const primeiroNome = palavras.shift();
            if (!primeiroNome)
                return;
            this.nome = primeiroNome;
            this.sobrenome = palavras.join(" ");
        }
    }
    __decorate([
        decorator,
        __metadata("design:type", String)
    ], Pessoa.prototype, "nome", void 0);
    __decorate([
        decorator,
        __metadata("design:type", String)
    ], Pessoa.prototype, "sobrenome", void 0);
    __decorate([
        decorator,
        __metadata("design:type", Number)
    ], Pessoa.prototype, "idade", void 0);
    const pessoa = new Pessoa("Allan", "Quiterio", 20);
    const metodo = pessoa.metodo("Hello World");
    console.log(metodo);
}
decoratorProperty();
