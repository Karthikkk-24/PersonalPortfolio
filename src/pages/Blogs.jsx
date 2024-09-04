import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function Blogs() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

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
        {
            image: '/blogs/4.png',
            url: 'https://medium.com/@karthikkk/the-python-series-3-switch-case-and-looping-statements-40bbe114e5f5',
            description: 'Card Description',
            title: 'Switch Case & Looping Statements',
            date: 'Apr 20, 2022',
        },
        {
            image: '/blogs/5.png',
            url: 'https://medium.com/@karthikkk/the-python-series-4-while-loop-and-general-terminologies-7e3c87d05e91',
            description: 'Card Description',
            title: 'While Loop & General Terminologies',
            date: 'May 13, 2022',
        },
        {
            image: '/blogs/6.png',
            url: 'https://medium.com/@karthikkk/the-python-series-5-exception-handling-4b3f31b5c011',
            description: 'Card Description',
            title: 'Exceptional Handling',
            date: 'May 26, 2022',
        },
        {
            image: '/blogs/7.png',
            url: 'https://medium.com/@karthikkk/why-linux-for-programmers-a5f6a9effa2b',
            description: 'Card Description',
            title: 'Why Linux For Programmers?',
            date: 'May 16, 2022',
        },
        {
            image: '/blogs/8.png',
            url: 'https://medium.com/@karthikkk/5-python-packages-for-cybersecurity-ebce7819a9c1',
            description: 'Card Description',
            title: '5 Python Packages For Cybersecurity',
            date: 'May 22, 2022',
        },
        {
            image: '/blogs/9.png',
            url: 'https://medium.com/@karthikkk/what-to-choose-in-linux-4d54e3c0a9ff',
            description: 'Card Description',
            title: 'What To Choose In Linux?',
            date: 'May 31, 2022',
        },
        {
            image: '/blogs/10.png',
            url: 'https://medium.com/@karthikkk/the-linux-series-2-linux-commands-you-must-know-1-b71db925982a',
            description: 'Card Description',
            title: 'Linux Commands You Must Know',
            date: 'June 10, 2022',
        },
        {
            image: '/blogs/11.png',
            url: 'https://medium.com/@karthikkk/5-visual-studio-code-extensions-you-must-have-as-a-developer-19444cdd4297',
            description: 'Card Description',
            title: '5 Visual Studio Code Extensions You Must Know',
            date: 'June 15, 2022',
        },
        {
            image: '/blogs/12.png',
            url: 'https://medium.com/@karthikkk/10-visual-studio-code-extensions-you-must-have-as-a-developer-2-2e5d57917005',
            description: 'Card Description',
            title: '10 Visual Studio Code Extensions You Must Know',
            date: 'Dec 19, 2022',
        },
        {
            image: '/blogs/13.png',
            url: 'https://medium.com/@karthikkk/dsa-1-sorting-bubble-sort-9307398d0245',
            description: 'Card Description',
            title: 'DSA #1 - Bubble Sort',
            date: 'Jun 20, 2022',
        },
        {
            image: '/blogs/14.png',
            url: 'https://medium.com/@karthikkk/dsa-2-selection-sort-32ff8057f07e',
            description: 'Card Description',
            title: 'DSA #2 - Selection Sort',
            date: 'Jun 25, 2022',
        },
        {
            image: '/blogs/15.png',
            url: 'https://medium.com/@karthikkk/dsa-3-insertion-sort-3c24cdb78720',
            description: 'Card Description',
            title: 'DSA #3 - Insertion Sort',
            date: 'Jul 6, 2022',
        },
        {
            image: '/blogs/16.png',
            url: 'https://medium.com/@karthikkk/dsa-4-merge-sort-3a30583a6217',
            description: 'Card Description',
            title: 'DSA #4 - Merge Sort',
            date: 'Jul 16, 2022',
        },
        {
            image: '/blogs/17.png',
            url: 'https://medium.com/@karthikkk/dsa-5-quick-sort-f5747da201ac',
            description: 'Card Description',
            title: 'DSA #5 - Quick Sort',
            date: 'July 26, 2022',
        },
        {
            image: '/blogs/18.png',
            url: 'https://medium.com/@karthikkk/dsa-6-arrays-a6090f44062a',
            description: 'Card Description',
            title: 'DSA #6 - Arrays',
            date: 'Aug 4, 2022',
        },
        {
            image: '/blogs/19.png',
            url: 'https://medium.com/@karthikkk/dsa-7-stack-f5edaab028fc',
            description: 'Card Description',
            title: 'DSA #7 - Stack',
            date: 'Aug 9, 2022',
        },
        {
            image: '/blogs/20.png',
            url: 'https://medium.com/@karthikkk/dsa-8-queue-6b7517f672f1',
            description: 'Card Description',
            title: 'DSA #8 - Queue',
            date: 'Aug 28, 2022',
        },
        {
            image: '/blogs/21.png',
            url: 'https://medium.com/@karthikkk/dsa-9-linked-list-e9b708fdcb8f',
            description: 'Card Description',
            title: 'DSA #9 - Linked List',
            date: 'Sep 12, 2022',
        },
        {
            image: '/blogs/22.png',
            url: 'https://medium.com/@karthikkk/dsa-10-recursion-part-1-1aaf1194a635',
            description: 'Card Description',
            title: 'DSA #10 - Recursion (Part - 1)',
            date: 'Sep 18, 2022',
        },
        {
            image: '/blogs/23.png',
            url: 'https://medium.com/@karthikkk/dsa-11-recursion-part-2-20232a08d39b',
            description: 'Card Description',
            title: 'DSA #11 - Recursion (Part - 2)',
            date: 'Oct 25, 2022',
        },
        {
            image: '/blogs/24.png',
            url: 'https://medium.com/@karthikkk/dsa-12-recursion-part-3-9c27e0bc561f',
            description: 'Card Description',
            title: 'DSA #12 - Recursion (Part - 3)',
            date: 'Nov 20, 2022',
        },
        {
            image: '/blogs/25.png',
            url: 'https://medium.com/@karthikkk/idor-insecure-direct-object-reference-9824b964d3a9',
            description: 'Card Description',
            title: 'IDOR - Insecure Direct Object Reference',
            date: 'Oct 4, 2022',
        },
        {
            image: '/blogs/26.png',
            url: 'https://medium.com/@karthikkk/client-side-scripting-or-cross-side-scripting-xss-attacks-7e4746c78ff0',
            description: 'Card Description',
            title: 'XSS - Cross Site Scripting',
            date: 'Jan 11, 2023',
        },
        {
            image: '/blogs/27.png',
            url: 'https://medium.com/@karthikkk/phishing-attacks-3556a43b8410',
            description: 'Card Description',
            title: 'Phishing Attacks',
            date: 'Jan 22, 2023',
        },
        {
            image: '/blogs/28.png',
            url: 'https://medium.com/@karthikkk/subdomain-takeover-ca4fd06f9262',
            description: 'Card Description',
            title: 'Subdomain Takeover',
            date: 'Feb 12, 2023',
        },
        {
            image: '/blogs/29.png',
            url: 'https://medium.com/@karthikkk/cryptojacking-49c523f97cbe',
            description: 'Card Description',
            title: 'Cryptojacking',
            date: 'Feb 19, 2023',
        },
        {
            image: '/blogs/30.png',
            url: 'https://medium.com/@karthikkk/dos-and-ddos-attacks-the-coding-hacker-75eb65edc9ac',
            description: 'Card Description',
            title: 'DoS & DDoS',
            date: 'Mar 12, 2023',
        },
        {
            image: '/blogs/31.png',
            url: 'https://medium.com/@karthikkk/sql-injection-the-coding-hacker-bce6b903930d',
            description: 'Card Description',
            title: 'SQL Injection',
            date: 'Mar 19, 2023',
        },
        {
            image: '/blogs/32.png',
            url: 'https://medium.com/@karthikkk/zero-day-exploits-the-coding-hacker-7fe449550b2a',
            description: 'Card Description',
            title: 'Zero Day Exploits',
            date: 'Apr 16, 2023',
        },
        {
            image: '/blogs/33.png',
            url: 'https://medium.com/@karthikkk/arp-poisoning-the-coding-hacker-b63d953bc5bc',
            description: 'Card Description',
            title: 'ARP Poisoning',
            date: 'May 14, 2023',
        },
        {
            image: '/blogs/34.png',
            url: 'https://medium.com/@karthikkk/safeguarding-your-digital-oasis-best-security-tips-tricks-and-practices-for-personal-and-af1cee81ae61',
            description: 'Card Description',
            title: 'Safeguarding Your Digital Oasis',
            date: 'Jul 14, 2023',
        },
        {
            image: '/blogs/35.png',
            url: 'https://medium.com/@karthikkk/power-of-javascript-the-coding-hacker-f4c3ba20bac6',
            description: 'Card Description',
            title: 'Power Of JavaScript',
            date: 'Aug 6, 2023',
        },
        {
            image: '/blogs/36.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-1-variable-declaration-datatypes-a8b2c88659e3',
            description: 'Card Description',
            title: 'Variable Declaration & Datatypes',
            date: 'Aug 27, 2023',
        },
        {
            image: '/blogs/37.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-2-operators-expressions-6f9a89feccbf',
            description: 'Card Description',
            title: 'Operators & Expressions',
            date: 'Sep 3, 2023',
        },
        {
            image: '/blogs/38.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-3-control-structures-eb32ff210c60',
            description: 'Card Description',
            title: 'Control Structures',
            date: 'Sep 10, 2023',
        },
        {
            image: '/blogs/39.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-4-functions-7c05dbf48f78',
            description: 'Card Description',
            title: 'Functions',
            date: 'Sep 17, 2023',
        },
        {
            image: '/blogs/40.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-5-arrays-objects-ae68d84ecc74',
            description: 'Card Description',
            title: 'Arrays & Objects',
            date: 'Sep 24, 2023',
        },
        {
            image: '/blogs/41.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-6-working-with-the-dom-c0ca630ff17f',
            description: 'Card Description',
            title: 'Working With The DOM',
            date: 'Oct 1, 2023',
        },
        {
            image: '/blogs/42.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-7-handling-asynchronous-operations-part-1-75b3a7dcebf5',
            description: 'Card Description',
            title: 'Handling Asynchronous Operations (Part - 1)',
            date: 'Oct 8, 2023',
        },
        {
            image: '/blogs/43.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-8-handling-asynchronous-operations-part-2-6addf062d88f',
            description: 'Card Description',
            title: 'Handling Asynchronous Operations (Part - 2)',
            date: 'Oct 15, 2023',
        },
        {
            image: '/blogs/44.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-9-error-handling-d2d343663ef2',
            description: 'Card Description',
            title: 'Error Handling',
            date: 'Oct 22, 2023',
        },
        {
            image: '/blogs/45.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-10-es6-features-2c8edda1ba4c',
            description: 'Card Description',
            title: 'ES6 Features',
            date: 'Oct 29, 2023',
        },
        {
            image: '/blogs/46.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-11-practical-projects-and-applications-5b7a3daddd7c',
            description: 'Card Description',
            title: 'Practical Projects & Applications',
            date: 'Nov 5, 2023',
        },
        {
            image: '/blogs/47.png',
            url: 'https://medium.com/@karthikkk/learning-js-part-12-tools-best-practices-framework-libraries-bffeeeff9bbf',
            description: 'Card Description',
            title: 'Tools, Best Practices, Framework & Libraries',
            date: 'Nov 12, 2023',
        },
        {
            image: '/blogs/48.png',
            url: 'https://medium.com/@karthikkk/mastering-javascript-part-1-closures-and-lexical-scoping-53bc1cd39df9',
            description: 'Card Description',
            title: 'Closures & Lexical Scoping',
            date: 'Nov 19, 2023',
        },
        {
            image: '/blogs/49.png',
            url: 'https://medium.com/@karthikkk/mastering-javascript-part-2-prototypal-inheritance-and-classes-15f0f4912413',
            description: 'Card Description',
            title: 'Prototypal Inheritance & Classes',
            date: 'Nov 26, 2023',
        },
        {
            image: '/blogs/50.png',
            url: 'https://medium.com/@karthikkk/mastering-javascript-part-3-design-pattern-in-js-8baaab74d7df',
            description: 'Card Description',
            title: 'Design Patterns',
            date: 'Dec 3, 2023',
        },
        {
            image: '/blogs/51.png',
            url: 'https://medium.com/@karthikkk/mastering-javascript-part-4-memory-management-and-garbage-collection-3e9f6e5c090e',
            description: 'Card Description',
            title: 'Memory Management & Garbage Collection',
            date: 'Dec 10, 2023',
        },
        {
            image: '/blogs/52.png',
            url: 'https://medium.com/@karthikkk/mastering-javascript-part-5-functional-programming-concepts-5ccb65db88ec',
            description: 'Card Description',
            title: 'Functional Programming Concepts',
            date: 'Dec 17, 2023',
        },
        {
            image: '/blogs/53.png',
            url: 'https://medium.com/@karthikkk/mastering-javascript-part-6-web-sockets-and-real-time-applications-95860a90a3bb',
            description: 'Card Description',
            title: 'Web Sockets & Real-Time Applications',
            date: 'Dec 31, 2023',
        },
        {
            image: '/blogs/54.png',
            url: 'https://medium.com/@karthikkk/mastering-javascript-part-7-promises-generators-9c249f7299a9',
            description: 'Card Description',
            title: 'Promises & Generators',
            date: 'Jan 8, 2024',
        },
        {
            image: '/blogs/55.png',
            url: 'https://medium.com/@karthikkk/mastering-javascript-part-8-javascript-decorators-web-performance-optimization-74a53fe95071',
            description: 'Card Description',
            title: 'JavaScript Decorators & Web Performance Optimization',
            date: 'Jan 14, 2024',
        },
        {
            image: '/blogs/56.png',
            url: 'https://medium.com/@karthikkk/fundamentals-of-dsa-in-javascript-9fb59e9e800c',
            description: 'Card Description',
            title: 'Fundamentals Of DSA In JavaScript',
            date: 'Feb 4, 2024',
        },
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
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
