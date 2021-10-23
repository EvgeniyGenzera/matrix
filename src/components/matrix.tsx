import React, { useState, FC, useEffect, EventHandler } from 'react';
import { matrixProps, ICell } from '../types/matrixTypes';
import { matrixGenerator, sumRows, avgColumns, avgSum, immediateNumbers } from './math';

export const Matrix: FC<matrixProps> = ({ column, row, cells }) => {
	const [matrixContent, setMatrixContent] = useState(matrixGenerator(column, row));
	const [sum, setSum] = useState(sumRows(row, matrixContent));
	const [avg, setAvg] = useState(avgColumns(matrixContent, column, row));
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
	const mouseLeave = () => {
		let coloredFrames = Array.from(document.querySelectorAll('.container__content li'));
		for (let i = 0; i < coloredFrames.length; i++) {
			coloredFrames[i].classList.remove('yellow-hover');
		}
	};
	const [percent, setPercent] = useState([]);
	const styles = {
		container: {
			gridTemplateColumns: `repeat(${column},1fr)`,
		},
	};

	return (
		<>
			<button className="mainBtn">Add row</button>
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
							{Array.from(Array(row), (e, i) => {
								return (
									<li className="bold" key={i}>
										{i + 1}
									</li>
								);
							})}
						</ul>
					</div>

					<ul className="container__content" style={styles.container}>
						{matrixContent.flat().map(item => (
							<li
								id={item.id}
								onMouseEnter={id => mouseEnter(item)}
								onMouseLeave={mouseLeave}
								className="aqua dark-text"
								key={item.id}
							>
								{item.amount}
							</li>
						))}
					</ul>

					<ul className="sum">
						{sum.map(item => {
							return (
								<li className="bold black-aqua" key={item}>
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
