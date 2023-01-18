import {  Persona } from "../models/interfaces/persona";

export const ascendente=(clientes:Persona[])=>{
    
    clientes.sort((a:Persona,b:Persona)=>{
		const primero:string = a.apellido || "";
		const segundo:string = b.apellido || "";
		

		if(primero===segundo){
			return 0
		}else if(primero < segundo){
			return -1
		}else
		  return 1
	  })
}
export const descendente=(clientes:Persona[])=>{
    
   clientes.sort((a:Persona,b:Persona)=>{
		const primero:string = a.apellido || "";
		const segundo:string = b.apellido || "";
		

		if(primero===segundo){
			return 0
		}else if(primero > segundo){
			return -1
		}else
		  return 1
	  })
}
export const ascendenteByDate=(clientes:Persona[])=>{
    
    clientes.sort((a:Persona,b:Persona)=>{
		const primero:number = a.ingreso?.getTime() || 0;
		const segundo:number = b.ingreso?.getTime() || 0;
		

		if(primero===segundo){
			return 0
		}else if(primero < segundo){
			return -1
		}else
		  return 1
	  })
}
export const descendenteByDate=(clientes:Persona[])=>{
    
    clientes.sort((a:Persona,b:Persona)=>{
		const primero:number = a.ingreso?.getTime() || 0;
		const segundo:number = b.ingreso?.getTime() || 0;
		

		if(primero===segundo){
			return 0
		}else if(primero > segundo){
			return -1
		}else
		  return 1
	  })
}