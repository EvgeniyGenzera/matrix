import React from 'react';
import { Navbar } from './components/navbar';
import { Builder } from './components/builder';
import { Matrix } from './components/matrix';

function App() {
	return (
		<>
			<Navbar />
			<Builder />
			<Matrix />
		</>
	);
}

export default App;
