import React from 'react';

export const Builder: React.FC = () => (
	<div className="builder lighten-2 card-panel teal">
		<h1 className="builder__title yellow-text">Matrix builder</h1>
		<form className="builder__form">
			<p className="builder__form__fields white-text">
				Enter the number of columns <input className="builder__form__fields__item white" type="number" />
			</p>
			<p className="builder__form__fields white-text">
				Enter the number of rows <input className="builder__form__fields__item white" type="number" />
			</p>
			<p className="builder__form__fields white-text">
				Enter the number of cells <input className="builder__form__fields__item white" type="number" />
			</p>
			<button className="builder__form__btn red-text">Create Matrix</button>
		</form>
	</div>
);
