//arquivo responsavel por agrupar todos os arquivos de rotas que eu tenho
import { provideRouter, RouterConfig } from '@angular/router'; 
import { AlunosRoutes } from './components/alunos/alunos-routes';
import { LoginRoutes } from './components/autenticacao/login-routes';
import { AUTH_PROVIDERS } from './components/autenticacao/login-routes';
export const routes: RouterConfig = [
  ...AlunosRoutes// os 3 pontos significam uma concatenacao de arrays
  //caso eu tivesse mais arquivos de rotas como por ex ClientesRoutes
  //a configutação ficaria: ...AlunosRoutes,...ClientesRoutes
  ,...LoginRoutes
]; 

//APP_ROUTER_PROVIDERS contem todas as rotas
export const APP_ROUTER_PROVIDERS = [ 
  provideRouter(routes) ,
  AUTH_PROVIDERS
]; //faz o funcionamento das rtotas funcionar