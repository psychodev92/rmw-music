import moment from 'moment';

export default function Cards(props) {
    return (
        <div key={props.index} className="rmw-card flex-1 overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
            <figure>
                <img src="https://picsum.photos/id/1081/800/600" alt="card image" className="aspect-video w-full" />
            </figure>

            <div className="p-6">
                <header className="flex gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-medium text-slate-700">{props.data.title}</h3>
                        <p className="text-sm text-slate-400">By Mary Jay, {moment(props.data.created_at).format("MMMM Do YYYY")}</p>
                    </div>
                </header>

                <p>{props.data.summary}</p>
            </div>

            <div className="flex justify-end gap-2 p-2 pt-0">
                <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 border border-emerald-600 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                    <span>Read more</span>
                </button>
            </div>
        </div>
    );
}