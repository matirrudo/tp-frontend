import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';
import { Adelanto } from 'src/app/models/adelanto';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  pasaje: Pasaje;
  pasajes: Array<Pasaje>;
  precio: number = 0;
  precioTotal: number = 0;
  mostrarTotal: boolean = false;
  categoria: string;
  adelanto:Adelanto;
  adelantos:Array<Adelanto>;
  montoAdelantado:number = 0;

  constructor(private _pasajeService:PasajeService) {
    this.cargarPasajes();
    this.pasaje = new Pasaje();
    this.adelanto= new Adelanto();
    this.adelantos= new Array<Adelanto>();
  }

  cargarPasajes(){
    this.pasajes = new Array<Pasaje>();
    this._pasajeService.getPasajes().subscribe(
      (result)=>{
        var psj:Pasaje = new Pasaje();
        result.forEach(element=>{
          Object.assign(psj,element);
          this.pasajes.push(psj);
          psj = new Pasaje();
        });
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

  public registrarVenta() {
    if (this.precioTotal != 0 && this.categoria!=null) {
      this.pasaje.precioPasaje = this.precioTotal;
      this.pasaje.categoriaPasajero = this.categoria;
      this.pasaje.fechaCompra = new Date();
      this._pasajeService.addPasaje(this.pasaje).subscribe(
        (result)=>{
          alert("Venta registrada");
        },
        (error)=>{
          console.log(error);
        }
      )
      this.cleanField();
      this.cargarPasajes();
    }
  }

  borrarPasaje(pasaje:Pasaje){
    console.log("borrar pasaje");
    this._pasajeService.deletePasaje(pasaje).subscribe(
      (result) => {
        alert("Pasaje eliminado");
      },
      (error) => {
        console.log(error)
      }
    );
    this.cargarPasajes();
  }

  modificarPasaje() {
    this.pasaje.fechaCompra = new Date();
    this._pasajeService.updatePasaje(this.pasaje).subscribe(
      (result) => {
        alert("Venta actualizada");
      },
      (error) => {
        console.log(error);
      }
    );
    this.cleanField();
    this.cargarPasajes();
  }

  public calcularTotal2(e): void {
    if (this.categoria == "a") {
      this.precioTotal = this.precio;
      this.mostrarTotal = true;
      console.log("calculandoa" + this.precioTotal);
    } else {
      if (this.categoria == "m") {
        this.precioTotal = this.precio - this.precio / 100 * 25;
        this.mostrarTotal = true;
        console.log("calculandom" + this.precioTotal);
      } else {
        if (this.categoria == "j") {
          this.precioTotal = this.precio - this.precio / 100 * 50;
          this.mostrarTotal = true;
          console.log("calculandoj" + this.precioTotal);
        }
      }
    }

  }
  public calcularTotal(categoria: string): void {
    if (categoria == "a") {
      this.precioTotal = this.precio;
      this.mostrarTotal = true;
      console.log("calculandoa" + this.precioTotal);
    } else {
      if (categoria == "m") {
        this.precioTotal = this.precio - this.precio / 100 * 25;
        this.mostrarTotal = true;
        console.log("calculandom" + this.precioTotal);
      } else {
        if (categoria == "j") {
          this.precioTotal = this.precio - this.precio / 100 * 50;
          this.mostrarTotal = true;
          console.log("calculandoj" + this.precioTotal);
        }
      }
    }
  }
  calcularPrecioInicial(pasaje:Pasaje){
    if (pasaje.categoriaPasajero == "a") {
      this.precio = pasaje.precioPasaje;
      this.precioTotal=pasaje.precioPasaje;
      this.mostrarTotal = true;
    } else {
      if (pasaje.categoriaPasajero == "m") {
        this.precioTotal = pasaje.precioPasaje;
        this.precio = pasaje.precioPasaje + pasaje.precioPasaje/100*33,33333333;
        this.mostrarTotal = true;
      } else {
        if (pasaje.categoriaPasajero == "j") {
          this.precioTotal = pasaje.precioPasaje;
          this.precio = pasaje.precioPasaje + pasaje.precioPasaje;
          this.mostrarTotal = true;
        }
      }
    }
    
  }
  public cleanField(): void {
    this.pasaje = new Pasaje();
    this.categoria = "";
    this.precio = null;
    this.precioTotal = 0;
    this.mostrarTotal = false;
    this.montoAdelantado=0;
  }

  elegirPasaje(pasaje: Pasaje) {
    var tpasaje = new Pasaje()
    Object.assign(tpasaje,pasaje)
    this.calcularPrecioInicial(pasaje);
    this.pasaje=tpasaje;
  }

  agregarMontoAdelantado(){
      if(this.calcularPrecioDeMontosDePasaje(this.pasaje)+this.montoAdelantado>this.precioTotal){
        alert("Se ha superado el precio del pasaje");
      }else{
        this.adelanto.fecha= new Date();
        this.adelanto.montoAdelanto= this.montoAdelantado;
        this.pasaje.adelantos.push(this.adelanto);
        this.adelanto= new Adelanto();
        this.montoAdelantado=0;
      }
  }
  
  borrarAdelanto(adelanto:Adelanto){
    var indice=this.pasaje.adelantos.findIndex((element)=>element._id == adelanto._id);
    this.pasaje.adelantos.splice(indice,1);
  }
  calcularPrecioDeMontosDePasaje(pasaje):number{
    var precioDeMontoDePasajes=0;
    for(var i=0;i<pasaje.adelantos.length;i++){
      precioDeMontoDePasajes=precioDeMontoDePasajes+pasaje.adelantos[i].montoAdelanto;
    }
    return precioDeMontoDePasajes;
  }


}
