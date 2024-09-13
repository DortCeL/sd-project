import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import GamesList from "./pages/GamesList";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/games' element={<GamesList />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
