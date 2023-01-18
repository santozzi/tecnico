import { DataRouteMatch } from "react-router-dom";





export interface Persona{
    id?:string;
    
    nombre?:string;
    apellido?:string;
    direccion?:string;
    telefono?:string;
    email?:string;
    dni?:string;
    ingreso?:Date;
}

export interface Cliente extends Persona{
    legajo?:number;

}


export interface Usuario extends Persona{
    usuario?:'string';
    clave?:'string';
}
