import { Component } from '@angular/core';
import { Aluno } from '../.././models/aluno';
import { AlunoService } from '../.././services/aluno-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aluno-visualizar',
  templateUrl: 'app/views/alunos/visualizar.html',
  providers: [ AlunoService ],
  directives: [ ROUTER_DIRECTIVES ]
})
export class AlunoVisualizarComponent implements OnInit {

  private id: number;
  private aluno: Aluno;

  constructor(
    private route: ActivatedRoute, //server para pegar parametros da url
    private alunoService: AlunoService) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];//pegando o id da url
    //O SIMBOLO DE + inidica que estamos pegando a string da url e convertendo para NUMERO
    this.aluno = this.alunoService.buscarPorId(this.id);
  }
}