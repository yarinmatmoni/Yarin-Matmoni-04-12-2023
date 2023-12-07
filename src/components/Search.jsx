import { loadWeatherData } from '../store/actions/weather.action';
import { weatherService } from '../services/weather.service';

const Search = ({ input, setInput }) => {
	const handleOnChange = (event) => {
		setInput(() => event.target.value);
	};

	const handleOnClick = () => {
		const isValid = weatherService.isValidSearch(input);
		if (isValid) {
			loadWeatherData(input);
			setInput('');
		} else console.log('Error');
	};

	const handleOnEnter = (event) => {
		if (event.key === 'Enter') {
			handleOnClick();
		}
	};

	return (
		<div className='search'>
			<input type='text' placeholder='Search...' value={input} onChange={handleOnChange} onKeyDown={handleOnEnter} />
			<button onClick={handleOnClick}>Search</button>
		</div>
	);
};

export default Search;
