import { NavLink } from 'react-router-dom';
import Logo from '../assets/svg/logo-svg.svg';

const Header = () => {
	return (
		<nav className='header'>
			<div className='title'>
				<img src={Logo} alt='Logo' />
				<h1>Weather App</h1>
			</div>
			<div className='links'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/favorites'>Favorites</NavLink>
			</div>
		</nav>
	);
};

export default Header;
