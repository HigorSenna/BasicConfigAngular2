import {Component} from 'angular2/core';
import {Aluno} from './models/aluno';
import {AlunoService} from './service/aluno-service';
import {OnInit} from 'angular2/core';

@Component({
  selector: 'aluno',
  templateUrl: 'app/views/aluno.html',
  providers:[AlunoService]
})

export class AlunoComponent implements OnInit{

  private idDefault = -1;
  private alunos : Aluno[];
  private aluno : Aluno;
  private idEditar : number;

  constructor(private alunoService: AlunoService){ //injeta o service automaricamente ao executar o component

  }
  ngOnInit(){
    this.aluno = new Aluno;
    this.idEditar = this.idDefault;
    this.alunos = this.alunoService.listarTodos();
  }

  cadastrar(){
    this.alunoService.cadastrar(this.aluno)
    this.aluno = new Aluno('','');
  }

  editar(id: number){
    this.idEditar = id;
    this.aluno = new Aluno(this.alunos[id].nome,this.alunos[id].email);   
  }

  atualizar(){
    this.alunoService.atualizar(this.idEditar,this.aluno);
    this.aluno = new Aluno('','');
    this.idEditar = this.idDefault;
  }

  excluir(id: number){
    this.alunoService.excluir(id);
    this.idEditar = this.idDefault;
  }
}
