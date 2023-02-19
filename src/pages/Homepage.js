import React from 'react';
import HighlightColumn from '../components/highlightColumn';

/* import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'; */

function Homepage() {
	return(
		<div className="max-w-full md:max-w-[80%] px-5 md:px-0 mx-auto">
			<div className="rmwHighlightMainNews">
				<div className="flex flex-col lg:flex-row gap-3">
					<div className="flex-1">
						<HighlightColumn title="Amazon Shoppers Are Ditching Designer" text="This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..." image="https://i0.wp.com/boolintunes.com/wp-content/uploads/2021/08/lornashorereviewfeat.jpg" />
					</div>
					
					<div className="flex-1">
						<div className="rmwHighlightGrid grid grid-cols-4 md:grid-cols-2 gap-3">
							<HighlightColumn title="Amazon Shoppers Are Ditching Designer" text="This is a wider card with supporting text content..." image="https://i0.wp.com/boolintunes.com/wp-content/uploads/2021/08/lornashorereviewfeat.jpg" />
							<HighlightColumn title="Amazon Shoppers Are Ditching Designer" text="This is a wider card with supporting text content..." image="https://i0.wp.com/boolintunes.com/wp-content/uploads/2021/08/lornashorereviewfeat.jpg" />
							<HighlightColumn title="Amazon Shoppers Are Ditching Designer" text="This is a wider card with supporting text content..." image="https://i0.wp.com/boolintunes.com/wp-content/uploads/2021/08/lornashorereviewfeat.jpg" />
							<HighlightColumn title="Amazon Shoppers Are Ditching Designer" text="This is a wider card with supporting text content..." image="https://i0.wp.com/boolintunes.com/wp-content/uploads/2021/08/lornashorereviewfeat.jpg" />
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row gap-y-10 md:gap-5 mt-10">
				<div className="flex-1">
					<h1 className="bg-slate-800 text-white uppercase font-bold p-2 mb-2">Latest News</h1>

					<div>
						<div className="flex flex-col lg:flex-row gap-2 pb-4 border-b">
							<div className="flex-1">
								<img src="https://townsquare.media/site/366/files/2023/02/attachment-architects_sam_carter.jpg" />
							</div>

							<div className="flex-1">
								<h4 className="text-sm font-bold pb-3">Architects Pause Show After Man Rushes Stage + Insults Band</h4>
								<p className="text-xs">The person mentioned late guitarist Tom Searle.</p>
							</div>
						</div>

						<div className="flex flex-col lg:flex-row gap-2 py-4 border-b">
							<div className="flex-1">
								<img src="https://townsquare.media/site/366/files/2023/02/attachment-architects_sam_carter.jpg" />
							</div>

							<div className="flex-1">
								<h4 className="text-sm font-bold pb-3">Architects Pause Show After Man Rushes Stage + Insults Band</h4>
								<p className="text-xs">The person mentioned late guitarist Tom Searle.</p>
							</div>
						</div>

						<div className="flex flex-col lg:flex-row gap-2 py-4">
							<div className="flex-1">
								<img src="https://townsquare.media/site/366/files/2023/02/attachment-architects_sam_carter.jpg" />
							</div>

							<div className="flex-1">
								<h4 className="text-sm font-bold pb-3">Architects Pause Show After Man Rushes Stage + Insults Band</h4>
								<p className="text-xs">The person mentioned late guitarist Tom Searle.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-1">
					<h1 className="bg-slate-800 text-white uppercase font-bold p-2 mb-2">Reviews</h1>

					<div>
						<div className="flex flex-col lg:flex-row gap-2 pb-4">
							<div className="flex-1">
								<img src="https://townsquare.media/site/366/files/2023/02/attachment-architects_sam_carter.jpg" />
							</div>

							<div className="flex-1">
								<h4 className="text-sm font-bold pb-3">Architects Pause Show After Man Rushes Stage + Insults Band</h4>
								<p className="text-xs">The person mentioned late guitarist Tom Searle.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-1">
					<h1 className="bg-slate-800 text-white uppercase font-bold p-2 mb-2">Interviews</h1>

					<div>
						<div className="flex flex-col lg:flex-row gap-2 pb-4 border-b">
							<div className="flex-1">
								<img src="https://townsquare.media/site/366/files/2023/02/attachment-architects_sam_carter.jpg" />
							</div>

							<div className="flex-1">
								<h4 className="text-sm font-bold pb-3">Architects Pause Show After Man Rushes Stage + Insults Band</h4>
								<p className="text-xs">The person mentioned late guitarist Tom Searle.</p>
							</div>
						</div>

						<div className="flex flex-col lg:flex-row gap-2 py-4">
							<div className="flex-1">
								<img src="https://townsquare.media/site/366/files/2023/02/attachment-architects_sam_carter.jpg" />
							</div>

							<div className="flex-1">
								<h4 className="text-sm font-bold pb-3">Architects Pause Show After Man Rushes Stage + Insults Band</h4>
								<p className="text-xs">The person mentioned late guitarist Tom Searle.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;