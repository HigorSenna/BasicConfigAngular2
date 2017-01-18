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

  private API_URL: string = 'http://192.168.1.103:8080/ReceitaMedica-web/';

  url(path: string) {
    return this.API_URL + path;
  }

  headers() {
    let headersParams = { 'Content-Type': 'application/json' };
    /*if (localStorage['token']) {//token nao expira quando fecha o navegador
      headersParams['Authorization'] = localStorage['token'];
    }*/
    let headers = new Headers(headersParams);
    let options = new RequestOptions({ headers: headers });

    return options;
  }

  extrairDados(response: Response) {
      let retornoWS = response.json();// let = variavel local
      return retornoWS || {}; //caso nao retorne nada do webservice ou dê erro, retorna um objeto vazio {}
    }

    processarErros(erro: any) {      
      return Observable.throw('Erro acessando servidor remoto.');
  }
}