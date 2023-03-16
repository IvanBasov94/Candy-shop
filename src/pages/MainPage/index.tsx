import { FC, useState } from "react";

import IntroMain from "./components/IntroMain";
import SectionProduct from "./components/SectionProduct";
import Search from './components/Search';

import { IProduct } from "../../types/types";
import styles from './MainPage.module.scss';

interface IMainPageProps {
	products: IProduct[],
};


const MainPage: FC<IMainPageProps> = ({ products }) => {

	const [searchText, setSearchText] = useState<string>('');

	const changeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value);
	};

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<IntroMain />
				<Search
					searchText={searchText}
					changeSearchText={changeSearchText}
				/>
				<SectionProduct
					products={products}
					category='Торты'
					searchText={searchText}
				/>
				<SectionProduct
					products={products}
					category='Десерты'
					searchText={searchText}
				/>
			</div>
		</main>
	);
};

export default MainPage;