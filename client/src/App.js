import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePage from './layout/BasePage';
import Home from './pages/Home/index.jsx';

export default function AppRoutes() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<BasePage />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Home />} />
						<Route path="register" element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
