import React, { useState } from 'react';
import { IArticulo } from '../../../models/interfaces/articulo';
import Buscar from '../Buscar/Buscar';
export interface FitroArticulosInterface {
	articulos:IArticulo[];
	manejadorDeArticulos:(articulos:IArticulo[])=>void;
}

const FiltroArticulos : React.FC<FitroArticulosInterface> = ({articulos,manejadorDeArticulos}) => {
	const [search, setSearch] = useState<string>("");
	const [ascendente, setAscendente] = useState<boolean>(true);
	
	const filtroAlfabetico = () => {
		
		let arreglo:IArticulo[]=[]; 
		
		if(!ascendente){
		 arreglo = articulos.sort((a:IArticulo,b:IArticulo)=>{
			const nameA = a.aCargoDe?.toUpperCase() || ""; // ignore upper and lowercase
			const nameB = b.aCargoDe?.toUpperCase()|| ""; // ignore upper and lowercase
			if (nameA < nameB) {
			  return -1;
			}
			if (nameA > nameB) {
			  return 1;
			}
			return 0;
		})
	    }else{
			arreglo = articulos.sort((a:IArticulo,b:IArticulo)=>{
				const nameA = a.aCargoDe?.toUpperCase() || ""; // ignore upper and lowercase
				const nameB = b.aCargoDe?.toUpperCase()|| ""; // ignore upper and lowercase
				if (nameA < nameB) {
				  return 1;
				}
				if (nameA > nameB) {
				  return -1;
				}
				return 0;
			})
		}
        setAscendente(f=>!f);
		manejadorDeArticulos([...arreglo])
	  };
	 
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	  };
	return (
		<Buscar handleSearch={handleSearch} filtroAlfabetico={filtroAlfabetico}/>
	);
};

export default FiltroArticulos;
