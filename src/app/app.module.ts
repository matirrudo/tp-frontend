import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDataTableModule } from 'angular-9-datatable';

//servicios
import { EmpresaService } from './services/empresa.service';
import { JuegoService } from './services/juego.service';
import { MensajeService } from './services/mensaje.service';
import { VentaService } from './services/venta.service';
import { AsistenteService } from './services/asistente.service';
import { HttpClientModule } from '@angular/common/http';
import { PasajeService } from './services/pasaje.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto4Component } from './components/punto4/punto4.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component,
    Punto4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDataTableModule,
    HttpClientModule
  ],

  //servicio
  providers: [
    EmpresaService,
    JuegoService,
    MensajeService,
    VentaService,
    AsistenteService,
    PasajeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
