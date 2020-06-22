import { Empresa } from './empresa';

export class Mensaje {
    _id:number;
    para: number;
    desde: number;
    texto: string;
    fecha: Date;
    empresa: Empresa;

    Mesaje(_id?:number, para?:number, desde?:number, texto?:string, fecha?:Date, empresa?:Empresa){
        this._id=_id;
        this.para = para;
        this.desde = desde;
        this.texto = texto;
        this.fecha = fecha;
        this.empresa = empresa;
    }
}
