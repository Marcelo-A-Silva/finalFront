import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-aluno-pesquisa',
  templateUrl: './aluno-pesquisa.component.html',
  styleUrls: ['./aluno-pesquisa.component.css']
})
export class AlunoPesquisaComponent implements OnInit {

  alunos = [];

  nomeBusca:string;

  constructor(
    private service:AlunoService,
    private msg:MessageService,
    private conf: ConfirmationService
  ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.alunos=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(aluno:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+aluno.nome+'?',
      accept: () => {
        this.excluir(aluno);
      }
    });
  }

  excluir(aluno: any){
    this.service.excluir(aluno.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Exclusão', detail:'Aluno '+aluno.nome+' excluído'});
    });
  }
}
