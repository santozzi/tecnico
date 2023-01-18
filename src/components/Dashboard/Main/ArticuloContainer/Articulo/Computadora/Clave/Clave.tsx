import { Box } from '@mui/material';
import React,{useEffect,useState} from 'react';
import { IClave, IStart, IWifi } from '../../../../../../../models/interfaces/articulo';
import StartSystem from './StartSystem/StartSystem';
import Wifi from './Wifi/Wifi';
export interface ClaveInterface {
	clave?:IClave;
}
export interface WifiInterface extends ClaveInterface{
	claveW?:IWifi;
}
export interface StartSystemInterface extends ClaveInterface{
	claveS?:IStart;
}
const Clave : React.FC<ClaveInterface> = ({clave={tipo:"Wifi",clave:"",titulo:""}}) => {
	const mapeo=new Map<string, JSX.Element>();
	mapeo.set("Wifi", <Wifi claveW={clave} />)
	mapeo.set("Start",<StartSystem claveS={clave} />)
	const [tipoMap, setTipoMap] = useState<Map<string, JSX.Element>>(mapeo);
	
	const mapeonuevo={
		// 'Wifi':<Wifi claveW={clave} />,
		// 'Start':<StartSystem claveS={clave} />
		"Wifi":"wifi",
		"Start":"start"

	}
	const wi = "";
	useEffect(() => {
		//setTipoMap((f) => f.set("Wifi", <Wifi claveW={clave} />));
	console.log();
	
		
		
	}, [])
	
	return (
		<Box sx={{
			display:'flex',
			alignItems:'flex-start',
			justifyContent:'center',
			flexDirection:'column'

		}}>
		   <Box>{""+tipoMap.get(clave.tipo)!==undefined&&tipoMap.get(clave.tipo)}</Box>
		</Box>
	);
};

export default Clave;
