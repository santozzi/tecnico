import { Cliente } from "../models/interfaces/persona"
import { findAll as findAllModel} from "../models/prueba/cliente"
export const findAll=():Promise<Cliente[]> =>{
   return findAllModel(); 
}