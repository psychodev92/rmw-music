import moment from 'moment';

export default function Single(props) {
    return (
        <div key={props.index} className="block w-full">
            <figure>
                <img src="https://picsum.photos/id/1081/800/600" alt={`cardImage-${props.index}`} className="max-w-[350px] aspect-video w-full" />
            </figure>

            <div>
                <header className="flex gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-medium text-slate-700">{props.data.title}</h3>
                        <p className="text-sm text-slate-400">By Mary Jay, {moment(props.data.created_at).format("MMMM Do YYYY")}</p>
                    </div>
                </header>
            </div>

            <div>
                <p>Perspiciatis aut aut. Enim saepe et molestiae. Facere ullam sunt consequuntur quidem quisquam tempore. Possimus tempore quo mollitia vel omnis. Ut explicabo voluptas adipisci odit ut repellat voluptates. Laboriosam excepturi possimus odit.</p>
                <p>Accusamus at repellendus. A et ducimus repudiandae et libero ducimus dolores. Explicabo consequatur corporis totam fuga harum expedita ut libero omnis. Et tempore voluptatum enim sunt excepturi qui id. Dolore recusandae iste doloribus hic nemo.</p>
                <p>Numquam et esse saepe soluta quae. Et laborum magni quod et odio nihil veritatis rerum. Iusto aut impedit labore consequatur earum consequuntur. Omnis accusantium culpa.</p>
            </div>
        </div>
    );
}