import React from 'react';

export const Matrix: React.FC = () => (
	<>
		<button className="matrix-btn">Add row</button>
		<div className="matrix">
			<div className="matrix-head">
				<span className="bold">№</span>
				<ul style={styles.container}>
					{Array.from(Array(matrixColumns), (e, i) => {
						return (
							<li className="bold" key={i}>
								{i + 1}
							</li>
						);
					})}
				</ul>
				<span className="bold center">Sum</span>
			</div>
			<div className="matrix-container">
				<div className="matrix-rows">
					<ul style={styles.container}>
						{Array.from(Array(matrixRows), (e, i) => {
							return (
								<li className="bold" key={i}>
									{i + 1}
								</li>
							);
						})}
					</ul>
				</div>
				<ul className="matrix-content" style={styles.container}>
					{matrixContent}
				</ul>
				<ul className="matrix-sum">
					<li className="black-aqua">
						sum1<span>&#x2715;</span>
					</li>
					<li className="black-aqua">
						sum2<span>&#x2715;</span>
					</li>
					<li className="black-aqua">
						sum3<span>&#x2715;</span>
					</li>
					<li className="black-aqua">
						sum4<span>&#x2715;</span>
					</li>
				</ul>
			</div>
			<div className="matrix-avg">
				<span className="bold">Avg</span>
				<ul style={styles.container}>
					<li className="black-aqua">Avg</li>
					<li className="black-aqua">avg2</li>
					<li className="black-aqua">avg3</li>
					<li className="black-aqua">avg4</li>
				</ul>
				<span className="black-aqua">324</span>
			</div>
		</div>
	</>
);
const matrixRows = 4;
const matrixColumns = 4;
const matrixContent = [642, 965, 130, 939, 642, 753, 513, 456, 212, 341, 417, 878, 506, 393, 517, 519].map(item => (
	<li className="aqua" key={item}>
		{item}
	</li>
));
let matrixSum, matrixAvg, avgSum;
const styles = {
	container: {
		gridTemplateColumns: `repeat(${matrixRows},1fr)`,
	},
};
