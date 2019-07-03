import { ProfessorService } from './professor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorPesquisaComponent } from './professor-pesquisa/professor-pesquisa.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';

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
  declarations: [ProfessorPesquisaComponent, ProfessorCadastroComponent],
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
    ProfessorPesquisaComponent,
    ProfessorCadastroComponent
  ],
  providers: [
    ProfessorService,
    MessageService
  ]
})
export class ProfessorModule { }
