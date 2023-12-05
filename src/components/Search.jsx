import { loadWeatherData } from '../store/actions/weather.action';

const Search = ({ input, setInput }) => {
	const handleOnChange = (event) => {
		setInput(() => event.target.value);
	};

	const handleOnClick = () => {
		loadWeatherData(input);
	};

	return (
		<div className='search'>
			<input type='text' placeholder='Search...' value={input} onChange={handleOnChange} />
			<button onClick={handleOnClick}>Search</button>
		</div>
	);
};

export default Search;
