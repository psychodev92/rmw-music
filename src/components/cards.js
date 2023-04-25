import React from 'react';
import clsx from 'clsx';

import '../assets/css/components/_card.scss';

export default function Card(props) {
    const cardTags = (props.tag) ? props.tag.split(',') : [];

    return (
        <div className="rmw-card_container h-full mb-5">
            <div className={clsx((props.type === 'overlay' ? 'rmw-card--overlay' : ''), "rmw-card w-full h-full border shadow-md rounded relative flex flex-col md:flex-row overflow-hidden bg-white text-slate-500 shadow-slate-200")}>
                <figure className="flex-1">
                    <img
                        src={props.image}
                        alt="card"
                        className="object-cover min-h-full aspect-auto"
                    />
                </figure>
                
                <div className="rmw-card_details flex-1 w-full p-6">
                    <header className="mb-2">
                        <h3 className={clsx((props.type === 'overlay' ? 'text-white' : 'text-black'), "font-medium")}>{props.title}</h3>
                        
                        <p className="text-sm text-slate-400"> { props.author ? `By ${props.author}, ${props.date}` : '' }</p>
                        
                        <div className={clsx((props.tag ? 'flex gap-x-2 my-2' : 'hidden'))}>
                            {
                                cardTags.map((tag) => {
                                    return(
                                        <span className="inline-flex items-center justify-center gap-1 rounded text-sm px-1.5 bg-emerald-500 text-white">
                                            {tag}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </header>

                    <p className={clsx((props.type === 'overlay' ? 'truncate' : 'text-ellipsis'), "text-sm")}>{props.summary}</p>
                </div>
            </div>
        </div>
    );
}