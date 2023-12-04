import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Favorites } from './pages';

const App = () => {
	return (
		<div className='main-layout'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/favorites' element={<Favorites />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
