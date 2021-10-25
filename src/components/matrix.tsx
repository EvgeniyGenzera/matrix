import React, { useState, FC, useEffect, EventHandler, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { matrixSlice } from '../store/reducers/matrixSlice';
import { ICell, IMatrix } from '../types/matrixTypes';

import {
	matrixGenerator,
	sumRows,
	avgColumns,
	avgSum,
	immediateNumbers,
	percentRow,
	searchRow,
	avgSumPercent,
} from './utils';

export const Matrix: FC = () => {
	const { generateMatrix, increment, rowSum, addAvarageSum, addAvg, addPercent, addPercentAvgSum } =
		matrixSlice.actions;
	const { matrix, columns, rows, cells, percent, sum, avg, avarageSum, percentAvgSum, visible } = useAppSelector(
		state => state.matrixReducer
	);
	const dispatch = useAppDispatch();
	let styles = {
		container: {
			gridTemplateColumns: `repeat(${columns},1fr)`,
		},
	};
	// const [matrixContent, setMatrixContent] = useState(matrixGenerator(columns, row));
	// const [sum, setSum] = useState(sumRows(rows, matrix));
	// const [percent, setPercent] = useState(percentRow(sum, matrix, columns));
	// const [avg, setAvg] = useState(avgColumns(matrix, columns, matrix.length));
	// const [avarageSum, setAvarageSum] = useState(avgSum(avg));
	// const [percentAvgSum, setPecentAvgSum] = useState(avgSumPercent(avarageSum, avg, columns));
	const mouseEnter = (element: ICell) => {
		let coloredFrames = immediateNumbers(matrix, cells, element.amount);
		for (let i = 0; i < coloredFrames.length; i++) {
			if (coloredFrames[i].id === element.id) {
				continue;
			} else {
				document.getElementById(`${coloredFrames[i].id}`)?.classList.add('yellow-hover');
			}
		}
	};
	useEffect(() => {
		dispatch(rowSum(sumRows(rows, matrix)));
		dispatch(addAvg(avgColumns(matrix, columns, matrix.length)));
	}, [matrix]);

	useEffect(() => {
		dispatch(addPercent(percentRow(sum, matrix, columns)));
	}, [sum]);
	useEffect(() => {
		dispatch(addAvarageSum(avgSum(avg)));
	}, [avg]);
	useEffect(() => {
		dispatch(addPercentAvgSum(avgSumPercent(avarageSum, avg, columns)));
	}, [avarageSum]);

	const addRow = (matrix: IMatrix, columns: number, e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		let array: any[] = [];
		for (let i = 1; i <= columns; i++) {
			array = [
				...array,
				{ id: Math.random().toString(36).slice(-4), amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100 },
			];
		}
		dispatch(generateMatrix([...matrix, array]));
	};
	const incrementFrame = (e: React.MouseEvent<HTMLLIElement>, array: IMatrix, item: ICell) => {
		dispatch(increment(item));
	};
	const sumEnterHandler = (e: MouseEvent<HTMLLIElement>, columnss: number, content: IMatrix) => {
		for (let i = 0; i < columnss; i++) {
			document
				.getElementById(`${content[e.currentTarget.value][i].id}`)
				?.firstElementChild?.classList.add('activePercent');
		}
	};
	const avgMouseEnter = (columnss: number) => {
		let avg = document.querySelectorAll('.avg li span');
		for (let i = 0; i < columnss; i++) {
			avg[i]?.classList.add('activePercent');
		}
	};
	const deleteRow = (matrix: IMatrix, numberRow: number) => {
		let array = [...matrix];
		array.splice(numberRow, 1);
		dispatch(generateMatrix(array));
	};
	const avgMouseLeave = () => {
		let avg = document.querySelectorAll('.avg li span');
		for (let i = 0; i < avg.length; i++) {
			avg[i]?.classList.remove('activePercent');
		}
	};
	const sumLeaveHandler = () => {
		let frames = document.querySelectorAll('.container__content li span');
		for (let i = 0; i < frames.length; i++) {
			frames[i].classList.remove('activePercent');
		}
	};
	const mouseLeave = () => {
		let coloredFrames = Array.from(document.querySelectorAll('.container__content li'));
		for (let i = 0; i < coloredFrames.length; i++) {
			coloredFrames[i].classList.remove('yellow-hover');
		}
	};

	return (
		<>
			<button className="mainBtn" onClick={e => addRow(matrix, columns, e)}>
				Add row
			</button>
			<div className="matrix">
				<div className="matrix__head">
					<span className="bold">№</span>
					<ul style={styles.container}>
						{Array.from(Array(columns), (e, i) => {
							return (
								<li className="bold" key={i}>
									{i + 1}
								</li>
							);
						})}
					</ul>
					<span className="bold center">Sum</span>
				</div>
				<div className="container">
					<div className="container__rows">
						<ul>
							{Array.from(Array(matrix.length), (e, i) => {
								return (
									<li className="bold" key={i}>
										{i + 1}
									</li>
								);
							})}
						</ul>
					</div>

					<ul className="container__content" style={styles.container}>
						{matrix.flat().map((item, index) => (
							<li
								id={`${item.id}`}
								onMouseEnter={id => mouseEnter(item)}
								onMouseLeave={mouseLeave}
								className="aqua dark-text active-content"
								key={item.id}
								onClick={e => incrementFrame(e, matrix, item)}
							>
								{item.amount}
								<span className="percent">{percent[index] + '%'}</span>
							</li>
						))}
					</ul>

					<ul className="sum">
						{sum.map((item, index) => {
							return (
								<li key={item}>
									<ul>
										<li
											value={index}
											onMouseEnter={e => sumEnterHandler(e, columns, matrix)}
											onMouseLeave={sumLeaveHandler}
											className="bold black-aqua"
										>
											{item}
										</li>
									</ul>
									<span onClick={() => deleteRow(matrix, index)}>&#10060;</span>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="avg">
					<span className="bold">Avg</span>
					<ul style={styles.container}>
						{avg.map((item, index) => {
							return (
								<li className="bold black-aqua" key={item}>
									{item}
									<span className="percent">{percentAvgSum[index]}%</span>
								</li>
							);
						})}
					</ul>
					<span onMouseEnter={() => avgMouseEnter(columns)} onMouseLeave={avgMouseLeave} className="black-aqua center">
						{avarageSum}
					</span>
				</div>
			</div>
		</>
	);
};
