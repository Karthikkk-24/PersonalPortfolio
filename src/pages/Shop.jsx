import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function Shop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="w-full h-full overflow-y-auto px-7 py-5 max-md:px-1">
            <div className='w-full h-full flex items-center justify-center'>
                <h2 className='text-5xl mb-10 text-white uppercase max-md:text-2xl max-md:mb-0'>
                    Coming Soon...
                </h2>
            </div>
            <div className="w-full h-auto grid-cols-3 place-items-center justify-items-center gap-10 max-md:grid-cols-1 hidden">
                {[
                    {
                        image: '/logo/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'Prompt Genie',
                        date: '01.01.2022',
                    },
                    {
                        image: '/logo/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'Prompt Genie',
                        date: '01.01.2022',
                    },
                    {
                        image: '/logo/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'Budget Buddy',
                        date: '01.01.2022',
                    },
                    {
                        image: '/logo/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'Care Connect Next',
                        date: '01.01.2022',
                    },
                    {
                        image: '/logo/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'Care Connect',
                        date: '01.01.2022',
                    },
                    {
                        image: '/logo/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'Connect Reconnect',
                        date: '01.01.2022',
                    },
                    {
                        image: '/logo/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'Code Knight',
                        date: '01.01.2022',
                    },
                    {
                        image: '/logo/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'Domain Checker',
                        date: '01.01.2022',
                    },
                    {
                        image: '/logo/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'SneakerHead',
                        date: '01.01.2022',
                    },
                    {
                        image: '/logo/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'YouTube Portfolio',
                        date: '01.01.2022',
                    },
                ].map((project, index) => (
                    <div
                        key={index}
                        className={`transform transition-all duration-500 ease-out w-full ${
                            isVisible
                                ? 'scale-100 opacity-100'
                                : 'scale-0 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <Card
                            image="/logo/1.png"
                            title={project.title}
                            date={project.date}
                            url="/some-page"
                            description="Card Description"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
