import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
/*Observalbe, na funcionalidade básica,
faz a mesma coisa que o Promises(requisicao HTTP),
porém, Obervable possui mais recursos
como: configuracoes de tentativas de requisicao,
configuracao de delay para requisicoes
(util para autocompletes de campos de texto), etc.*/

@Injectable()
export class HttpUtilService {

	private API_URL: string = 'http://localhost:3000/api/';

	url(path: string) {
		return this.API_URL + path;
	}

	headers() {
		let headersParams = { 'Content-Type': 'application/json' };
		if (localStorage['token']) { //token nao expira quando fecha o navegador
			headersParams['Authorization'] = localStorage['token'];
		}
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
    	return options;
	}

	extrairDados(response: Response) {
    	let data = response.json();
    	return data || {};
  	}

  	processarErros(erro: any) {
	    return Observable.throw('Erro acessando servidor remoto.');
	}
}