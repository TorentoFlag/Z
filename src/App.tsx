import { Suspense } from "react";
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import './index.scss';


export const App = () => {
	return (
		<div className="app">
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