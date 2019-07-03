import { ProfessorService } from './../professor.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-professor-pesquisa',
  templateUrl: './professor-pesquisa.component.html',
  styleUrls: ['./professor-pesquisa.component.css']
})
export class ProfessorPesquisaComponent implements OnInit {

  professores = [];

  nomeBusca:string;

  constructor(
    private service:ProfessorService,
    private msg:MessageService,
    private conf: ConfirmationService
  ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.professores=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(professor:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+professor.nome+'?',
      accept: () => {
        this.excluir(professor);
      }
    });
  }

  excluir(professor: any){
    this.service.excluir(professor.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Exclusão', detail:'Professor '+professor.nome+' excluído'});
    });
  }
}
