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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
/*Observalbe, na funcionalidade básica,
faz a mesma coisa que o Promises(requisicao HTTP),
porém, Obervable possui mais recursos
como: configuracoes de tentativas de requisicao,
configuracao de delay para requisicoes
(util para autocompletes de campos de texto), etc.*/
var HttpUtilService = (function () {
    function HttpUtilService() {
        this.API_URL = 'http://192.168.1.103:8080/ReceitaMedica-web/';
    }
    HttpUtilService.prototype.url = function (path) {
        return this.API_URL + path;
    };
    HttpUtilService.prototype.headers = function () {
        var headersParams = { 'Content-Type': 'application/json' };
        /*if (localStorage['token']) {//token nao expira quando fecha o navegador
          headersParams['Authorization'] = localStorage['token'];
        }*/
        var headers = new http_1.Headers(headersParams);
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    HttpUtilService.prototype.extrairDados = function (response) {
        var retornoWS = response.json(); // let = variavel local
        return retornoWS || {}; //caso nao retorne nada do webservice ou dê erro, retorna um objeto vazio {}
    };
    HttpUtilService.prototype.processarErros = function (erro) {
        return Observable_1.Observable.throw('Erro acessando servidor remoto.');
    };
    HttpUtilService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HttpUtilService);
    return HttpUtilService;
}());
exports.HttpUtilService = HttpUtilService;
//# sourceMappingURL=http-util-service.js.map