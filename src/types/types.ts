export interface IProduct {
	id: number,
	category: string,
	title: string,
	desctiption: string,
	image: string,
	price: number,
	weight: number | null,
	amount: number | null,
	defect: string,
	creamСoverage: string,
	date: string,
	creamColor: string,
	berryDecoration: string,
};

export interface IInfoHelp {
	id: number,
	category: string,
	title: string,
	text: string,
	visible: boolean,
};

export interface ITypeInput {
	id: number,
	text: string,
	type: string,
	size: string,
	color: string,
};