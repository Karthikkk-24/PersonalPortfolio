export default function BoxItem() {
    return (
        <div className="rounded-2xl h-40 w-full neo-shadow flex items-center justify-start border-2 border-onyx p-5">
            <div className="w-1/5 h-full flex items-center justify-center"></div>
            <div className="w-4/5 h-full flex flex-col items-start justify-start gap-3">
                <h1 className="text-3xl text-white font-bold">Web Design</h1>
            </div>
        </div>
    );
}
