import { Component, OnInit } from '@angular/core';
import { JuegoService } from './../../services/juego.service';
import { Palabra } from './../../models/palabra';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  palabra = new Palabra();
  vidas: number;
  nivel: number;
  puntuacion: number;
  palabraAProbar:string;

  constructor(private _servicio: JuegoService) { }

  ngOnInit(): void {
  }

  public iniciarjuego(): void {
    this.vidas = 6;
    this.nivel = 0;
    this.puntuacion = 0;
    this._servicio.desordenarPalabras();
    this.palabra = this.obtenerPalabra(this.nivel);
  }
  public probarPalabra(){
    if (this.palabraAProbar==this.palabra.palabraIng){
      this.acertarPalabra();
    }else{
      this.errarPalabra();
    }
  }
  public obtenerPalabra(nivel: number): Palabra {
    return this._servicio.obtenerPalabra(nivel);
  }
  public errarPalabra(): void {
    this.vidas--;
    this.palabraAProbar="";
    if (this.juegoTerminado()){
      this.palabra= new Palabra();
      this.vidas=0;
    }
  }
  public acertarPalabra(): void {
    this.nivel++;
    this.puntuacion++;
    if (this.juegoTerminado()){
      this.nivel--;
      this.palabra= new Palabra();
    }
    this.palabra=this.obtenerPalabra(this.nivel);
    this.palabraAProbar="";
  }
  public juegoTerminado():boolean{
    if(this.vidas<=0){
      return true;
    }else{
      return false;
    }
    if(this.nivel=10){
      return true;
    }else{
      return false;
    }
  }

}
