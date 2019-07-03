import { Aluno } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  alunosURL = 'http://localhost:8080/alunos';
  urlFiltro;

  constructor(private http: HttpClient) { }



  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/alunos/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/alunos';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.alunosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(aluno: Aluno): Promise<any>{
    return this.http.post(this.alunosURL, aluno)
    .toPromise();
  }

  alterar(aluno: Aluno): Promise<any>{
    return this.http.put(this.alunosURL+'/'+aluno.id, aluno)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Aluno> {
    return this.http.get<Aluno>(this.alunosURL+'/'+codigo).toPromise();
  }


}
