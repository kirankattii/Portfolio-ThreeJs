import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.svg"
const Navbar = () => {
	return (
		<header className="header">
			<NavLink to="/">
				<img
					src="https://thumbs.dreamstime.com/b/k-creative-logo-design-vector-art-any-type-business-company-name-starts-letter-right-153077946.jpg"
					alt="logo"
					width={45}
					className="w-18 h-18 object-contain"
				/>
			</NavLink>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? "text-blue-600" : "text-black"
					}
				>
					About
				</NavLink>
				<NavLink
					to="/projects"
					className={({ isActive }) =>
						isActive ? "text-blue-600" : "text-black"
					}
				>
					Projects
				</NavLink>
			</nav>
		</header>
	)
}

export default Navbar
