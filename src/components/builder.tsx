import React, { FC, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { matrixSlice } from '../store/reducers/matrixSlice';
import { matrixGenerator } from './utils';

export const Builder: FC = () => {
	const { rows, columns, visible } = useAppSelector(state => state.matrixReducer);
	const { generateMatrix, addColumn, addRow, addCells, addComponentVisible } = matrixSlice.actions;
	const columnRef = useRef<HTMLInputElement>(null);
	const rowRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();
	const cellsRef = useRef<HTMLInputElement>(null);
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(addRow(Number(rowRef.current?.value)));
		dispatch(addColumn(Number(columnRef.current?.value)));
		dispatch(addCells(Number(cellsRef.current?.value)));
		dispatch(addComponentVisible(!visible));
		dispatch(generateMatrix(matrixGenerator(Number(columnRef.current?.value), Number(rowRef.current?.value))));
	};

	return (
		<div className="builder lighten-2 card-panel teal">
			<h1 className="builder__title yellow-text">Matrix builder</h1>
			<form className="form">
				<p className="fields white-text">
					Enter the number of columns
					<input ref={columnRef} className="fields__item white" type="number" min="0" />
				</p>
				<p className="fields white-text">
					Enter the number of rows
					<input className="fields__item white" type="number" ref={rowRef} min="0" />
				</p>
				<p className="fields white-text">
					Enter the number of cells
					<input className="fields__item white" ref={cellsRef} type="number" min="0" />
				</p>
				<button onClick={clickHandler} className="form__btn red-text">
					Create Matrix
				</button>
			</form>
		</div>
	);
};
