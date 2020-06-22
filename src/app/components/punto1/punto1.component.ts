import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../models/mensaje';
import {MensajeService} from '../../services/mensaje.service';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  mensaje: Mensaje;
  tamMaxTexto: number = 30;
  tamTexto: number;
  submited: boolean;

  mensajes: Array<Mensaje>;
  empresas: Array<Empresa>;

  constructor(private _mensajeService:MensajeService, private _empresaService:EmpresaService) {
    this.mensaje = new Mensaje();
    this.cargarMensajes();
    this.cargarEmpresas();
  }

  cargarMensajes(){
    this.mensajes = new Array<Mensaje>();
    this._mensajeService.getMensajes().subscribe(
      (result)=>{
        var msj:Mensaje = new Mensaje();
        result.forEach(element=>{
          Object.assign(msj,element);
          this.mensajes.push(msj);
          msj = new Mensaje();
        });
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  
  cargarEmpresas(){
    this.empresas = new Array<Empresa>();
    this._empresaService.getEmpresas().subscribe(
      (result)=>{
        var emp:Empresa = new Empresa();
        result.forEach(element=>{
          Object.assign(emp,element);
          this.empresas.push(emp);
          emp = new Empresa();
        });
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

  public cambiarTamTexto() {
    this.tamTexto = this.mensaje.texto.length
  }
  public enviarMensaje() {
    if (this.mensaje.texto != null && this.mensaje.para != null && this.mensaje.desde != null) {
      this.mensaje.fecha = new Date();
      this._mensajeService.addMensaje(this.mensaje).subscribe(
        (result)=>{
          alert("Mensaje enviado");
        },
        (error)=>{
          console.log(error);
        }
      )
      this.limpiarMensaje();
      this.cargarMensajes();
    }
  }

  borrarMensaje(mensaje:Mensaje){
    this._mensajeService.deleteMensaje(mensaje).subscribe(
      (result)=>{
        alert("Mensaje eliminado")
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  
  modificarMensaje(){
    this.mensaje.fecha= new Date();
    this._mensajeService.updateMensaje(this.mensaje).subscribe(
      (result)=>{
        alert("Mensaje actualizado");
      },
      (error)=>{
        console.log(error);
      }
    );
    this.limpiarMensaje();
    this.cargarMensajes();
  }

  public limpiarMensaje() {
    this.mensaje = new Mensaje();
    this.tamTexto = 0;
  }
}
