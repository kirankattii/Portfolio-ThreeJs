import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

import { Home, About, Projects, Contact } from "./pages"
import Footer from "./components/Footer"

const App = () => {
	return (
		<main className="bg-slate-300/20 h-[100vh]">
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/*"
						element={
							<>
								<Routes>
									<Route
										path="/about"
										element={<About />}
									/>
									<Route
										path="/projects"
										element={<Projects />}
									/>
									<Route
										path="/contact"
										element={<Contact />}
									/>
								</Routes>
								<Footer />
							</>
						}
					/>
				</Routes>
			</Router>
		</main>
	)
}

export default App
