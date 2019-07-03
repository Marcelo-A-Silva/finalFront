import { AlunoService } from './aluno.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import { AlunoPesquisaComponent } from './aluno-pesquisa/aluno-pesquisa.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import { RouterModule } from '@angular/router';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [AlunoCadastroComponent, AlunoPesquisaComponent],
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
    AlunoCadastroComponent,
    AlunoPesquisaComponent
  ],
  providers: [
    AlunoService,
    MessageService
  ]
})
export class AlunoModule { }
