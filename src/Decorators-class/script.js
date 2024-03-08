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
function decoratorClass() {
    let Animal = class Animal {
        nome;
        cor;
        constructor(nome, cor) {
            this.nome = nome;
            this.cor = cor;
        }
    };
    Animal = __decorate([
        decorator,
        __metadata("design:paramtypes", [String, String])
    ], Animal);
    function decorator(target) {
        return class extends target {
            nome;
            cor;
            constructor(...args) {
                super(...args);
                this.nome = this.inverte(args[0]);
                this.cor = this.inverte(args[1]);
            }
            inverte(valor) {
                return valor.split("").reverse().join("");
            }
        };
    }
    const animal = new Animal("Allan", "verde");
    console.log(animal);
}
decoratorClass();
