import { ICell, IMatrix } from '../types/matrixTypes';

export const sumRows = (row: number, array: IMatrix) => {
	let sum: any[] = [];

	array.map(item => {
		sum.push(item.reduce((a: number, b: ICell) => a + b.amount, 0));
	});
	return sum;
};
export const avgColumns = (array: IMatrix, column: number, row: number) => {
	let avg: any[] = [];
	for (let i = 0; i < column; i++) {
		let sum = 0;
		// avg.push([]);
		for (let j = 0; j < row; j++) {
			sum += array[j][i].amount;
		}
		avg = [...avg, Math.floor(sum / row)];
	}
	return avg;
};
export const avgSum = (avg: any[]) => {
	return avg.reduce((a: number, b: number) => a + b, 0);
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

export const immediateNumbers = (array: IMatrix, cells: number, number: number) => {
	// let immediate = array.flat();
	// let newImmediate: any[] = [];
	// for (let i = 0; i < cells; i++) {
	// 	newImmediate = [
	// 		...newImmediate,
	// 		immediate.reduce((a: number, b: ICell) => {
	// 			return Math.abs(b.amount - number) < Math.abs(a - number) ? b.amount : a;
	// 		}, immediate[0].amount),
	// 	];

	// 	immediate.splice(
	// 		immediate.findIndex(item => {
	// 			return item.amount === newImmediate[i];
	// 		}),
	// 		1
	// 	);
	// }
	// console.log(newImmediate);
	let immediate = array.flat();
	let newImmediate: any[] = [];
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
