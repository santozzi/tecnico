import React from 'react';
import { IImpresora } from '../../../../../../models/interfaces/articulo';
export interface ImpresoraInterface {
	articulo:IImpresora;
}

const Impresora : React.FC<ImpresoraInterface> = ({articulo}) => {
	return <div>Impresora</div>;
};

export default Impresora;
