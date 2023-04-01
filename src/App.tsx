import { FC, useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import AutorizationPage from './pages/AutorizationPage';
import BasketPage from './pages/BasketPage';
import ContactsPage from './pages/ContactsPage';
import HelpPage from './pages/HelpPage';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';

import Header from './components/Header';
import Footer from './components/Footer';

import { products } from './assets/data/products';
import { IBasketProduct } from './types/types';


const App: FC = () => {

	const [basketProducts, setBasketProducts] = useState<IBasketProduct[]>([]);
	const [successLogin, setSuccessLogin] = useState<boolean>(false);
	const [orderProcess, setOrderProcess] = useState<boolean>(false);

	// const ProductsContext = createContext<IBasketProduct[]>([]);

	const deleteProduct = (id: number) => {
		setBasketProducts(basketProducts
			.filter(product => (product.idBasketProduct !== id))
		);
	};

	const addBasketProduct = (id: number) => {
		setBasketProducts([...basketProducts, {
			...products[id - 1],
			idBasketProduct: Date.now(),
			count: 1,
		}]);
	};

	const incrementCountProuduct = (id: number) => {
		setBasketProducts(basketProducts.map(product => {
			if (product.idBasketProduct !== id) return product;

			return {
				...product,
				count: product.count + 1,
			};
		}));
	};

	const decrementCountProuduct = (id: number) => {
		setBasketProducts(basketProducts.map(product => {
			if (product.count === 0) return product;
			if (product.idBasketProduct !== id) return product;
			return {
				...product,
				count: product.count - 1,
			};
		}));
	};

	const activeBasketProduct = basketProducts.length > 0;

	const changeSuccessLogin = () => {
		setSuccessLogin(true);
	};

	const handleOrderProcess = () => {
		setOrderProcess(true);
		setBasketProducts([]);
	};

	useEffect(() => {
		setTimeout(() => {
			setOrderProcess(false);
		}, 2000);
	}, [orderProcess]);

	return (
		<>
			<Header
				activeBasketProduct={activeBasketProduct}
				successLogin={successLogin}
			/>
			<Routes>
				{/* <ProductsContext.Provider value={products}>
					<Route path='/' element={
						<MainPage />
					} />
				</ProductsContext.Provider> */}
				<Route path='/' element={
					<MainPage products={products} />
				} />
				<Route path='/help' element={<HelpPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/autorization' element={
					<AutorizationPage
						successLogin={successLogin}
						changeSuccessLogin={changeSuccessLogin}
					/>
				} />
				<Route path='/basket' element={
					<BasketPage
						basketProducts={basketProducts}
						deleteProduct={deleteProduct}
						activeBasketProduct={activeBasketProduct}
						incrementCountProuduct={incrementCountProuduct}
						decrementCountProuduct={decrementCountProuduct}
						handleOrderProcess={handleOrderProcess}
						orderProcess={orderProcess}
					/>
				} />
				<Route path='/product/:id' element={
					<ProductPage
						addBasketProduct={addBasketProduct}
					/>
				} />
			</Routes >
			<Footer />
		</>
	);
}

export default App;
