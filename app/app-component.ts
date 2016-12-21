import {Component} from 'angular2/core';

//Informacoes: # -> siginifica que a variavel é privada
//Two Way DAtaBind - > [(ngModel)]
//index no ngFor é uma variável predefinida do angular que rtorna a posicao de cada elemento da lista

@Component({
  selector: 'meu-app',
  template: `
  <h1>Angular 2 - Template</h1>
  <h2>Listagem de Tarefas</h2>
  <ul>
  		<li *ngFor="#tarefa of tarefas;#i = index">
  			{{tarefa}} <a href="#" (click)="remover(i)">[ X ]</a>
  		</li>
  </ul>
  <input type="text" placeholder="Digite o nome da tarefa" [(ngModel)]="txtTarefa" />
  <button (click) = "adicionar()">Adicionar</button>
  `
})
export class AppComponent{	

	public tarefas: string[] = [];

	public txtTarefa: string;

	adicionar(){
		
		if(this.txtTarefa != ''){
			this.tarefas.push(this.txtTarefa);	
			this.txtTarefa = "";			
		}
	}

	remover(indice:number){
		this.tarefas.splice(indice,1);
	}
}
