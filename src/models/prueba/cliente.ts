import { Cliente } from "../interfaces/persona"
import { faker } from '@faker-js/faker';
import { resolve } from "path";
import { rejects } from "assert";
import uuid from 'react-uuid';

let personas:Cliente[] = [

 
];

export const findAll=():Promise<Cliente[]>=>{
   // const personas:Cliente[] = [
   //     {
   //      id:'0001',
      //   nombre:'Sergio',
      //   apellido:'Antozzi',
      //   direccion:'montevideo 1490',
      //   email:'santozzi@gmail.com',
      //   dni:'30565006',
      //   telefono:'2915204590',
      //   ingreso:new Date('1/1/2023') 
   //     }
     
   // ];

   for(let i=2;i<25;i++){
      personas.push(
        {
            id:'000'+i,
            nombre:faker.name.firstName(),
            apellido:faker.name.lastName(),
            direccion:faker.address.streetName(),
            email:faker.internet.email(),
            dni:faker.phone.number(),
            telefono:faker.phone.number(),
            ingreso:faker.date.birthdate() 
           }
      );
   }
   return new Promise((resolve,rejects)=>{
      resolve(personas)
   }); 

} 
  
export const add=(cliente:Cliente):Promise<Cliente>=>{
     cliente.id=uuid();
     personas.push(cliente);
     return new Promise((resolve,rejects)=>{
         resolve(cliente)
     });
   }  

export class ClienteClass implements Cliente{
   public id: string="";
   public nombre: string="";
   public apellido: string="";
   public direccion: string="";
   public telefono: string="";
   public email: string="";
   public dni: string="";
   public ingreso: Date=new Date();
   
}