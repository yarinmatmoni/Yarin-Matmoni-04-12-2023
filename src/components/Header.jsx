import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setColorMode } from '../store/actions/weather.action';
import Logo from '../assets/svg/logo-svg.svg';
import Sun from '../assets/svg/sun.svg';
import Moon from '../assets/svg/moon.svg';

const Header = () => {
	const lightMode = useSelector((storeState) => storeState.lightMode);

	return (
		<nav className='header'>
			<div className='title'>
				<img src={Logo} alt='Logo' />
				<h1>Weather App</h1>
			</div>
			<div className='header-content'>
				<div className='links'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/favorites'>Favorites</NavLink>
				</div>
				<div className='color-mode'>
					<img src={lightMode ? Sun : Moon} alt='Color mode icon' onClick={() => setColorMode()} />
				</div>
			</div>
		</nav>
	);
};

export default Header;
