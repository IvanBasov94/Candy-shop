export interface IProduct {
	id: number,
	category: string,
	title: string,
	desctiption: string,
	image: string,
	price: number,
	weight: number | null,
	amount: number | null,
};

export interface IInfoHelp {
	id: number,
	category: string,
	title: string,
	text: string,
	visible: boolean,
};