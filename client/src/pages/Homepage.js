import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

function Homepage() {
	const url = 'https://rickandmortyapi.com/api/character';
	const [characters, setCharacter] = useState([]);
	useEffect(() => {
		axios.get(url).then(res => {
            setCharacter(res.data.results);
		});
	}, []);

	

	return(
		<>
			<div className="flex flex-wrap">
				{characters.map(c =>
					<div key={c.id}>
						<div className="image"><img alt={c.name} src={c.image} /></div>
						<div className="name">{c.name}</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Homepage;