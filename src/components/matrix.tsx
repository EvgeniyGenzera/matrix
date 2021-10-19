import React from 'react';

export const Matrix: React.FC = () => (
	<>
		<button className="matrix-btn">Add row</button>
		{/* <div className="matrix-table">
			<div className="matrix-head">
				<ul>
					<li>№</li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>Sum</li>
				</ul>
			</div>
			<div className="matrix-container">
				<ul className="first-column">
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>Avg</li>
				</ul>
				<ul className="matrix-content">
					<li>543</li>
					<li>231</li>
					<li>321</li>
					<li>231</li>
					<li>432</li>
					<li>767</li>
					<li>566</li>
					<li>322</li>
					<li>344</li>
					<li>222</li>
					<li>111</li>
					<li>333</li>
					<li>444</li>
					<li>555</li>
					<li>666</li>
					<li>777</li>
				</ul>
				<ul className="sum-column">
					<li>333</li>
					<li>444</li>
					<li>555</li>
					<li>666</li>
					<li>777</li>
				</ul>
			</div>
		</div> */}
		<div className='matrix'>
			<ul>
				<li>№</li>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>Avg</li>
			</ul>
			<ul>
				<li>1</li>
				<li>642</li>
				<li>233</li>
				<li>123</li>
				<li>653</li>
				<li>764</li>
			</ul>
      <ul>
				<li>2</li>
				<li>642</li>
				<li>233</li>
				<li>123</li>
				<li>653</li>
				<li>764</li>
			</ul>
      <ul>
				<li>3</li>
				<li>642</li>
				<li>233</li>
				<li>123</li>
				<li>653</li>
				<li>764</li>
			</ul>
      <ul>
				<li>Sum</li>
				<li>642</li>
				<li>233</li>
				<li>123</li>
				<li>653</li>
				<li>764</li>
			</ul>
		</div>
	</>
);
