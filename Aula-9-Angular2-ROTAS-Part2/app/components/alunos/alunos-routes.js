"use strict";
var aluno_listar_component_1 = require('./aluno-listar-component');
var aluno_cadastrar_component_1 = require('./aluno-cadastrar-component');
var aluno_editar_component_1 = require('./aluno-editar-component');
var aluno_visualizar_component_1 = require('./aluno-visualizar-component');
//EXPORT CONST, O ANGULAR CRIA COMO SE FOSSE UMA 
//VARIAVEL GLOBAL QUE FICA ACESSIVEL EM OUTROS LUGARES
exports.AlunosRoutes = [
    { path: 'aluno-listar', component: aluno_listar_component_1.AlunoListarComponent },
    { path: 'aluno-cadastrar', component: aluno_cadastrar_component_1.AlunoCadastrarComponent },
    { path: 'aluno-editar/:id', component: aluno_editar_component_1.AlunoEditarComponent },
    { path: 'aluno-visualizar/:id', component: aluno_visualizar_component_1.AlunoVisualizarComponent },
    { path: '', redirectTo: '/aluno-listar', terminal: true } //caso tente acessar um path vazio, 
];
//# sourceMappingURL=alunos-routes.js.map