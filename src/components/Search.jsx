import { setInputSearch } from '../store/actions/weather.action';

const Search = ({ inputSearch }) => {
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
