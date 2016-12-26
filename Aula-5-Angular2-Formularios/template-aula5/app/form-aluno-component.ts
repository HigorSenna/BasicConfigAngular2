import {Component} from 'angular2/core';
import {Aluno} from './models/aluno';
import {Curso} from './models/curso';


@Component({
  selector: 'form-aluno',
  templateUrl: 'app/views/formulario.html'
})

export class FormAlunoComponent{
  sucesso : boolean = false;
  cursos : Curso[];
  aluno : Aluno;

  constructor(){
    this.cursos = [
      new Curso('Angular 2','Angular 2'),
      new Curso('javascript','JavaScript')
    ];

    this.aluno = new Aluno();    
  }

  enviar() : void {
    this.sucesso = true;
  }

  debug() : string{
    return JSON.stringify(this.aluno);
  }
}