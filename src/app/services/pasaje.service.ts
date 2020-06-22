import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  urlBase:string="http://localhost:3000/api/pasajes/"


  constructor(private _http:HttpClient) { 
    console.log("consumiendo servicio de Pasajes");
  }

  getPasajes():Observable<any>{
    console.log("_obtener pasajes")
    const httpOptions={
      headers:new HttpHeaders({

      })
    };
    return this._http.get(this.urlBase,httpOptions);
  }

  addPasaje(mensaje:Pasaje):Observable<any>{
    console.log("_registrar pasaje");
    const httpOptions={
      headers:new HttpHeaders({
        "Content-Type":"aplication/json"
      })
    };
    var body=JSON.stringify(mensaje);
    console.log(body);
    return this._http.post(this.urlBase,body,httpOptions);
  }

  deletePasaje(pasaje:Pasaje):Observable<any>{
    console.log("_borrar pasaje")
    const httpOptions={
      headers:new HttpHeaders({
      })
    };
    return this._http.delete(this.urlBase+pasaje._id,httpOptions);
  }

  updatePasaje(pasaje:Pasaje):Observable<any>{
    console.log("_actualizar pasaje")
    const httpOptions={
      headers:new HttpHeaders({

      })
    };
    var body=JSON.stringify(pasaje);
    console.log(body);
    return this._http.put(this.urlBase+pasaje._id,body,httpOptions);
  }
}


