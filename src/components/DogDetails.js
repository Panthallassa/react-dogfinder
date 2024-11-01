import React from "react";
import { useParams, Link } from "react-router-dom";

function DogDetails({ dogs }) {
	const { name } = useParams();
	const dog = dogs.find(
		(d) => d.name.toLowerCase() === name.toLocaleLowerCase()
	);

	if (!dog) return <p>Dog not found!</p>;

	return (
		<div>
			<h1>{dog.name}</h1>
			<img src={dog.src} alt={dog.name} />
			<h2>Age: {dog.age}</h2>
			<ul>
				{dog.facts.map((fact, idx) => (
					<li key={idx}>{fact}</li>
				))}
			</ul>
			<Link to='/dogs'>Back to all dogs</Link>
		</div>
	);
}

export default DogDetails;
