import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box'
import Buscar from '../Buscar/Buscar';
import { IProblema } from '../../../models/interfaces/servicio';
export interface FilterProblemaInterface {
	problemas: IProblema[];
	manejadorDeProblemas: (articulos: IProblema[]) => void;
}

const FilterProblema: React.FC<FilterProblemaInterface> = ({ problemas, manejadorDeProblemas }) => {
	const [search, setSearch] = useState<string>("");
	const [ascendente, setAscendente] = useState<boolean>(true);
	
	const filtroBusqueda=(e:string)=>{
          const filtrado = problemas.filter((problema:IProblema)=>{
			
			
			return problema.nombre?.toLowerCase().includes(e.toLowerCase())
				
			 
		  });
		  manejadorDeProblemas([...filtrado])
	}
	
	
	const filtroAlfabetico = () => {
		let arreglo: IProblema[] = [];

		if (!ascendente) {
			arreglo = problemas.sort((a: IProblema, b: IProblema) => {
				const nameA = a.nombre.toUpperCase() || ""; // ignore upper and lowercase
				const nameB = b.nombre.toUpperCase() || ""; // ignore upper and lowercase
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			})
		} else {
			arreglo = problemas.sort((a: IProblema, b: IProblema) => {
				const nameA = a.nombre.toUpperCase() || ""; // ignore upper and lowercase
				const nameB = b.nombre.toUpperCase() || ""; // ignore upper and lowercase
				if (nameA < nameB) {
					return 1;
				}
				if (nameA > nameB) {
					return -1;
				}
				return 0;
			})
		}
		setAscendente(f => !f);
		if (manejadorDeProblemas !== undefined)
			manejadorDeProblemas([...arreglo])
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		filtroBusqueda(e.target.value);
	};
	useEffect(() => {

		  if (!problemas) {
			manejadorDeProblemas(problemas);
		  } else {
			let res: IProblema[] = problemas.filter(
			  (problema) =>
				problema.nombre?.toLowerCase().includes(search.toLowerCase())
				
			);
	
			manejadorDeProblemas(res);
		  }

		
	
	  }, [search, problemas]);
	return (
		<Box>
			<Buscar handleSearch={handleSearch} filtroAlfabetico={filtroAlfabetico} />
		</Box>
	);
};

export default FilterProblema;
