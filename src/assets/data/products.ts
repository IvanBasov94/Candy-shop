import { IProduct } from '../../types/types';

import cake1 from '../img/cake1.jpg';
import cake2 from '../img/cake2.jpg';
import cake3 from '../img/cake3.jpg';
import cake4 from '../img/cake4.jpg';
import cake5 from '../img/cake5.jpg';
import cake6 from '../img/cake6.jpg';
import dessert1 from '../img/dessert1.jpg';
import dessert2 from '../img/dessert2.jpg';
import dessert3 from '../img/dessert3.jpg';


export const products: IProduct[] = [
	{
		id: 1,
		category: 'Торты',
		title: 'Ванильно-лимонный торт с малиной',
		desctiption: 'Ванильно-лимонный торт в интерпретации с малиной - сливочные, тающие во рту коржи, насыщенный лимонный крем, воздушный сырный крем и малиновая прослойка. Наша классика, которая придется по душе многим, особенно любителям цитрусовых.Состав: мука высшего сорта, сливочное масло, сахар, яйца, сливочный сыр, сливки 33%, сахарная пудра, малина, лимонная цедра, лимонный сок, семена ванили, разрыхлитель, пектин.',
		image: cake1,
		price: 3900,
		weight: 1.5,
		amount: null,
	},
	{
		id: 2,
		category: 'Торты',
		title: 'Двухъярусный торт',
		desctiption: '',
		image: cake2,
		price: 9625,
		weight: 3.5,
		amount: null,
	},
	{
		id: 3,
		category: 'Торты',
		title: 'Шоколадный Сникерс',
		desctiption: '',
		image: cake3,
		price: 3900,
		weight: 1.5,
		amount: null,
	},
	{
		id: 4,
		category: 'Торты',
		title: 'Пекановый торт c облепихой',
		desctiption: '',
		image: cake4,
		price: 3712,
		weight: 1.5,
		amount: null,
	},
	{
		id: 5,
		category: 'Торты',
		title: 'Банановый торт с грецким орехом',
		desctiption: '',
		image: cake5,
		price: 3750,
		weight: 1.5,
		amount: null,
	},
	{
		id: 6,
		category: 'Торты',
		title: 'Шоколадный торт с вишней',
		desctiption: '',
		image: cake6,
		price: 3900,
		weight: 1.5,
		amount: null,
	},
	{
		id: 7,
		category: 'Десерты',
		title: 'Макарон разных вкусов от 4 шт',
		desctiption: '',
		image: dessert1,
		price: 660,
		weight: null,
		amount: 4
	},
	{
		id: 8,
		category: 'Десерты',
		title: 'Шоколадный мусс c малиной от 4 шт',
		desctiption: '',
		image: dessert2,
		price: 1440,
		weight: null,
		amount: 4,
	},
	{
		id: 9,
		category: 'Десерты',
		title: 'Шоколадные капкейки с малиной от 6 шт',
		desctiption: '',
		image: dessert3,
		price: 1500,
		weight: null,
		amount: 6,
	},
];