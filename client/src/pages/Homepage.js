import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function Homepage() {
	const url = 'https://rickandmortyapi.com/api/character/1,183,2,125';
	const [characters, setCharacter] = useState([]);
	useEffect(() => {
		axios.get(url).then(res => {
			setCharacter(res.data);
		});
	}, []);

	

	return(
		<div className="py-10 sm:px-6 lg:px-8">
			<Swiper
				className="px-[40px]"
				modules={[Navigation]}
				spaceBetween={30}
				slidesPerView={3}
				navigation={{ placement: 'outside', nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<div className="swiperWrapper">
					<SwiperSlide className="border p-3">Slide 1</SwiperSlide>
					<SwiperSlide className="border p-3">Slide 2</SwiperSlide>
					<SwiperSlide className="border p-3">Slide 3</SwiperSlide>
					<SwiperSlide className="border p-3">Slide 4</SwiperSlide>
				</div>
				<div className="swiperNavigation">
					<div className="swiper-button swiper-button-prev bg-white h-full top-0 bottom-0 my-auto left-0"></div>
					<div className="swiper-button swiper-button-next bg-white h-full top-0 bottom-0 my-auto right-0"></div>
				</div>
			</Swiper>

			<div className="mt-10">
				<h1 className="text-2xl mb-3">News</h1>
				<div className="grid grid-cols-4 justify-between gap-x-2">
					{characters.map( (character, index) =>
						<div key={character.id} className="flex flex-col justify-center">
							<div className="image">
								<img alt={character.name} src={character.image} className="w-full" />
							</div>
							<div className="name">{character.id} - {character.name}</div>
						</div>
					)}
				</div>
			</div>

			<div className="mt-10">
				<h1 className="text-2xl mb-3">Events</h1>
				<div className="grid grid-cols-4 justify-between gap-x-2">
					{characters.map( (character, index) =>
						<div key={character.id} className="flex flex-col justify-center">
							<div className="image">
								<img alt={character.name} src={character.image} className="w-full" />
							</div>
							<div className="name">{character.id} - {character.name}</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Homepage;