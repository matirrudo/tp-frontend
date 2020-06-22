export class Asistente {
    _id:number;
    usuario: string;
    nombreOrganizacion: string;
    requiereConstancia: boolean;
    fecha: Date;

    Asistente(_id?:number, usuario?: string, nombreOrganizacion?: string, requiereConstancia?: boolean, fecha?: Date) {
        this._id=_id;
        this.usuario = usuario;
        this.nombreOrganizacion = nombreOrganizacion;
        this.requiereConstancia = requiereConstancia;
        this.fecha = fecha;
    }
}
