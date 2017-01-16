import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app-routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { HttpUtilService } from './services/http-util-service';

//as importacoes aqui são vistas na aplicação inteira
bootstrap(AppComponent, [
	APP_ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	HttpUtilService
])
.catch(err => console.error(err));