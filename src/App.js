import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import DogList from "./components/DogList";
import DogDetails from "./components/DogDetails";
import whiskey from "./images/whiskey.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import tubby from "./images/tubby.jpg";
import "./App.css";

function App() {
	const dogs = [
		{
			name: "Whiskey",
			age: 5,
			src: whiskey,
			facts: [
				"Whiskey loves eating popcorn.",
				"Whiskey is a terrible guard dog.",
				"Whiskey wants to cuddle with you!",
			],
		},
		{
			name: "Duke",
			age: 3,
			src: duke,
			facts: [
				"Duke believes that ball is life.",
				"Duke likes snow.",
				"Duke enjoys pawing other dogs.",
			],
		},
		{
			name: "Perry",
			age: 4,
			src: perry,
			facts: [
				"Perry loves all humans.",
				"Perry demolishes all snacks.",
				"Perry hates the rain.",
			],
		},
		{
			name: "Tubby",
			age: 4,
			src: tubby,
			facts: [
				"Tubby is really stupid.",
				"Tubby does not like walks.",
				"Angelina used to hate Tubby, but claims not to anymore.",
			],
		},
	];

	return (
		<div className='App'>
			<BrowserRouter>
				<div>
					<Nav dogs={dogs.map((dog) => dog.name)} />
					<Routes>
						<Route
							path='/dogs'
							element={<DogList dogs={dogs} />}
						/>
						<Route
							path='/dogs/:name'
							element={<DogDetails dogs={dogs} />}
						/>
						<Route
							path='*'
							element={<Navigate to='/dogs' />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
