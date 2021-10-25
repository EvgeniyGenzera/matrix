import { ICell, IMatrix } from '../types/matrixTypes';

export const sumRows = (row: number, array: IMatrix) => {
	let sum: number[] = [];

	array.map(item => {
		sum.push(item.reduce((a: number, b: ICell) => a + b.amount, 0));
	});
	return sum;
};
export const avgColumns = (array: IMatrix, column: number, row: number) => {
	let avg: number[] = [];
	for (let i = 0; i < column; i++) {
		let sum = 0;
		for (let j = 0; j < row; j++) {
			sum += array[j][i].amount;
		}
		avg = [...avg, Math.floor(sum / row)];
	}
	return avg;
};
export const avgSum = (avg: number[]) => {
	return avg.reduce((a: number, b: number) => a + b, 0);
};

export const avgSumPercent = (sum: number, avg: number[], column: number) => {
	let percent: number[] = [];
	for (let j = 0; j < column; j++) {
		percent = [...percent, Math.floor((avg[j] * 100) / sum)];
	}
	return percent;
};
export const percentRow = (sum: number[], array: IMatrix, column: number) => {
	let percent: number[] = [];
	for (let i = 0; i < sum.length; i++) {
		for (let j = 0; j < column; j++) {
			if (array[i] != undefined) {
				percent = [...percent, Math.floor((array[i][j].amount * 100) / sum[i])];
			}
		}
	}
	return percent;
};
export const matrixGenerator = (cols: number, rows: number) => {
	let mass: any[] = [];
	for (let i = 1; i <= cols * rows; ) {
		let array: object[] = [];
		for (let j = 0; j < cols; j++) {
			array.push({
				id: Math.random().toString(36).slice(-4),
				amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
			});
			i++;
		}
		mass.push(array);
	}
	return mass;
};
export const searchRow = (frame: ICell, array: IMatrix) => {
	let x: number = 0;
	array.forEach(item => {
		item.forEach(el => {
			if (el.id === frame.id) {
				x = array.indexOf(item);
			}
		});
	});
	return x;
};
export const immediateNumbers = (array: IMatrix, cells: number, number: number) => {
	let immediate = array.flat();
	let newImmediate: ICell[] = [];
	for (let i = 0; i < cells; i++) {
		newImmediate = [
			...newImmediate,
			immediate.reduce((a: ICell, b: ICell) => {
				return Math.abs(b.amount - number) < Math.abs(a.amount - number) ? b : a;
			}, immediate[0]),
		];
		immediate.splice(
			immediate.findIndex(item => {
				return item.amount === newImmediate[i].amount;
			}),
			1
		);
	}
	return newImmediate;
};
