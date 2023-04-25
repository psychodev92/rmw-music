import React, { useState, useEffect } from 'react';
import axios from "axios";

import Card from '../components/cards';

export default function Home() {
    const [articles, setArticle] = useState([]);
	
    useEffect(() => {
		axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=5`)
			.then(response => {
                response.data[0].main = 1;
				setArticle(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
    });

    return (
        <div className="max-w-full md:max-w-[90%] px-5 md:px-0 mx-auto">
            <div className="mb-5 text-3xl">
                <h1>EFEMÉRIDE</h1>
            </div>

            <div className="w-full flex flex-col lg:flex-row h-full lg:h-[500px] mb-5">
                <div className="flex-1 h-full">
                    {
                        // From all articles, this will draw the MAIN article only
                        articles.filter( item => item.main )
                            .map( (article, id) => {
                                return(
                                    <Card
                                        index={id}
                                        type="overlay"
                                        tag="Interviews, Teste"
                                        title={article.title}
                                        image={article.imageUrl}
                                        summary={article.summary}
                                    />
                                )
                            })
                    }
                </div>

                <div className="rmw-card--carousel flex-1 h-full grid grid-cols-2 grid-rows-2">
                    {
                        articles.filter( item => !item.main )
                            .map( (article, id) => {
                                return(
                                    <Card
                                        index={id}
                                        type="overlay"
                                        tag="Interviews, Teste"
                                        title={article.title}
                                        image={article.imageUrl}
                                        summary={article.summary}
                                    />
                                )
                            })
                    }
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3">
				<div className="flex-1">
					<h1 className="bg-slate-800 text-white uppercase font-bold p-2 mb-2">Latest News</h1>

					<div className="">
                        {
                            articles.map( (article, id) => {
                                return(
                                    <Card
                                        index={id}
                                        type="card"
                                        tag="Interviews, Teste"
                                        title={article.title}
                                        image={article.imageUrl}
                                        summary={article.summary}
                                    />
                                )
                            })
                        }
					</div>
				</div>

				<div className="flex-1">
					<h1 className="bg-slate-800 text-white uppercase font-bold p-2 mb-2">Reviews</h1>

					<div className="">
                        {
                            articles.map( (article, id) => {
                                return(
                                    <Card
                                        index={id}
                                        type="card"
                                        tag="Interviews, Teste"
                                        title={article.title}
                                        image={article.imageUrl}
                                        summary={article.summary}
                                    />
                                )
                            })
                        }
					</div>
				</div>

				<div className="flex-1">
					<h1 className="bg-slate-800 text-white uppercase font-bold p-2 mb-2">Interviews</h1>

					<div className="">
                        {
                            articles.map( (article, id) => {
                                return(
                                    <Card
                                        index={id}
                                        type="card"
                                        tag="Interviews, Teste"
                                        title={article.title}
                                        image={article.imageUrl}
                                        summary={article.summary}
                                    />
                                )
                            })
                        }
					</div>
				</div>
			</div>
        </div>
    );
}