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
var UmaPessoa_1;
function decoradorDeClasse(construtor) {
    console.log("CLASSE");
    console.log(construtor);
    console.log("###");
    return class extends construtor {
    };
}
function decoradorDeMetodo(prototipoDaClasse, nomeDoMetodo, descritorDePropriedade) {
    console.log("MÉTODO NORMAL");
    console.log(prototipoDaClasse);
    console.log(nomeDoMetodo);
    console.log(descritorDePropriedade);
    console.log("###");
    return {
        writable: true,
        enumerable: true,
        configurable: true,
    };
}
function decoradorDeMetodoEstatico(classConstructor, nomeDoMetodo, descritorDePropriedade) {
    console.log("MÉTODO ESTÁTICO");
    console.log(classConstructor);
    console.log(nomeDoMetodo);
    console.log(descritorDePropriedade);
    console.log("###");
    return {
        enumerable: true,
        configurable: true,
    };
}
function decoradorDeParametroDeMetodo(prototipoDaClasse, nomeDoMetodo, indiceDaPropriedade) {
    console.log("PARÂMETRO DE MÉTODO");
    console.log(prototipoDaClasse);
    console.log(nomeDoMetodo);
    console.log(indiceDaPropriedade);
    console.log("###");
}
function decoradorDeParametroDeMetodoEstatico(classConstructor, nomeDoMetodo, indiceDaPropriedade) {
    console.log("PARÂMETRO DE MÉTODO ESTÁTICO");
    console.log(classConstructor);
    console.log(nomeDoMetodo);
    console.log(indiceDaPropriedade);
    console.log("###");
}
function decoradorDePropriedade(prototipoDaClasse, nomePropriedade) {
    console.log("DECORADOR DE PROPRIEDADE");
    console.log(prototipoDaClasse);
    console.log(nomePropriedade);
    console.log("###");
    let valorPropriedade;
    return {
        enumerable: true,
        configurable: true,
        get: () => valorPropriedade,
        set: (valor) => {
            if (typeof valor === "string") {
                valorPropriedade = valor.split("").reverse().join("");
                return;
            }
            valorPropriedade = valor;
        },
    };
}
function decoradorDePropriedadeEstatica(classConstructor, nomePropriedade) {
    console.log("DECORADOR DE PROPRIEDADE ESTÁTICA");
    console.log(classConstructor);
    console.log(nomePropriedade);
    console.log("###");
    return {
        enumerable: true,
        configurable: true,
    };
}
function decoradorDeGetterESetterNormal(prototipoDaClasse, nomePropriedade, descritorDePropriedade) {
    console.log("GETTER/SETTER normal");
    console.log(prototipoDaClasse);
    console.log(nomePropriedade);
    console.log(descritorDePropriedade);
    console.log("###");
    return {
        enumerable: true,
        configurable: true,
    };
}
function decoradorDeGetterESetterEstatico(classConstructor, nomePropriedade, descritorDePropriedade) {
    console.log("GETTER/SETTER estático");
    console.log(classConstructor);
    console.log(nomePropriedade);
    console.log(descritorDePropriedade);
    console.log("###");
    return {
        enumerable: true,
        configurable: true,
    };
}
let UmaPessoa = class UmaPessoa {
    static { UmaPessoa_1 = this; }
    nome;
    sobrenome;
    idade;
    static propriedadeEstatica = "VALOR PROPRIEDADE ESTÁTICA";
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    metodo(msg) {
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }
    static metodoEstatico(msg) {
        return UmaPessoa_1.propriedadeEstatica + " - " + msg;
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
    static get staticPropertyGetterSetter() {
        return UmaPessoa_1.propriedadeEstatica;
    }
    static set staticPropertyGetterSetter(value) {
        UmaPessoa_1.propriedadeEstatica = value;
    }
};
__decorate([
    decoradorDePropriedade,
    __metadata("design:type", String)
], UmaPessoa.prototype, "nome", void 0);
__decorate([
    decoradorDeMetodo,
    __param(0, decoradorDeParametroDeMetodo),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], UmaPessoa.prototype, "metodo", null);
__decorate([
    decoradorDeGetterESetterNormal,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], UmaPessoa.prototype, "nomeCompleto", null);
__decorate([
    decoradorDePropriedadeEstatica,
    __metadata("design:type", Object)
], UmaPessoa, "propriedadeEstatica", void 0);
__decorate([
    decoradorDeMetodoEstatico,
    __param(0, decoradorDeParametroDeMetodoEstatico),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], UmaPessoa, "metodoEstatico", null);
__decorate([
    decoradorDeGetterESetterEstatico,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], UmaPessoa, "staticPropertyGetterSetter", null);
UmaPessoa = UmaPessoa_1 = __decorate([
    decoradorDeClasse,
    __metadata("design:paramtypes", [String, String, Number])
], UmaPessoa);
const pessoa = new UmaPessoa("Allan", "Quiterio", 20);
pessoa.nomeCompleto = "Allan Quiterio dos Santos";
const metodo = pessoa.metodo("Hello World!");
const metodoEstatico = UmaPessoa.metodoEstatico("Hello World!");
console.log(pessoa);
console.log(metodo);
console.log(metodoEstatico);
console.log(UmaPessoa.propriedadeEstatica);
