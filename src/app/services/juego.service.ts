import { Injectable } from '@angular/core';
import { Palabra } from './../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  palabras: Array<Palabra>;
  oso: Palabra;
  abeja: Palabra;
  oveja: Palabra;
  leon: Palabra;
  tigre: Palabra;
  vaca: Palabra;
  caballo: Palabra;
  gallina: Palabra;
  perro: Palabra;
  gato: Palabra;

  constructor() {
    this.palabras = new Array<Palabra>();
    
    this.oso=new Palabra();
    this.oso.palabraIng = "bear";
    this.oso.palabraEsp = "oso";
    this.oso.urlImagen = "assets/img/oso.png";
    this.palabras.push(this.oso);

    this.abeja=new Palabra();
    this.abeja.palabraEsp = "abeja";
    this.abeja.palabraIng = "bee";
    this.abeja.urlImagen = "assets/img/abeja.jpg";
    this.palabras.push(this.abeja);

    this.oveja=new Palabra();
    this.oveja.palabraEsp = "oveja";
    this.oveja.palabraIng = "sheep";
    this.oveja.urlImagen = "assets/img/oveja.jpg";
    this.palabras.push(this.oveja);

    this.leon=new Palabra();
    this.leon.palabraEsp = "leon";
    this.leon.palabraIng = "lion";
    this.leon.urlImagen = "assets/img/leon.jpg";
    this.palabras.push(this.leon);

    this.tigre=new Palabra();
    this.tigre.palabraEsp = "tigre";
    this.tigre.palabraIng = "tiger";
    this.tigre.urlImagen = "assets/img/tigre.jpg";
    this.palabras.push(this.tigre);

    this.vaca=new Palabra();
    this.vaca.palabraEsp = "vaca";
    this.vaca.palabraIng = "cow";
    this.vaca.urlImagen = "assets/img/vaca.jpg";
    this.palabras.push(this.vaca);

    this.caballo=new Palabra();
    this.caballo.palabraEsp = "caballo";
    this.caballo.palabraIng = "horse";
    this.caballo.urlImagen = "assets/img/caballo.jpg";
    this.palabras.push(this.caballo);

    this.gallina=new Palabra();
    this.gallina.palabraEsp = "gallina";
    this.gallina.palabraIng = "chicken";
    this.gallina.urlImagen = "assets/img/gallina.jpg";
    this.palabras.push(this.gallina);

    this.perro=new Palabra();
    this.perro.palabraEsp = "perro";
    this.perro.palabraIng = "dog";
    this.perro.urlImagen = "assets/img/perro.jpg";
    this.palabras.push(this.perro);

    this.gato=new Palabra();
    this.gato.palabraEsp = "gato";
    this.gato.palabraIng = "cat";
    this.gato.urlImagen = "assets/img/gato.jpg";
    this.palabras.push(this.gato);
  }

  public obtenerPalabra(posicion: number): Palabra {
    return this.palabras[posicion];
  }

  public desordenarPalabras(): void {
    this.palabras = this.palabras.sort(function () { return Math.random() - 0.5 });
  }
}
