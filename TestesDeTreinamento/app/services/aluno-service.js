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
var http_util_service_1 = require('./http-util-service');
var AlunoService = (function () {
    function AlunoService(http, httpUtil) {
        this.http = http;
        this.httpUtil = httpUtil;
        this.url = "ServicoMedico/medico/medicos";
    }
    AlunoService.prototype.listarTodos = function () {
        return this.http.get(this.httpUtil.url(this.url), this.httpUtil.headers())
            .map(this.httpUtil.extrairDados)
            .catch(this.httpUtil.processarErros);
    };
    AlunoService.prototype.cadastrar = function (aluno) {
    };
    AlunoService.prototype.atualizar = function (aluno) {
    };
    AlunoService.prototype.excluir = function (id) {
    };
    AlunoService.prototype.buscarPorId = function (id) {
    };
    AlunoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_util_service_1.HttpUtilService])
    ], AlunoService);
    return AlunoService;
}());
exports.AlunoService = AlunoService;
//# sourceMappingURL=aluno-service.js.map