import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';
import { Observable } from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  listaDeMensajes:Array<Mensaje>;
  urlBase:string="http://localhost:3000/api/mensajes/"

  constructor(private _http:HttpClient) { 
    console.log("consumiendo servicio de Mensajes");
  }

  getMensajes():Observable<any>{
    console.log("obtener mensajes")
    const httpOptions={
      headers:new HttpHeaders({

      })
    };
    return this._http.get(this.urlBase,httpOptions);
  }

  addMensaje(mensaje:Mensaje):Observable<any>{
    console.log("registrar mensaje");
    const httpOptions={
      headers:new HttpHeaders({
        "Content-Type":"aplication/json"
      })
    };
    var body=JSON.stringify(mensaje);
    console.log(body);
    return this._http.post(this.urlBase,body,httpOptions);
  }

  deleteMensaje(mensaje:Mensaje):Observable<any>{
    console.log("borrar mensaje")
    const httpOptions={
      headers:new HttpHeaders({

      })
    };
    return this._http.delete(this.urlBase+mensaje._id,httpOptions);
  }

  updateMensaje(mensaje:Mensaje):Observable<any>{
    console.log("actualizar mensaje")
    const httpOptions={
      headers:new HttpHeaders({

      })
    };
    var body=JSON.stringify(mensaje);
    console.log(body);
    return this._http.put(this.urlBase+mensaje._id,body,httpOptions);
  }
}
