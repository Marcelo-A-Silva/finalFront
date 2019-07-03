import { AlunoService } from './../aluno.service';
import { Aluno } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {

  aluno = new Aluno();


  constructor(
    private service: AlunoService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.aluno)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Aluno '+this.aluno.nome+' cadastrado'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoAluno = this.rota.snapshot.params['id'];
    if(codigoAluno){
      this.carregarAluno(codigoAluno);
    }
  }

  carregarAluno(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.aluno = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.aluno)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Aluno '+this.aluno.nome+' alterado'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.aluno.id);
  }



}
