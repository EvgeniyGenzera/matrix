import { createSlice, configureStore } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './state';

const matrixSlice = createSlice({
	name: 'matrix',
	initialState: INITIAL_STATE,
	reducers: {
		add: (state, action) => {
			// add item to basket using `state` and `action` props
		},
	},
});

const store = configureStore({ reducer: matrixSlice.reducer });

export const { add } = matrixSlice.actions;

export { matrixSlice, store };
