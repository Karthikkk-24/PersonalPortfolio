import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function Blogs() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projects = [
        {
            image: '/blogs/1.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/2.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/3.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/4.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/5.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/6.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/7.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/8.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/9.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
    ];

    return (
        <div className="w-full h-full overflow-y-auto px-7 py-5 max-md:px-1">
            <div className="w-full h-auto grid grid-cols-3 place-items-center justify-items-center gap-10 max-md:grid-cols-1">
                {/* {[
                    {
                        image: '/blogs/1.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'Prompt Genie',
                        date: '01.01.2022',
                    },
                    {
                        image: '/blogs/2.png',
                        url: '/some-page',
                        description: 'Card Description',
                        title: 'Prompt Genie',
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
                            image={project.image}
                            title={project.title}
                            date={project.date}
                            url={project.url}
                            description={project.description}
                        />
                    </div>
                ))} */}
                {projects.reverse().map((project, index) => (
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
                            image={project.image}
                            title={project.title}
                            date={project.date}
                            url={project.url}
                            description={project.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
