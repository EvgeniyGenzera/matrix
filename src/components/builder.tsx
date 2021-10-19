import React from 'react';

export const Builder: React.FC = () => (
	<div className="builder lighten-2 card-panel teal">
		<h1 className="title yellow-text">Matrix builder</h1>
		<form className="form">
			<p className="fields white-text">
				Enter the number of columns <input className="white" type="number" />
			</p>
			<p className="fields white-text">
				Enter the number of rows <input className="white" type="number" />
			</p>
			<p className="fields white-text">
				Enter the number of cells <input className="white" type="number" />
			</p>
			<button className="btn red-text">Create Matrix</button>
		</form>
	</div>
);
