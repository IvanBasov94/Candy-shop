import { FC } from "react";

import ProductItem from "../ProductItem";

import { IProduct } from "../../../../types/types";


interface IProductListProps {
	basketProducts: IProduct[],
	deleteProduct: (id: number) => void
};


const ProductList: FC<IProductListProps> = ({
	basketProducts,
	deleteProduct
}) => {

	return (
		<div>
			{
				basketProducts.map(product => (
					<ProductItem
						key={product.id}
						product={product}
						deleteProduct={deleteProduct}
					/>
				))
			}
		</div>
	);
};

export default ProductList;