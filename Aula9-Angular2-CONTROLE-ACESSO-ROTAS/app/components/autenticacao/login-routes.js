"use strict";
var login_component_1 = require('./login-component');
var logout_component_1 = require('./logout-component');
var login_guard_1 = require('../../login-guard');
var login_service_1 = require('../../services/login-service');
exports.LoginRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent }
];
exports.AUTH_PROVIDERS = [login_guard_1.LoginGuard, login_service_1.LoginService]; //criando route directives, ou seja, criamos uma contante visivel no sistema todo
//# sourceMappingURL=login-routes.js.map