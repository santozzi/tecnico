import { faker } from "@faker-js/faker";
import { IArticulo, IComputadora, IImpresora, IWifi,IStart } from "../interfaces/articulo";
import { Cliente } from "../interfaces/persona";
let articulo:IArticulo[]=[];
export const findAll=():Promise<IArticulo[]>=>{
    
    const cliente:Cliente = {
        id:'0010',
        nombre:faker.name.firstName(),
        apellido:faker.name.lastName(),
        direccion:faker.address.streetName(),
        email:faker.internet.email(),
        dni:faker.phone.number(),
        telefono:faker.phone.number(),
        ingreso:faker.date.birthdate() 
       }
    const articulo:IArticulo[] = [];
    
       const wifi:IWifi={ 
        tipo:'Wifi',
        titulo:'Ruter de casa',
        ssid:'bbconline',
        clave:'1234'
       }
       const user:IStart={ 
        tipo:'Start',
        titulo:'Usuario admin',
        usuario:'admin',
        clave:'12345'
       }

       let impresora:IImpresora={

             id:'000',
             tipo:'impresora',
             marca:"HP",
             modelo:"P1005",
             serieProv:`PROV${faker.random.numeric()}`,
             serieDef:`DEF${faker.random.numeric()}`,
             aCargoDe: "sergio",
            //  nombre:faker.name.firstName(),
            //  apellido:faker.name.lastName(),
            //  direccion:faker.address.streetName(),
            //  email:faker.internet.email(),
            //  dni:faker.phone.number(),
            //  telefono:faker.phone.number(),
              ingreso:faker.date.birthdate(),
              tipoImpresora:'Multifuncion laser mono'
       }
       let computadora:IComputadora={

        id:'000',
        tipo:'Notebook',
        marca:'Asus',
        modelo:'X515',
        serieProv:`PROV${faker.random.numeric()}`,
        serieDef:``,
        aCargoDe: "sergio",
       //  nombre:faker.name.firstName(),
       //  apellido:faker.name.lastName(),
       //  direccion:faker.address.streetName(),
       //  email:faker.internet.email(),
       //  dni:faker.phone.number(),
       //  telefono:faker.phone.number(),
         ingreso:faker.date.birthdate(),
         SO:'Windows 10',
         informe:'dire/informe.htm',
         claves:[wifi,user ]
         
         

       }
       
       
       
        articulo.push(impresora);
        articulo.push(computadora);
        articulo.push(impresora);
        articulo.push(computadora);
        articulo.push(impresora);
        articulo.push(computadora);
        articulo.push(impresora);
        articulo.push(computadora);
   
    return new Promise((resolve,rejects)=>{
       resolve(articulo)
    }); 
}