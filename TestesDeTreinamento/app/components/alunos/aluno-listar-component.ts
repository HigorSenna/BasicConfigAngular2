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
			alunos => this.alunos = alunos,
			erro => this.msgErro = erro
		);
		console.log(this.alunos)
		/*if(this.alunos != null){
			for(let al of this.alunos){
				this.aluno = new Aluno();
				this.aluno.nome = al['nomeMedico'];
				this.alunosTeste.push(this.aluno);
			}	

			this.alunos = this.alunosTeste;
		}*/
		

		//this.alunos = this.alunosTeste;
	}

	ngOnInit() {
		this.listarTodos();
	}

	excluir(id: number) {
 	}

 	onExcluir() {
 	} 
}