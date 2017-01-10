import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

	logar() {
		sessionStorage['token'] = '123456';
	}

	sair() {
		delete sessionStorage['token'];
	}

	logado() {
		return sessionStorage['token'] === '123456'; /*sessionStorage = fecha o navegar, mata a sessao
                                                   localStorage = mesmo fechando o navegador, ainda mantem a sessão   
                                                */
	}
}