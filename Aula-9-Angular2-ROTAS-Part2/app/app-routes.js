"use strict";
//arquivo responsavel por agrupar todos os arquivos de rotas que eu tenho
var router_1 = require('@angular/router');
var alunos_routes_1 = require('./components/alunos/alunos-routes');
exports.routes = alunos_routes_1.AlunosRoutes.slice();
//APP_ROUTER_PROVIDERS contem todas as rotas
exports.APP_ROUTER_PROVIDERS = [router_1.provideRouter(exports.routes)]; //faz o funcionamento das rtotas funcionar
//# sourceMappingURL=app-routes.js.map