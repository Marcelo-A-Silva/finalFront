import { ConfirmationService } from 'primeng/api';
import { ProfessorCadastroComponent } from './professor/professor-cadastro/professor-cadastro.component';
import { ProfessorPesquisaComponent } from './professor/professor-pesquisa/professor-pesquisa.component';
import { AlunoCadastroComponent } from './aluno/aluno-cadastro/aluno-cadastro.component';
import { AlunoPesquisaComponent } from './aluno/aluno-pesquisa/aluno-pesquisa.component';
import { AlunoModule } from './aluno/aluno.module';
import { ProfessorModule } from './professor/professor.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { DisciplinaCadastroComponent } from './disciplina/disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaPesquisaComponent } from './disciplina/disciplina-pesquisa/disciplina-pesquisa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';


const rotas: Routes = [
  {path: 'disciplinas', component: DisciplinaPesquisaComponent},
  {path: 'disciplinas/novo', component: DisciplinaCadastroComponent},
  {path: 'disciplinas/:id', component: DisciplinaCadastroComponent},

  {path: 'alunos', component: AlunoPesquisaComponent},
  {path: 'alunos/novo', component: AlunoCadastroComponent},
  {path: 'alunos/:id', component: AlunoCadastroComponent},

  {path: 'professores', component: ProfessorPesquisaComponent},
  {path: 'professores/novo', component: ProfessorCadastroComponent},
  {path: 'professores/:id', component: ProfessorCadastroComponent}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DisciplinaModule,
    HttpClientModule,
    ProfessorModule,
    AlunoModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
