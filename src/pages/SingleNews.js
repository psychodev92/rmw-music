import React from 'react';
import '../assets/css/news.scss';

function SingleNews(props) {
    return (
        <div className="max-w-[65%] mx-auto">
            <div className="singleNews flex flex-col items-center">
                <div className="singleNews--title w-full">
                    <h1 className="text-2xl font-bold">{props.title}</h1>
                </div>

                <div className="singleNews--image w-full my-5">
                    <img src={props.image} alt={props.title} className="w-full" />
                </div>

                <div class="flex gap-x-2 w-full mb-3">
                    <span className="text-xs text-white font-bold bg-gray-700 px-2 py-1">TAG #1</span>
                    <span className="text-xs text-white font-bold bg-gray-700 px-2 py-1">TAG #2</span>
                </div>

                <div className="singleNews--text">
                    <p>It's no secret that being a rock star ain't easy on the body. Long tours, late nights, and all that partying can take a toll, especially as these legends get up there in age. It's always sad to lose a legend like <strong>Eddie Van Halen or Neil Peart</strong> to health issues, but it's also a reminder that taking care of yourself is crucial, no matter how famous you are. But even with all the challenges, a lot of these rockers refuse to stop.</p>
                    <p>Take <strong>Ozzy Osbourne</strong> for example, he's not letting his recent struggles with walking slow him down, he's still making new music and working on an album. It's inspiring to see these musicians keep pushing through and giving it their all for their fans. It just goes to show, if you love what you do, you'll find a way to make it work.</p>
                    <p>In an interview with a British newspaper, Osbourne, 71, revealed that his <strong>health issues have been ongoing for some time</strong> and have greatly impacted his ability to walk. “It is really awful what is going on. It is a nightmare. Sometimes I forget. I am lying on the couch, go to get up and I cannot do that anymore. My sense of balance is all over the place.” he said. “I'm not dying, I'm just recovering slowly.”</p>
                    <p>The musician, who rose to fame as the lead singer of Black Sabbath, has been dealing with a variety of health issues in recent years. In 2019, <strong>he was hospitalized</strong> for pneumonia and then underwent surgery for a severe neck injury. He also suffered a fall at home, which resulted in him having to postpone a planned tour.</p>
                    <p>Despite his health struggles, Osbourne remains optimistic and determined to recover. “I'm not giving up,” he said. “I'm just taking it one day at a time.”</p>
                    <p>Osbourne's fans have shown him an outpouring of support and well wishes during this difficult time. Many have taken to social media to express their love and admiration for the legendary musician, who has been an influential figure in the world of heavy metal for decades.</p>
                    <p>Plus, Osbourne has not let his health struggles slow him down. He continues to work on new music and has recently been in the studio recording a new album. “I'm not going to retire,” he said. “I'll just keep going until <strong>I can't go any more.”</strong></p>
                    <p>Osbourne's ongoing health struggles serve as a reminder of the importance of taking care of one's physical and mental health, and the impact that chronic health conditions can have on a person's daily life. However, it's clear that Osbourne remains determined to overcome his challenges and continue to make music that his fans love.</p>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;