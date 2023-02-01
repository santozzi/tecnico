import { faker } from "@faker-js/faker";
import axios from "axios";
import { IArticulo, IComputadora, IImpresora, IWifi,IStart } from "../interfaces/articulo";
import { Cliente } from "../interfaces/persona";
let articulo:IArticulo[]=[];


export const findAll=():Promise<IArticulo[]>=>{
    return new Promise((resolve,rejects)=>{
      axios.get<IArticulo[]>("http://localhost:8080/api/v1/articulos/all").then((articulos)=>{
        resolve(articulos.data)
      }) 
      
    }); 
}