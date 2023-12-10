import { weatherService } from '../services/weather.service';
import { toast } from 'react-toastify';
import { setUnit } from '../store/actions/weather.action';

const Search = ({ input, setInput, onSearch, unit }) => {
	const handleOnChange = (event) => {
		setInput(() => event.target.value);
	};

	const handleOnClick = (e) => {
		e.preventDefault();
		const isValid = weatherService.isValidSearch(input);
		if (isValid) {
			onSearch();
			setInput('');
		} else toast.error('Invalid input - English letters only');
	};

	const handleOnSetUnit = () => {
		setUnit();
	};

	return (
		<form className='search'>
			<input type='text' placeholder='Search...' value={input} onChange={handleOnChange} />
			<button type='submit' onClick={handleOnClick}>
				Search
			</button>
			<div className='unit' data-unit={unit} onClick={() => handleOnSetUnit()} />
		</form>
	);
};

export default Search;
