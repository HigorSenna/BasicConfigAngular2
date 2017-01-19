import { Component } from '@angular/core';
import { Aluno } from '../.././models/aluno';
import { AlunoService } from '../.././services/aluno-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ModalUtilComponent } from '../utils/modal-util-component';

@Component({
	selector: 'aluno-listar',
	templateUrl: 'app/views/alunos/listar.html',
	providers: [ AlunoService ],
	directives: [ ROUTER_DIRECTIVES, ModalUtilComponent ]
})
export class AlunoListarComponent implements OnInit {

	private alunos: Aluno[];
	private idExcluir: number;
	private msgErro: string;
	private aluno : Aluno;
	private alunosTeste: Aluno[];

	constructor(private alunoService: AlunoService) {
	}

	listarTodos() {
		this.alunoService.listarTodos().subscribe(
			alunos => this.alunos = alunos,// o angular seta sozinho os atributos da classe de acordo com o retorno do webservice
			erro => this.msgErro = erro
		);	
	}
/*
PASSANDO MAIS DE UM METODO PARA EXECUTAR QUANDO RETORNAR DO SERVICO
	istarTodos() {
		this.alunoService.listarTodos().subscribe(
			alunos =>{ metodo1(),metodo2(),this.alunos = alunos},// o angular seta sozinho os atributos da classe de acordo com o retorno do webservice
			erro => this.msgErro = erro
		);	
	}
*/
	ngOnInit() {
		this.listarTodos();
	}

	excluir(id: number) {
 	}

 	onExcluir() {
 	} 
}