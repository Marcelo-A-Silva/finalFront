import { Disciplina } from './../disciplina/disciplina-pesquisa/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  disciplinasURL = 'http://localhost:8080/disciplina';
  urlFiltro;

  constructor(private http: HttpClient) { }



  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/disciplina/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/disciplina';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.disciplinasURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(disciplina: Disciplina): Promise<any>{
    return this.http.post(this.disciplinasURL, disciplina)
    .toPromise();
  }

  alterar(disciplina: Disciplina): Promise<any>{
    return this.http.put(this.disciplinasURL+'/'+disciplina.id, disciplina)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Disciplina> {
    return this.http.get<Disciplina>(this.disciplinasURL+'/'+codigo).toPromise();
  }


}
