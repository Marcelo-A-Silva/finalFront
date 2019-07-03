import { DisciplinaService } from '../disciplina.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-disciplina-pesquisa',
  templateUrl: './disciplina-pesquisa.component.html',
  styleUrls: ['./disciplina-pesquisa.component.css']
})
export class DisciplinaPesquisaComponent implements OnInit {

  disciplinas = [];

  nomeBusca:string;

  constructor(
    private service:DisciplinaService,
    private msg:MessageService,
    private conf: ConfirmationService
  ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.disciplinas=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(disciplina:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+disciplina.nome+'?',
      accept: () => {
        this.excluir(disciplina);
      }
    });
  }

  excluir(disciplina: any){
    this.service.excluir(disciplina.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Exclusão', detail:'Disciplina '+disciplina.nome+' excluída'});
    });
  }

}
