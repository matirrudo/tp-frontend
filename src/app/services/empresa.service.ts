import { Injectable } from '@angular/core';
import { Pasaje } from './../models/pasaje';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  urlBase:string = "http://localhost:3000/api/empresas/";
  constructor(private _http:HttpClient) { 
  }

  getEmpresas():Observable<any>{
    console.log("obtener empresas")
    const httpOptions={
      headers:new HttpHeaders({
      })
    };
    return this._http.get(this.urlBase,httpOptions);
  }

}
