import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { Login } from '../../models/login';

@Component({
	selector: 'login',
	template: `
		<h1>Login</h1>
		<div class="well">
		<div class ="alert alert-danger" role="alert" *ngIf="msgErro" >
			{{msgErro}}
		</div>
		    <form role="form">
		        <div class="form-group">
		            <label class="control-label" for="usuario">Usuário</label>
		            <input type="text" class="form-control" name="usuario" 
		                id="usuario" [(ngModel)]="usuario">
		        </div>
		        <div class="form-group">
		            <label class="control-label" for="senha">Senha</label>
		            <input type="password" class="form-control" name="senha" 
		                id="senha" [(ngModel)]="senha">
		        </div>
		        <div class="form-group text-center">
		            <button class="btn btn-success" (click)="logar()">
		                Entrar
		            </button>
		        </div>
		    </form>
		</div>`,
	providers: [ LoginService ]
})
export class LoginComponent {

	private usuario: string;
	private senha: string;
	private msgErro : string;

	constructor(private router: Router, private loginService: LoginService) {
	}

	logar() {
		this.router.navigate(['/aluno-listar']);
		/*this.loginService.logar(this.usuario,this.senha).subscribe(
			loginSucesso => this.processarLogin(loginSucesso),
			error => this.msgErro = error
		);// subscrible é obrigatório para exibir notificacoes*/
	}

	processarLogin(login: Login) {
		localStorage['token'] = login.id;
	}
}