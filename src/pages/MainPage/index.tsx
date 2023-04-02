import { FC, useState } from "react";

import IntroMain from "./components/IntroMain";
import SectionProduct from "./components/SectionProduct";
import Search from './components/Search';

import styles from './MainPage.module.scss';


const MainPage: FC = () => {

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
					category='Торты'
					searchText={searchText}
				/>
				<SectionProduct
					category='Десерты'
					searchText={searchText}
				/>
			</div>
		</main>
	);
};

export default MainPage;