import { FC } from 'react';

import styles from './SearchForm.module.scss';
import search from '../../../../assets/img/search.png';


interface ISearchFormProps {
	searchText: string,
	changeSearchText: (event: React.ChangeEvent<HTMLInputElement>) => void,
}


const SearchForm: FC<ISearchFormProps> = ({
	searchText,
	changeSearchText
}) => {

	return (
		<div className={styles.searchForm}>
			<img
				src={search}
				alt="Icon Search"
				className={styles.icon}
			/>
			<input
				type="search"
				value={searchText}
				onChange={(event) => changeSearchText(event)}
				placeholder='Поиск...'
				className={styles.input}
			/>
		</div>
	);
};

export default SearchForm;