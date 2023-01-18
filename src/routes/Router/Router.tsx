import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import ArticuloContainer from '../../components/Dashboard/Main/ArticuloContainer/ArticuloContainer';
import ClienteContainer from '../../components/Dashboard/Main/ClienteContainer/ClienteContainer';
import ServicioContainer from '../../components/Dashboard/Main/ServicioContainer/ServicioContainer';

import TodoContainer from '../../components/Dashboard/Main/TodoContainer/TodoContainer';
import Usuario from '../../components/Dashboard/Main/Usuario/Usuario';

export interface RouterInterface {}

const Router : React.FC<RouterInterface> = () => {

	return (
		<Routes>
		<Route path='/' element={<Usuario />} />
		<Route path='/usuario' element={<Usuario />} />
		<Route path='/todo' element={<TodoContainer />} />
		<Route path='/cliente' element={<ClienteContainer />} />
		<Route path='/articulo' element={<ArticuloContainer  />} />
		<Route path='/servicio' element={<ServicioContainer />} />
	
		 

	  </Routes>
	);
};

export default Router;
