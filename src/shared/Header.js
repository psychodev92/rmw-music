import React from 'react';

function Header() {
	return(
		<header className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur dark:bg-primary dark:text-white">
			<nav className="flex items-center h-16 font-semibold text-sm after:absolute after:inset-x-0 after:w-full after:h-12 after:shadow-hr after:z-[-1]">
				<div className="w-full text-gray-700">
					<div className="flex flex-col px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
						<div className="p-4 flex flex-row items-center justify-between">
							<a href="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase dark-mode:text-white focus:outline-none focus:shadow-outline">
								RMW Music
							</a>

							<button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
								<svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
									<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
									<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
								</svg>
							</button>
						</div>

						<div className="flex-col flex-grow gap-x-2 pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
							<a className="transition-all duration-300 ease-linear px-3 py-2 text-sm font-semibold text-gray-900 border-b-2 border-transparent hover:border-red-800 focus:outline-none focus:shadow-outline" href="#">
								News
							</a>

							<a className="transition-all duration-300 ease-linear px-3 py-2 text-sm font-semibold text-gray-900 border-b-2 border-transparent hover:border-red-800 focus:outline-none focus:shadow-outline" href="#">
								Reviews
							</a>

							<a className="transition-all duration-300 ease-linear px-3 py-2 text-sm font-semibold text-gray-900 border-b-2 border-transparent hover:border-red-800 focus:outline-none focus:shadow-outline" href="#">
								Concerts
							</a>

							<a className="transition-all duration-300 ease-linear px-3 py-2 text-sm font-semibold text-gray-900 border-b-2 border-transparent hover:border-red-800 focus:outline-none focus:shadow-outline" href="#">
								Interviews
							</a>

							<a className="transition-all duration-300 ease-linear px-3 py-2 text-sm font-semibold text-gray-900 border-b-2 border-transparent hover:border-red-800 focus:outline-none focus:shadow-outline" href="#">
								About
							</a>

							<a className="transition-all duration-300 ease-linear px-4 py-2 text-sm font-semibold text-gray-900 border-b-2 border-transparent hover:border-red-800 focus:outline-none focus:shadow-outline" href="#">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;