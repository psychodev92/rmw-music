import React from 'react';

import browserIcon from '../assets/imgs/browser.svg';

export default function Accordion(props) {
    const defaultOpts = {
        item: {
            isOpen: true,
            icon: browserIcon,
        }
    };

    props = Object.assign(defaultOpts, props);

    return (
        <section className="w-full divide-y rounded divide-slate-200 border">
            <details className="p-4 group" open={props.item.isOpen}>
                <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    <img src={props.item.icon} className="h-6 w-6" />
                    
                    What browsers are supported?

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-labelledby="title-ac06 desc-ac06"
                    >
                        <title id="title-ac06">Open icon</title>
                        <desc id="desc-ac06">
                            icon that represents the state of the summary
                        </desc>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </summary>

                <p className="mt-4 text-slate-500">
                    Tailwind CSS works by scanning all of your HTML files, JavaScript
                    components, and any other templates for className names, generating
                    the corresponding styles and then writing them to a static CSS file.
                </p>
            </details>
        </section>
    )
}