import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Blogs() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    

    const projects = [
        {
            image: '/blogs/1.png',
            url: 'https://github.com/Karthikkk-24/promptgenie',
            description: 'Card Description',
            title: 'Prompt Genie',
            date: 'Apr 12, 2022',
        },
        {
            image: '/blogs/2.png',
            url: 'https://github.com/Karthikkk-24/BudgetBuddy',
            description: 'Card Description',
            title: 'Budget Buddy',
            date: 'Apr 15, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://github.com/Karthikkk-24/pokedex',
            description: 'Card Description',
            title: 'PokeDex',
            date: 'Apr 18, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://github.com/Karthikkk-24/ConnectReconnect',
            description: 'Card Description',
            title: 'Connect Reconnect',
            date: 'Apr 18, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://github.com/Karthikkk-24/chat_app',
            description: 'Card Description',
            title: 'Chat App',
            date: 'Apr 18, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://github.com/Karthikkk-24/CareConnect',
            description: 'Card Description',
            title: 'Care Connect',
            date: 'Apr 18, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://github.com/Karthikkk-24/careconnectnext',
            description: 'Card Description',
            title: 'Care Connect Next',
            date: 'Apr 18, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://github.com/Karthikkk-24/code-knight',
            description: 'Card Description',
            title: 'Code Knight',
            date: 'Apr 18, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://github.com/Karthikkk-24/DomainChecker',
            description: 'Card Description',
            title: 'Domain Checker',
            date: 'Apr 18, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://github.com/Karthikkk-24/php_password_hash',
            description: 'Card Description',
            title: 'PHP Password Hash',
            date: 'Apr 18, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://github.com/Karthikkk-24/AudioVisualizer',
            description: 'Card Description',
            title: 'Audio Visualizer',
            date: 'Apr 18, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://github.com/Karthikkk-24/youtube_portfolio',
            description: 'Card Description',
            title: 'YouTube Portfolio',
            date: 'Apr 18, 2022',
        },
    ];

    return (
        <div className="w-full h-full overflow-y-auto px-7 py-5 max-md:px-1">
            <div className="w-full h-auto grid grid-cols-3 place-items-center justify-items-center gap-10 max-md:grid-cols-1">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`transform transition-all duration-500 ease-out w-full ${
                            isVisible
                                ? 'scale-100 opacity-100'
                                : 'scale-0 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <ProductCard
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
