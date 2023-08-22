import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Regiao } from '../model/regiao';
import { Observable } from 'rxjs';

/*caracteristica do serviço, Aqui vai ser criado uma função para as variaveis */

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor(
    private http: HttpClient,
  ) { }
/*um serviço que ira fazer integração com o API */
  listaRegioes():Observable<Regiao[]> {
    const url ="/api/regioes"
    return this.http.get<Regiao[]>(url);
  }

}
