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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function decoratorParameter() {
    function decoradorParametro(classProtoype, nomeMetodo, index) {
        console.log(classProtoype);
        console.log(nomeMetodo);
        console.log(index);
        return "qualquer coisa";
    }
    let Pessoa = class Pessoa {
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
    };
    __decorate([
        __param(0, decoradorParametro),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Pessoa.prototype, "metodo", null);
    Pessoa = __decorate([
        __param(0, decoradorParametro),
        __param(1, decoradorParametro),
        __param(2, decoradorParametro),
        __metadata("design:paramtypes", [String, String, Number])
    ], Pessoa);
    const pessoa = new Pessoa("Allan", "Quiterio", 20);
    const metodo = pessoa.metodo("Hello World");
    console.log(metodo);
}
decoratorParameter();
