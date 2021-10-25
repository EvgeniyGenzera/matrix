import React from 'react';

export interface builderProps {
	setColumn: (value: number) => void;
	setRow: (value: number) => void;
	setCells: (value: number) => void;
	setVisible: (value: boolean) => void;
}

export interface matrixProps {
	column: number;
	row: number;
	cells: number;
}
export interface navbarProps {
	setVisible: (value: boolean) => void;
	visible: boolean;
}

export interface ICell {
	id: number;
	amount: number;
}
export type IMatrix = Array<Array<ICell>>;
