import BlogCard from './BlogCard';

export default function Blogs() {
    return (
        <div className="flex flex-col items-start justify-start gap-10 w-full h-full">
            <h1 className='text-3xl text-slate-50'>Blogs</h1>
            <div className="grid w-full h-auto grid-cols-4">
                <BlogCard />
            </div>
        </div>
    );
}
