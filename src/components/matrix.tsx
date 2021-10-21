import React, { useState, FC, useEffect } from 'react';
import { matrixProps } from '../types/matrixTypes';
import { matrixGenerator, sumRows, avgColumns } from './math';

export const Matrix: FC<matrixProps> = ({ column, row, cells }) => {
	const [matrixContent, setMatrixContent] = useState(matrixGenerator(column, row));
	const [sum, setSum] = useState(sumRows(row, matrixContent));
	const [avg, setAvg] = useState([avgColumns(matrixContent)]);
	const [percent, setPercent] = useState([]);
	const content = matrixContent.flat().map(item => (
		<li className="aqua dark-text" key={item.id}>
			{item.amount}
		</li>
	));
	let matrixSum, matrixAvg, avgSum;
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
						{content}
					</ul>

					<ul className="sum">
						{sum.map(item => {
							return (
								<li className="bold" key={item}>
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
								<li className="bold" key={item}>
									{item}
								</li>
							);
						})}
					</ul>
					<span className="black-aqua center">324</span>
				</div>
			</div>
		</>
	);
};
