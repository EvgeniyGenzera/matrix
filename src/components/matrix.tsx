import React, { useState, FC, useEffect, EventHandler, MouseEvent } from 'react';
import { matrixProps, ICell, IMatrix } from '../types/matrixTypes';
import { v4 as uuid } from 'uuid';
import { matrixGenerator, sumRows, avgColumns, avgSum, immediateNumbers, percentRow } from './math';

export const Matrix: FC<matrixProps> = ({ column, row, cells }) => {
	let styles = {
		container: {
			gridTemplateColumns: `repeat(${column},1fr)`,
		},
	};
	const [matrixContent, setMatrixContent] = useState(matrixGenerator(column, row));
	const [sum, setSum] = useState(sumRows(row, matrixContent));
	const [percent, setPercent] = useState(percentRow(sum, matrixContent, column));
	const [avg, setAvg] = useState(avgColumns(matrixContent, column, matrixContent.length));
	const [avarageSum, setAvarageSum] = useState(avgSum(avg));
	const mouseEnter = (element: ICell) => {
		let coloredFrames = immediateNumbers(matrixContent, cells, element.amount);
		for (let i = 0; i < coloredFrames.length; i++) {
			if (coloredFrames[i].id === element.id) {
				continue;
			} else {
				document.getElementById(`${coloredFrames[i].id}`)?.classList.add('yellow-hover');
			}
		}
	};
	useEffect(() => {
		setPercent(percentRow(sum, matrixContent, column));
		setAvg(avgColumns(matrixContent, column, matrixContent.length));
		setSum(sumRows(row, matrixContent));
		setAvarageSum(avgSum(avg));
	}, [matrixContent]);
	const addRow = (matrix: IMatrix, column: number, e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		let array: any[] = [];
		for (let i = 1; i <= column; i++) {
			array = [...array, { id: matrix.flat().length + i, amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100 }];
		}
		setMatrixContent([...matrix, array]);
	};
	const incrementFrame = (e: React.MouseEvent<HTMLLIElement>, array: IMatrix, item: ICell) => {
		console.log(array);
	};
	const sumEnterHandler = (e: MouseEvent<HTMLLIElement>, columns: number, content: IMatrix) => {
		// let frames = document.querySelectorAll(`.container__content li span`);
		for (let i = 0; i < columns; i++) {
			document
				.getElementById(`${content[e.currentTarget.value][i].id}`)
				?.firstElementChild?.classList.add('activePercent');
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
			<button className="mainBtn" onClick={e => addRow(matrixContent, column, e)}>
				Add row
			</button>
			<div className="matrix">
				<div className="matrix__head">
					<span className="bold">№</span>
					<ul style={styles.container}>
						{Array.from(Array(column), (e, i) => {
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
						<ul style={styles.container}>
							{Array.from(Array(matrixContent.length), (e, i) => {
								return (
									<li className="bold" key={i}>
										{i + 1}
									</li>
								);
							})}
						</ul>
					</div>

					<ul className="container__content" style={styles.container}>
						{matrixContent.flat().map((item, index) => (
							<li
								id={item.id}
								onMouseEnter={id => mouseEnter(item)}
								onMouseLeave={mouseLeave}
								className="aqua dark-text active-content"
								key={item.id}
								onClick={e => incrementFrame(e, matrixContent, item)}
							>
								{item.amount}
								<span className="percent">{percent[index] + '%'}</span>
							</li>
						))}
					</ul>

					<ul className="sum">
						{sum.map((item, index) => {
							return (
								<li
									value={index}
									onMouseEnter={e => sumEnterHandler(e, column, matrixContent)}
									onMouseLeave={() => sumLeaveHandler()}
									className="bold black-aqua"
									key={item}
								>
									{item}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="avg">
					<span className="bold">Avg</span>
					<ul style={styles.container}>
						{avg.map(item => {
							return (
								<li className="bold black-aqua" key={item}>
									{item}
								</li>
							);
						})}
					</ul>
					<span className="black-aqua center">{avarageSum}</span>
				</div>
			</div>
		</>
	);
};
