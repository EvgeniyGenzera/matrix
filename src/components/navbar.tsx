import React, { FC } from 'react';
import { useAppSelector } from '../hooks/redux';
import { matrixSlice } from '../store/reducers/matrixSlice';

export const Navbar: FC = () => {
	const { visible } = useAppSelector(state => state.matrixReducer);
	const { addComponentVisible } = matrixSlice.actions;
	const clickHandler = () => {
		addComponentVisible(!visible);
	};
	return (
		<nav>
			<div className="nav-wrapper">
				<a href="#" className="brand-logo">
					Matrix Builder
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					{!visible && (
						<li onClick={clickHandler}>
							<a href="#">Создать новую матрицу</a>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};
