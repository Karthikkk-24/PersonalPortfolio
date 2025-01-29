import { useEffect, useState } from 'react';
import { default as Card } from '../components/Card';

export default function Shop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const blogs = [
        {
            image: '/shop/wallpapers/1.png',
            url: 'https://karthikkk.gumroad.com/l/flow-patterns',
            description: 'Card Description',
            title: 'Flow Patterns Desktop',
        },
        {
            image: '/shop/wallpapers/2.png',
            url: 'https://karthikkk.gumroad.com/l/flow-patterns-mobile',
            description: 'Card Description',
            title: 'Flow Patterns Mobile',
        },
    ];

    return (
        <div className="w-full h-full overflow-y-auto px-7 py-5 max-md:px-1">
            <div className="w-full h-auto grid grid-cols-3 place-items-center justify-items-center gap-10 max-md:grid-cols-1">
                {blogs.reverse().map((project, index) => (
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
                            height={12}
                            textAlign='text-center'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
