import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professor } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  professoresURL = 'http://localhost:8080/professores';
  urlFiltro;

  constructor(private http: HttpClient) { }



  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/professores/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/professores';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.professoresURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(professor: Professor): Promise<any>{
    return this.http.post(this.professoresURL, professor)
    .toPromise();
  }

  alterar(professor: Professor): Promise<any>{
    return this.http.put(this.professoresURL+'/'+professor.id, professor)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Professor> {
    return this.http.get<Professor>(this.professoresURL+'/'+codigo).toPromise();
  }


}
