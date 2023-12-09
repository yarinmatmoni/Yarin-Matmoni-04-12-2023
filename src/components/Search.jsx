import { weatherService } from '../services/weather.service';
import { toast } from 'react-toastify';

const Search = ({ input, setInput, onSearch }) => {
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

	return (
		<form className='search'>
			<input type='text' placeholder='Search...' value={input} onChange={handleOnChange} />
			<button type='submit' onClick={handleOnClick}>
				Search
			</button>
		</form>
	);
};

export default Search;
