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
var LoginService = (function () {
    function LoginService(http, httpUtil) {
        this.http = http;
        this.httpUtil = httpUtil;
        this.loginUrl = "usuario/logar";
    }
    LoginService.prototype.logar = function (usuario, senha) {
        var params = JSON.stringify({ "username": usuario, "password": senha }); //convertendo objeto para json
        var urlLogin = this.httpUtil.url(this.loginUrl);
        return this.http.post(urlLogin, params, this.httpUtil.headers())
            .map(this.httpUtil.extrairDados)
            .catch(this.httpUtil.processarErros);
        /*
        UTILIZANDO DA FORMA PROMISE
        return this.http.post(urlLogin,params,this.httpUtil.headers()).toPromise()
                                                                     .then(this.httpUtil.extrairDados)
                                                                     .catch(this.httpUtil.processarErros);*/
    };
    LoginService.prototype.sair = function () {
    };
    LoginService.prototype.logado = function () {
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_util_service_1.HttpUtilService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login-service.js.map