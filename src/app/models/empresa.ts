export class Empresa {
    _id: number;
    nombre:string;
    email:string

    Empresa(_id?:number, nombre?:string, email?:string){
        this._id=_id;
        this.nombre=nombre;
        this.email=email;
    }
}
