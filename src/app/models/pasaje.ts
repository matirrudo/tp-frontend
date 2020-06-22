import { Adelanto } from './adelanto';

export class Pasaje {
    _id:number;
    dniPasajero: number;
    precioPasaje: number;
    categoriaPasajero: string;
    fechaCompra: Date;
    adelantos:Array<Adelanto> = new Array<Adelanto>();

    Pasaje(_id?:number, dniPasajero?: number, precioPasaje?: number, categoriaPasajero?: string, fechaCompra?: Date, contactos?:Array<Adelanto>) {
        this._id=_id;
        this.dniPasajero=dniPasajero;
        this.precioPasaje=precioPasaje;
        this.categoriaPasajero=categoriaPasajero;
        this.fechaCompra=fechaCompra;
    }
}
