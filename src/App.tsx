import { Suspense, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import './styles/index.scss';
import { useTheme } from "./theme/useTheme";

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync />}/>
					<Route path={'/'} element={<MainPageAsync />}/>
				</Routes>
			</Suspense>
		</div>
	)
}