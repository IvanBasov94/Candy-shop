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
import { IProduct } from './types/types';
import { IBasketProductsContext } from './types/types';
import { ILoginContext } from './types/types';


export const ProductsContext = createContext<IProduct[]>(products);
export const LoginContext = createContext<ILoginContext>({
	successLogin: false,
	changeSuccessLogin: () => false,
});
export const BasketProductsContext =
	createContext<IBasketProductsContext>({
		basketProducts: [],
		deleteProduct: () => { },
		activeBasketProduct: false,
		incrementCountProuduct: () => { },
		decrementCountProuduct: () => { },
		handleOrderProcess: () => false,
		orderProcess: false,
	});


const App: FC = () => {

	const [basketProducts, setBasketProducts] = useState<IBasketProduct[]>([]);
	const [successLogin, setSuccessLogin] = useState<boolean>(false);
	const [orderProcess, setOrderProcess] = useState<boolean>(false);

	useEffect(() => {
		const localDataBasketProducts = localStorage.getItem('basketProducts');
		const data = localDataBasketProducts ?
			JSON.parse(localDataBasketProducts) : [];
		setBasketProducts(data);
	}, []);

	useEffect(() => {
		const localDataSuccessLogin = localStorage.getItem('successLogin');
		const data = localDataSuccessLogin ?
			JSON.parse(localDataSuccessLogin) : false;
		setSuccessLogin(data);
	}, []);

	useEffect(() => {
		localStorage.setItem('basketProducts',
			JSON.stringify(basketProducts));
	}, [basketProducts]);

	useEffect(() => {
		localStorage.setItem('successLogin',
			JSON.stringify(successLogin));
	}, [successLogin]);

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
		setSuccessLogin(!successLogin);
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
				<Route path='/' element={
					<ProductsContext.Provider value={products}>
						<MainPage />
					</ProductsContext.Provider>
				} />
				<Route path='/help' element={<HelpPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/autorization' element={
					<LoginContext.Provider value={{
						successLogin,
						changeSuccessLogin
					}}>
						<AutorizationPage />
					</LoginContext.Provider>
				} />
				<Route path='/basket' element={
					<BasketProductsContext.Provider value={{
						basketProducts,
						deleteProduct,
						activeBasketProduct,
						incrementCountProuduct,
						decrementCountProuduct,
						handleOrderProcess,
						orderProcess,
					}}>
						<BasketPage />
					</BasketProductsContext.Provider>
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
