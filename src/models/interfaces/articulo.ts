import { Wifi } from "@mui/icons-material";
import { Persona } from "./persona";

const TipoArticulo={
    Notebook:"Notebook",
    Netbook:"Netbook",
    Impsora:'Impsora',
    CPU:"CPU",
    Monitor:"Monitor",
    Tablet:"Tablet"
}


export interface IArticulo{
    id?:string;
    tipo?:string;
    marca?:string;
    modelo?:string;
    serieProv?:string;
    serieDef?:string;
    aCargoDe?:Persona;
    ingreso?:Date;
}

export interface IClave{
    //de que es la cave
    tipo:string;
    titulo?:string;
    clave?:string;
}
export interface IWifi extends IClave{
    ssid?:string;
    
}
export interface IStart extends IClave{
    usuario?:string;
}
export interface IDeepFreeze extends IClave{}
export interface IBios extends IClave{}

export interface IImpresora extends IArticulo{
    tipoImpresora?:string;
}
export interface IComputadora extends IArticulo{
    SO?:string;
    informe?:string;
    claves?:IClave[];
}
export interface INotebook extends IComputadora {}
export interface INetbook extends IComputadora {}
export interface ICPU extends IComputadora {}
export interface ISmarth extends IComputadora {}
export interface ITablet extends IComputadora {}
export interface IPhone extends IComputadora {}




