import React, { useState, useEffect } from 'react';
import axios from "axios";
import HighlightColumn from '../components/highlightColumn';
import '../assets/css/news.scss';

function Homepage() {
	const [articles, setArticle] = useState([]);
	const [latestNews, setLatestNews] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [interviews, setInterviews] = useState([]);

	useEffect(() => {
		axios.get(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=5&apikey=${process.env.REACT_APP_API_KEY}`)
			.then(response => {
				response.data.articles[0].main = 1;
				setArticle(response.data.articles);
			})
			.catch(function (error) {
				console.log(error);
			});

		axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=3`)
			.then(response => {
				setLatestNews(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});

		axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=1`)
			.then(response => {
				setReviews(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});

		axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=2`)
			.then(response => {
				setInterviews(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
	
	return(
		<div className="max-w-full md:max-w-[80%] px-5 md:px-0 mx-auto">
			<div className="rmwHighlightMainNews">
				<div className="rmwHighlightGrid container m-auto">
				{
					articles.map( (article, id) => {
						return <HighlightColumn
									id={id}
									title={article.title}
									text={article.description.substring(1, 100)}
									image={article.image}
									className="rmwHighlightGrid--box"
									main={(article.main) ? 1 : 0}
								/>
					} )
				}
				</div>
			</div>

			<div className="flex flex-col md:flex-row gap-y-10 md:gap-5 mt-10">
				<div className="flex-1">
					<h1 className="bg-slate-800 text-white uppercase font-bold p-2 mb-2">Latest News</h1>

					<div>
						{
							latestNews.map( (article, id) => {
								return (
									<div className="flex flex-col lg:flex-row gap-2 pb-4">
										<div className="flex-1">
											<img alt="" src={article.imageUrl} />
										</div>

										<div className="flex-1">
											<h4 className="text-sm font-bold pb-3">{article.title}</h4>
											<p className="text-xs">{article.summary}</p>
										</div>
									</div>
								)
							} )
						}
					</div>
				</div>

				<div className="flex-1">
					<h1 className="bg-slate-800 text-white uppercase font-bold p-2 mb-2">Reviews</h1>

					<div>
						{
							reviews.map( (article, id) => {
								return (
									<div className="flex flex-col lg:flex-row gap-2 pb-4">
										<div className="flex-1">
											<img alt="" src={article.imageUrl} />
										</div>

										<div className="flex-1">
											<h4 className="text-sm font-bold pb-3">{article.title}</h4>
											<p className="text-xs">{article.summary}</p>
										</div>
									</div>
								)
							} )
						}
					</div>
				</div>

				<div className="flex-1">
					<h1 className="bg-slate-800 text-white uppercase font-bold p-2 mb-2">Interviews</h1>

					<div>
						{
							interviews.map( (article, id) => {
								return (
									<div className="flex flex-col lg:flex-row gap-2 pb-4">
										<div className="flex-1">
											<img alt="" src={article.imageUrl} />
										</div>

										<div className="flex-1">
											<h4 className="text-sm font-bold pb-3">{article.title}</h4>
											<p className="text-xs">{article.summary}</p>
										</div>
									</div>
								)
							} )
						}
					</div>
				</div>
			</div>
		</div>
	)
};

export default Homepage;