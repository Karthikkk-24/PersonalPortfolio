
import MiniCard from "./MiniCard";
// import '/assets/styles/owl.carousel.min.css';
// import '/assets/styles/owl.theme.default.min.css';

export default function RecentBlogs() {
    const blogs = [
        {
            image: '/blogs/1.png',
            url: 'https://medium.com/@karthikkk/introduction-to-python-774694f5855d',
            description: 'Card Description',
            title: 'Introduction to Python',
            date: 'Apr 12, 2022',
        },
        {
            image: '/blogs/2.png',
            url: 'https://medium.com/@karthikkk/features-of-object-orient-programming-oops-7f0856d908f8',
            description: 'Card Description',
            title: 'Features of OOPs',
            date: 'Apr 15, 2022',
        },
        {
            image: '/blogs/3.png',
            url: 'https://medium.com/@karthikkk/the-python-series-2-variable-declaration-logical-statements-c818536f6ce9',
            description: 'Card Description',
            title: 'Variable Declaration & Logical Statements',
            date: 'Apr 18, 2022',
        },
        // {
        //     image: '/blogs/4.png',
        //     url: 'https://medium.com/@karthikkk/the-python-series-3-switch-case-and-looping-statements-40bbe114e5f5',
        //     description: 'Card Description',
        //     title: 'Switch Case & Looping Statements',
        //     date: 'Apr 20, 2022',
        // },
        // {
        //     image: '/blogs/5.png',
        //     url: 'https://medium.com/@karthikkk/the-python-series-4-while-loop-and-general-terminologies-7e3c87d05e91',
        //     description: 'Card Description',
        //     title: 'While Loop & General Terminologies',
        //     date: 'May 13, 2022',
        // },
    ];

    return (
        <div className="w-full h-auto grid grid-cols-3 place-items-center justify-items-center gap-10 max-md:grid-cols-1">
            {blogs.reverse().map((project, index) => (
                <div
                    key={index}
                    className="transform transition-all duration-500 ease-out w-full"
                >
                    <MiniCard
                        image={project.image}
                        title={project.title}
                        date={project.date}
                        url={project.url}
                        description={project.description}
                    />
                </div>
            ))}
        </div>
    );
}
