import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import GamesList from "./pages/GamesList";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public Routes */}
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />

				{/* Private Routes */}
				<Route
					path='/'
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				<Route
					path='/games'
					element={
						<PrivateRoute>
							<GamesList />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
