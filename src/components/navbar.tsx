import React, { FC } from 'react';
import { navbarProps } from '../types/matrixTypes';

export const Navbar: FC<navbarProps> = ({ setVisible, visible }) => {
	const clickHandler = () => {
		setVisible(!visible);
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
