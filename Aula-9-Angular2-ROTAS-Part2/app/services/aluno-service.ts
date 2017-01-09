import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';

@Injectable()
export class AlunoService {

	listarTodos() {
		var alunos:string = sessionStorage['alunos'];//sessionStoragel = memoria do browser
		return alunos ? JSON.parse(alunos) : [];//caso a variavel alunos retorne algo, entao chama JSON.parse, caso contrario retonra vazio
		//JSON.Parse = pega o json e converte para objeto js.
	}

	cadastrar(aluno: Aluno) {
		var alunos:Aluno[] = this.listarTodos();
		alunos.push(aluno);
		sessionStorage['alunos'] = JSON.stringify(alunos); //JSON.stringify = pega o objeto js e transforma para JSON
	}

	atualizar(id: number, aluno: Aluno) {
		var alunos:Aluno[] = this.listarTodos();
		alunos[id].nome = aluno.nome;
		alunos[id].email = aluno.email;
		sessionStorage['alunos'] = JSON.stringify(alunos);
	}

	excluir(id: number) {
		var alunos:Aluno[] = this.listarTodos();
		alunos.splice(id, 1);
		sessionStorage['alunos'] = JSON.stringify(alunos);
	}

	buscarPorId(id: number) {
		var alunos:Aluno[] = this.listarTodos();
		return alunos[id];
	}
}