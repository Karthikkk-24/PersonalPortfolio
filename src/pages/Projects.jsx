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
            title: 'Introduction to Python',
            date: 'Apr 12, 2022',
        },
        {
            image: '/blogs/2.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Features of OOPs',
            date: 'Apr 15, 2022',
        },
        {
            image: '/blogs/3.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Variable Declaration & Logical Statements',
            date: 'Apr 18, 2022',
        },
        {
            image: '/blogs/4.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Switch Case & Looping Statements',
            date: 'Apr 20, 2022',
        },
        {
            image: '/blogs/5.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'While Loop & General Terminologies',
            date: 'May 13, 2022',
        },
        {
            image: '/blogs/6.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Exceptional Handling',
            date: 'May 26, 2022',
        },
        {
            image: '/blogs/7.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Why Linux For Programmers?',
            date: 'May 16, 2022',
        },
        {
            image: '/blogs/8.png',
            url: '/some-page',
            description: 'Card Description',
            title: '5 Python Packages For Cybersecurity',
            date: 'May 22, 2022',
        },
        {
            image: '/blogs/9.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'What To Choose In Linux?',
            date: 'May 31, 2022',
        },
        {
            image: '/blogs/10.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Linux Commands You Must Know',
            date: 'June 10, 2022',
        },
        {
            image: '/blogs/11.png',
            url: '/some-page',
            description: 'Card Description',
            title: '5 Visual Studio Code Extensions You Must Know',
            date: 'June 15, 2022',
        },
        {
            image: '/blogs/12.png',
            url: '/some-page',
            description: 'Card Description',
            title: '10 Visual Studio Code Extensions You Must Know',
            date: 'Dec 19, 2022',
        },
        {
            image: '/blogs/13.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #1 - Bubble Sort',
            date: 'Jun 20, 2022',
        },
        {
            image: '/blogs/14.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #2 - Selection Sort',
            date: 'Jun 25, 2022',
        },
        {
            image: '/blogs/15.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #3 - Insertion Sort',
            date: 'Jul 6, 2022',
        },
        {
            image: '/blogs/16.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #4 - Merge Sort',
            date: 'Jul 16, 2022',
        },
        {
            image: '/blogs/17.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #5 - Quick Sort',
            date: 'July 26, 2022',
        },
        {
            image: '/blogs/18.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #6 - Arrays',
            date: 'Aug 4, 2022',
        },
        {
            image: '/blogs/19.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #7 - Stack',
            date: 'Aug 9, 2022',
        },
        {
            image: '/blogs/20.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #8 - Queue',
            date: 'Aug 28, 2022',
        },
        {
            image: '/blogs/21.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #9 - Linked List',
            date: 'Sep 12, 2022',
        },
        {
            image: '/blogs/22.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #10 - Recursion (Part - 1)',
            date: 'Sep 18, 2022',
        },
        {
            image: '/blogs/23.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #11 - Recursion (Part - 2)',
            date: 'Oct 25, 2022',
        },
        {
            image: '/blogs/24.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DSA #12 - Recursion (Part - 3)',
            date: 'Nov 20, 2022',
        },
        {
            image: '/blogs/25.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'IDOR - Insecure Direct Object Reference',
            date: 'Oct 4, 2022',
        },
        {
            image: '/blogs/26.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'XSS - Cross Site Scripting',
            date: 'Jan 11, 2023',
        },
        {
            image: '/blogs/27.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Phishing Attacks',
            date: 'Jan 22, 2023',
        },
        {
            image: '/blogs/28.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Subdomain Takeover',
            date: 'Feb 12, 2023',
        },
        {
            image: '/blogs/29.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Cryptojacking',
            date: 'Feb 19, 2023',
        },
        {
            image: '/blogs/30.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'DoS & DDoS',
            date: 'Mar 12, 2023',
        },
        {
            image: '/blogs/31.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'SQL Injection',
            date: 'Mar 19, 2023',
        },
        {
            image: '/blogs/32.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Zero Day Exploits',
            date: 'Apr 16, 2023',
        },
        {
            image: '/blogs/33.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'ARP Poisoning',
            date: 'May 14, 2023',
        },
        {
            image: '/blogs/34.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Safeguarding Your Digital Oasis',
            date: 'Jul 14, 2023',
        },
        {
            image: '/blogs/35.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Power Of JavaScript',
            date: 'Aug 6, 2023',
        },
        {
            image: '/blogs/36.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Variable Declaration & Datatypes',
            date: 'Aug 27, 2023',
        },
        {
            image: '/blogs/37.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Operators & Expressions',
            date: 'Sep 3, 2023',
        },
        {
            image: '/blogs/38.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Control Structures',
            date: 'Sep 10, 2023',
        },
        {
            image: '/blogs/39.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Functions',
            date: 'Sep 17, 2023',
        },
        {
            image: '/blogs/40.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Arrays & Objects',
            date: 'Sep 24, 2023',
        },
        {
            image: '/blogs/41.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Working With The DOM',
            date: 'Oct 1, 2023',
        },
        {
            image: '/blogs/42.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Handling Asynchronous Operations (Part - 1)',
            date: 'Oct 8, 2023',
        },
        {
            image: '/blogs/43.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Handling Asynchronous Operations (Part - 2)',
            date: 'Oct 15, 2023',
        },
        {
            image: '/blogs/44.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Error Handling',
            date: 'Oct 22, 2023',
        },
        {
            image: '/blogs/45.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'ES6 Features',
            date: 'Oct 29, 2023',
        },
        {
            image: '/blogs/46.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Practical Projects & Applications',
            date: 'Nov 5, 2023',
        },
        {
            image: '/blogs/47.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Tools, Best Practices, Framework & Libraries',
            date: 'Nov 12, 2023',
        },
        {
            image: '/blogs/48.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Closures & Lexical Scoping',
            date: 'Nov 19, 2023',
        },
        {
            image: '/blogs/49.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Prototypal Inheritance & Classes',
            date: 'Nov 26, 2023',
        },
        {
            image: '/blogs/50.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Design Patterns',
            date: 'Dec 3, 2023',
        },
        {
            image: '/blogs/51.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Memory Management & Garbage Collection',
            date: 'Dec 10, 2023',
        },
        {
            image: '/blogs/52.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Functional Programming Concepts',
            date: 'Dec 17, 2023',
        },
        {
            image: '/blogs/53.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Web Sockets & Real-Time Applications',
            date: 'Dec 31, 2023',
        },
        {
            image: '/blogs/54.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Promises & Generators',
            date: 'Jan 8, 2024',
        },
        {
            image: '/blogs/55.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'JavaScript Decorators & Web Performance Optimization',
            date: 'Jan 14, 2024',
        },
        {
            image: '/blogs/56.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Fundamentals Of DSA In JavaScript',
            date: 'Feb 4, 2024',
        },
        {
            image: '/blogs/57.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Mastering Arrays',
            date: 'Mar 10, 2024',
        },
        {
            image: '/blogs/58.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Mastering Linked Lists',
            date: 'Mar 31, 2024',
        },
        {
            image: '/blogs/59.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Mastering Stacks',
            date: 'Apr 28, 2024',
        },
        {
            image: '/blogs/60.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Mastering Hash Tables',
            date: 'May 21, 2024',
        },
        {
            image: '/blogs/61.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Mastering Trees',
            date: 'Jun 16, 2024',
        },
        {
            image: '/blogs/62.png',
            url: '/some-page',
            description: 'Card Description',
            title: 'Mastering Graphs',
            date: 'Aug 29, 2024',
        },
    ];

    return (
        <div className="w-full h-full overflow-y-auto px-7 py-5 max-md:px-1">
            <div className="w-full h-auto grid grid-cols-3 place-items-center justify-items-center gap-10 max-md:grid-cols-1">
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
