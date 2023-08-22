import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faixaetaria } from '../model/faixaEtaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor(private http:HttpClient) { }

  listFaixaEtaria(): Observable<Faixaetaria[] >{
    const caminhourl = '/api/faixaEtaria';
    
    return this.http.get<Faixaetaria[]>(caminhourl);
  }
}