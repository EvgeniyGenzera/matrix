import { configureStore, combineReducers } from '@reduxjs/toolkit';
import matrixReducer from './reducers/matrixSlice';

const rootReducer = combineReducers({
	matrixReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
