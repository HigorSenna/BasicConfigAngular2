import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpUtilService } from './http-util-service';

@Injectable()
export class AlunoService {

	private url: string = "ServicoMedico/medico/medicos";
	constructor(private http: Http,private httpUtil : HttpUtilService){
	}


	listarTodos()  : Observable <Aluno[]>{
		return this.http.get(this.httpUtil.url(this.url),this.httpUtil.headers())
																															.map(this.httpUtil.extrairDados)
                                                              .catch(this.httpUtil.processarErros);
	}

	cadastrar(aluno: Aluno) {
	}

	atualizar(aluno: Aluno) {
	}

	excluir(id: number) {
	}

	buscarPorId(id: number) {
	}
}