import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMatrix } from '../../types/matrixTypes';

interface MatrixState {
	matrix: IMatrix;
	rows: number;
	columns: number;
	cells: number;
	sum: any[];
	percent: any[];
	avg: any[];
	visible: boolean;
	avarageSum: number;
	percentAvgSum: any[];
}
const initialState: MatrixState = {
	matrix: [],
	rows: 0,
	columns: 0,
	visible: true,
	cells: 0,
	sum: [],
	percent: [],
	avg: [],
	avarageSum: 0,
	percentAvgSum: [],
};

export const matrixSlice = createSlice({
	name: 'matrix',
	initialState,
	reducers: {
		generateMatrix(state, action: PayloadAction<any[]>) {
			state.matrix = action.payload;
		},
		rowSum(state, action: PayloadAction<any[]>) {
			state.sum = action.payload;
		},
		addColumn(state, action: PayloadAction<number>) {
			state.columns = action.payload;
		},
		addRow(state, action: PayloadAction<number>) {
			state.rows = action.payload;
		},
		addCells(state, action: PayloadAction<number>) {
			state.cells = action.payload;
		},
		addPercent(state, action: PayloadAction<any[]>) {
			state.percent = action.payload;
		},
		addAvg(state, action: PayloadAction<any[]>) {
			state.avg = action.payload;
		},
		addAvarageSum(state, action: PayloadAction<number>) {
			state.avarageSum = action.payload;
		},
		addPercentAvgSum(state, action: PayloadAction<any[]>) {
			state.percentAvgSum = action.payload;
		},
		addComponentVisible(state, action: PayloadAction<boolean>) {
			state.visible = action.payload;
		},
	},
});

export default matrixSlice.reducer;
