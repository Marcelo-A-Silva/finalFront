import { DisciplinaService } from '../disciplina.service';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina-pesquisa/model';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {

  disciplina = new Disciplina();


  constructor(
    private service: DisciplinaService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.disciplina)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Disciplina '+this.disciplina.nome+' cadastrada'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoDisciplina = this.rota.snapshot.params['id'];
    if(codigoDisciplina){
      this.carregarDisciplina(codigoDisciplina);
    }
  }

  carregarDisciplina(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.disciplina = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.disciplina)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Disciplina '+this.disciplina.nome+' alterada'});
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
    return Boolean(this.disciplina.id);
  }
}
