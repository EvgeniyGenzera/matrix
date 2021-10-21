import React, { FC, useRef } from 'react';
import { builderProps } from '../types/matrixTypes';

export const Builder: FC<builderProps> = ({ setColumn, setRow, setCells, setVisible }) => {
	const columnRef = useRef<HTMLInputElement>(null);
	const rowRef = useRef<HTMLInputElement>(null);
	const cellsRef = useRef<HTMLInputElement>(null);
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		setColumn(Number(columnRef.current?.value) || 0);
		setRow(Number(rowRef.current?.value) || 0);
		setCells(Number(cellsRef.current?.value) || 0);
		setVisible(false);
	};

	return (
		<div className="builder lighten-2 card-panel teal">
			<h1 className="builder__title yellow-text">Matrix builder</h1>
			<form className="form">
				<p className="fields white-text">
					Enter the number of columns
					<input ref={columnRef} className="fields__item white" type="number" />
				</p>
				<p className="fields white-text">
					Enter the number of rows
					<input className="fields__item white" type="number" ref={rowRef} />
				</p>
				<p className="fields white-text">
					Enter the number of cells
					<input className="fields__item white" ref={cellsRef} type="number" />
				</p>
				<button onClick={clickHandler} className="form__btn red-text">
					Create Matrix
				</button>
			</form>
		</div>
	);
};
