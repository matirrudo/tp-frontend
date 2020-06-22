import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Asistente } from '../models/asistente';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {
  listaDeAsistentes:Array<Asistente>;
  urlBase:string="http://localhost:3000/api/asistentes/"

  constructor(private _http:HttpClient) {
    console.log("consumiendo servicio de Asistentes");
   }
  getAsistentes():Observable<any>{
    console.log("obtener asistentes")
    const httpOptions={
      headers:new HttpHeaders({

      })
    };
    return this._http.get(this.urlBase,httpOptions);
  }

  addAsistente(asistente:Asistente):Observable<any>{
    console.log("registrar asistente");
    const httpOptions={
      headers:new HttpHeaders({
        "Content-Type":"aplication/json"
      })
    };
    var body=JSON.stringify(asistente);
    console.log(body);
    return this._http.post(this.urlBase,body,httpOptions);
  }

  deleteAsistente(asistente:Asistente):Observable<any>{
    console.log("borrar asistente")
    const httpOptions={
      headers:new HttpHeaders({

      })
    };
    return this._http.delete(this.urlBase+asistente._id,httpOptions);
  }

  updateAsistente(asistente:Asistente):Observable<any>{
    console.log("actualizar asistente");
    const httpOptions={
      headers:new HttpHeaders({
        "Content-Type":"aplication/json"
      })
    };
    var body=JSON.stringify(asistente);
    console.log(body);
    return this._http.put(this.urlBase+asistente._id,body,httpOptions);
  }

}
