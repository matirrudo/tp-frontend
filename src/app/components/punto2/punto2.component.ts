import { Component, OnInit } from '@angular/core';
import { Asistente } from '../../models/asistente';
import { AsistenteService } from '../../services/asistente.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  asistente: Asistente;
  asistentes: Array<Asistente>;
  solicitaConstancia: boolean;

  constructor(private _asistenteService: AsistenteService) {
    this.asistente = new Asistente();
    this.asistente.requiereConstancia = false;
    this.asistentes = new Array<Asistente>();
    this.cargarAsistentes();
  }

  ngOnInit(): void {
  }
  public registrarAsistente() {
    if (this.asistente.usuario != null && this.asistente.nombreOrganizacion != null) {
      this._asistenteService.addAsistente(this.asistente).subscribe(
        (result) => {
          alert("Asistente registrado");
        },
        (error) => {
          console.log(error);
        }
      )
      this.cleanFields();
      this.cargarAsistentes();
    }
  }

  modificarAsistente() {
    this.asistente.fecha = new Date();
    this._asistenteService.updateAsistente(this.asistente).subscribe(
      (result) => {
        alert("Asistente actualizado");
      },
      (error) => {
        console.log(error);
      }
    );
    this.cleanFields();
    this.cargarAsistentes();
  }



  borrarAsistente(asistente: Asistente) {
    console.log("borrar asistente");
    this._asistenteService.deleteAsistente(asistente).subscribe(
      (result) => {
        alert("Asistente eliminado");
      },
      (error) => {
        console.log(error)
      }
    );
    this.cargarAsistentes();
  }



  elegirAsistente(asistente: Asistente) {
    this.asistente = asistente;
  }

  cargarAsistentes() {
    this.asistentes = new Array<Asistente>();
    this._asistenteService.getAsistentes().subscribe(
      (result) => {
        var asis: Asistente = new Asistente();
        result.forEach(element => {
          Object.assign(asis, element);
          this.asistentes.push(asis);
          asis = new Asistente();
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public solicitarConstancia(e) {
    if (e.target.checked == true) {
      this.asistente.requiereConstancia = true;
    } else {
      this.asistente.requiereConstancia = false;
    }
  }
  public cleanFields() {
    this.asistente = new Asistente();
    this.asistente.requiereConstancia = false;
  }

}
