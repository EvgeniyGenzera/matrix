import React, { useState, FC } from 'react';
import { Navbar } from './components/navbar';
import { Builder } from './components/builder';
import { Matrix } from './components/matrix';

const App: FC = () => {
	const [row, setRow] = useState(0);
	const [column, setColumn] = useState(0);
	const [cells, setCells] = useState(0);
	const [visible, setVisible] = useState(true);
	return (
		<>
			<Navbar setVisible={setVisible} visible={visible} />
			{visible && <Builder setColumn={setColumn} setRow={setRow} setCells={setCells} setVisible={setVisible} />}
			{!visible && <Matrix row={row} column={column} cells={cells} />}
		</>
	);
};

export default App;
