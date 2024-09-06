import BoxItem from "./BoxItem";

export default function WhatIDo() {
    return (
        <div className="w-full grid h-auto grid-cols-2 gap-10">
            <BoxItem icon="/icons/frontend.svg" title="Front End Development" />
            <BoxItem icon="/icons/backend.svg" title="Backend End Development" />
            <BoxItem icon="/icons/web-design.svg" title="Web Design" />
            <BoxItem icon="/icons/app.svg" title="App Development" />
        </div>
    );
}
