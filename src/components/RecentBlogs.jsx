import MiniCard from './MiniCard';
// import '/assets/styles/owl.carousel.min.css';
// import '/assets/styles/owl.theme.default.min.css';

export default function RecentBlogs() {
    const blogs = [
        {
            image: '/blogs/57.png',
            url: 'https://medium.com/@karthikkk/mastering-arrays-mastering-javascript-part-10-fba7287aa48d',
            description: 'Card Description',
            title: 'Mastering Arrays',
            date: 'Mar 10, 2024',
        },
        {
            image: '/blogs/58.png',
            url: 'https://medium.com/@karthikkk/mastering-linked-lists-mastering-javascript-part-11-c00283b7c5a0',
            description: 'Card Description',
            title: 'Mastering Linked Lists',
            date: 'Mar 31, 2024',
        },
        {
            image: '/blogs/59.png',
            url: 'https://medium.com/@karthikkk/mastering-stacks-mastering-javascript-part-12-937c970c0814',
            description: 'Card Description',
            title: 'Mastering Stacks',
            date: 'Apr 28, 2024',
        },
        {
            image: '/blogs/60.png',
            url: 'https://medium.com/@karthikkk/mastering-hash-tables-mastering-javascript-part-13-244105fd21fc',
            description: 'Card Description',
            title: 'Mastering Hash Tables',
            date: 'May 21, 2024',
        },
        {
            image: '/blogs/61.png',
            url: 'https://medium.com/@karthikkk/mastering-trees-mastering-javascript-part-14-c344fb5101d0',
            description: 'Card Description',
            title: 'Mastering Trees',
            date: 'Jun 16, 2024',
        },
        {
            image: '/blogs/62.png',
            url: 'https://medium.com/@karthikkk/mastering-graphs-mastering-javascript-part-15-0d4bac18497b',
            description: 'Card Description',
            title: 'Mastering Graphs',
            date: 'Aug 29, 2024',
        },
    ];

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-7'>
            <h3 className='text-3xl text-white w-full text-left'>
                Recent Blogs
            </h3>
            <div className="w-full h-auto grid grid-cols-3 gap-10 pb-10 px-5 max-md:grid-cols-1 max-md:px-0">
                {blogs.reverse().map((project, index) => (
                    <div
                        key={index}
                        className="transform transition-all duration-500 ease-out w-full h-auto"
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
        </div>
    );
}
