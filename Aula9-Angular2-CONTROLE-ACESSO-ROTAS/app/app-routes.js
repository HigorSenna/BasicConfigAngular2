"use strict";
//arquivo responsavel por agrupar todos os arquivos de rotas que eu tenho
var router_1 = require('@angular/router');
var alunos_routes_1 = require('./components/alunos/alunos-routes');
var login_routes_1 = require('./components/autenticacao/login-routes');
var login_routes_2 = require('./components/autenticacao/login-routes');
exports.routes = alunos_routes_1.AlunosRoutes.concat(login_routes_1.LoginRoutes);
//APP_ROUTER_PROVIDERS contem todas as rotas
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    login_routes_2.AUTH_PROVIDERS
]; //faz o funcionamento das rtotas funcionar
//# sourceMappingURL=app-routes.js.map