import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Exam from './pages/Exam';
import Room from './pages/Room';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exam' element={<Exam />} />
				<Route path='/room' element={<Room />} />
			</Routes>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
