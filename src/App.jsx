import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Favorites } from './pages';

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</Router>
	);
};

export default App;
