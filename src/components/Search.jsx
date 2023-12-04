import { useSelector } from 'react-redux';
import { setInputSearch } from '../store/actions/weather.action';

const Search = () => {
	const inputSearch = useSelector((storeState) => storeState.search);

	const handleOnChange = (event) => {
		setInputSearch(event.target.value);
	};

	return (
		<div className='search'>
			<input type='text' placeholder='Search...' value={inputSearch} onChange={handleOnChange} />
		</div>
	);
};

export default Search;
