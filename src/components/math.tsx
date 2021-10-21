import { ICell, IMatrix } from '../types/matrixTypes';

export const sumRows = (row: number, array: IMatrix) => {
	let sum: any[] = [];

	array.map(item => {
		sum.push(item.reduce((a: number, b: ICell) => a + b.amount, 0));
	});
	return sum;
};
export const avgColumns = (array: IMatrix) => {
	let avg: any[] = [];
  for( let i = 0; i < array.length;i++){
		array.map(item => {
			avg.push(item[]);
		});
	}

	// let x = avg.reduce((a: number, b: ICell) => a + b.amount, 0);
	// return Math.floor(x / avg.length);
};
export const percent = () => {};

export const matrixGenerator = (cols: number, rows: number) => {
	let mass: any[] = [];
	for (let i = 1; i <= cols * rows; ) {
		let array: any[] = [];
		for (let j = 0; j < cols; j++) {
			array.push({ id: i, amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100 });
			i++;
		}
		mass.push(array);
	}
	return mass;
};
