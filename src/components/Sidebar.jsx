export default function Sidebar() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-5 gap-4 bg-background rounded-2xl border-[1px] border-slate-800">
            <div className="bg-onyx w-32 h-32 rounded-2xl flex items-center justify-center">
                <img src="/icon.png" className="h-full w-auto" alt="" />
            </div>
            <h1 className="text-white text-xl font-semibold uppercase">Karthik Shettigar</h1>
            <p className="bg-onyx rounded-lg px-4 py-2 text-slate-200">Software Engineer</p>
            <div className="w-[80%] h-[1px] bg-onyx my-6"></div>
        </div>
    );
}
