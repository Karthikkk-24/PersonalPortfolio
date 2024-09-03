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
        {
            image: '/blogs/10.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/11.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/12.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/13.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/14.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/15.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/16.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/17.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/18.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/19.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/20.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/21.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/22.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/23.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/24.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/25.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/26.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/27.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/28.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/29.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/30.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/31.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/32.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/33.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/34.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/35.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/36.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/37.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/38.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/39.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/40.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/41.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/42.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/43.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/44.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/45.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/46.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/47.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/48.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/49.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/50.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/51.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/52.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/53.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/54.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/55.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/56.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/57.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/58.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/59.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/60.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/61.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: '01.01.2022',
        },
        {
            image: '/blogs/62.png',
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
