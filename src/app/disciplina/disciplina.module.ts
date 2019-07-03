import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaService } from './disciplina.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaPesquisaComponent } from './disciplina-pesquisa/disciplina-pesquisa.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [DisciplinaPesquisaComponent, DisciplinaCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    DisciplinaCadastroComponent,
    DisciplinaPesquisaComponent
  ],
  providers:[
    DisciplinaService,
    MessageService
  ]
})
export class DisciplinaModule { }
