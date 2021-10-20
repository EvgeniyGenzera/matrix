import React from 'react';
import { Navbar } from './components/navbar';
import { Builder } from './components/builder';
import { Matrix } from './components/matrix';

const App: React.FC = () => {
	return (
		<>
			<Navbar />
			<Builder />
			<Matrix />
		</>
	);
};

export default App;
