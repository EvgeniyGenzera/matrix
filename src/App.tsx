import React, { useState, FC } from 'react';
import { Navbar } from './components/navbar';
import { Builder } from './components/builder';
import { Matrix } from './components/matrix';
import { useAppSelector } from './hooks/redux';

const App: FC = () => {
	const { visible } = useAppSelector(state => state.matrixReducer);
	return (
		<>
			<Navbar />
			{visible && <Builder />}
			{!visible && <Matrix />}
		</>
	);
};

export default App;
