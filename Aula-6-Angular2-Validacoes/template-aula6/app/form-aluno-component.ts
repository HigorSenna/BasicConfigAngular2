import {Component} from 'angular2/core';
import {Curso} from './models/curso';
import {Aluno} from './models/aluno';
import{ControlGroup,FormBuilder,Validators,AbstractControl} from 'angular2/common';
import{EmailValidator} from './validators/email-validator';

@Component({
	selector: 'form-aluno',
	templateUrl: 'app/views/formulario.html'
})
export class FormAlunoComponent{
	sucesso: boolean = false;
	cursos: Curso[];
	aluno: Aluno;
	alunoForm: ControlGroup;//gerencia as regras do formulario


	constructor(formBuilder: FormBuilder) {
		this.aluno = new Aluno();
		this.cursos = [
			new Curso('angular2', 'Angular 2'),
			new Curso('javascript', 'JavaScript')
		];

		this.validarForm(formBuilder);
	}

	validarForm(formBuilder: FormBuilder) : void{
		this.alunoForm = formBuilder.group({ //permite passar um objeto com todas as regras de validacoes
			nome: ['',Validators.required],
			email: ['',Validators.compose([//permite adicionar mais de uma validação para o mesmo campo
				Validators.required,
				EmailValidator.validate //validador customizado para validar email
			])],
			curso: ['',Validators.required]
		});
	}

	temErros() : boolean {
		var erros : boolean = false;
		for(var controlName in this.alunoForm.controls){
			var control : AbstractControl = this.alunoForm.controls[controlName];
			if(!control.valid && !control.pristine){ //!pristine significa quando o usuario ainda nem mexeu na pagina, ou seja, quando o usuario ja estiver mexido na pagina !pristine., quando mexo no formulario o estado muda para durt
				erros = true;
				break;
			}
		}

		return erros;
	}

	enviar(): void {
		this.sucesso = true;
	}

	debug(): string {
		return JSON.stringify(this.aluno);
	}

}