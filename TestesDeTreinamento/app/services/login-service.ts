import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Login } from '../models/login';
import { HttpUtilService } from './http-util-service';


@Injectable()
export class LoginService {

  private loginUrl : string ="usuario/logar";

  constructor(private http: Http,private httpUtil: HttpUtilService){
  }

  logar(usuario:string, senha:string) : Observable<Login>{
    let params = JSON.stringify(
      {"username" : usuario, "password" : senha}); //convertendo objeto para json

    let urlLogin = this.httpUtil.url(this.loginUrl);

    return this.http.post(urlLogin,params,this.httpUtil.headers())
                                                              .map(this.httpUtil.extrairDados)
                                                              .catch(this.httpUtil.processarErros);

 /*
 UTILIZANDO DA FORMA PROMISE
 return this.http.post(urlLogin,params,this.httpUtil.headers()).toPromise()
                                                              .then(this.httpUtil.extrairDados)
                                                              .catch(this.httpUtil.processarErros);*/                                                              
	}

	sair() {
	}

	logado() {
	}
}