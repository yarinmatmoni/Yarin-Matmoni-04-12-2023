import { weatherService } from '../services/weather.service';
import { toast } from 'react-toastify';
import { setUnit } from '../store/actions/weather.action';

const Search = ({ input, setInput, onSearch, unit }) => {
	const handleOnChange = (event) => {
		setInput(() => event.target.value);
	};

	const handleOnClick = (event) => {
		event.preventDefault();
		const isValid = weatherService.isValidSearch(input);

		if (isValid) {
			onSearch();
			setInput('');
		} else toast.error('Invalid input - English letters only');
	};

	return (
		<form className='search'>
			<input type='text' placeholder='Search...' value={input} onChange={handleOnChange} />
			<button type='submit' onClick={handleOnClick}>
				Search
			</button>
			<div className='unit' data-unit={unit} onClick={() => setUnit()} />
		</form>
	);
};

export default Search;
