import { FC } from "react";

import ProductItem from "../ProductItem";

import styles from './ProductList.module.scss';
import { IProduct } from "../../../../types/types";

interface IProductListProps {
	products: IProduct[],
};

const ProductList: FC<IProductListProps> = ({ products }) => {
	return (
		<div>
			{
				products.map(product => (
					<ProductItem
						key={product.id}
						product={product}
					/>
				))
			}
		</div>
	);
};

export default ProductList;