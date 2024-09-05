import BoxItem from "./BoxItem";

export default function WhatIDo() {
    return (
        <div className="w-full grid h-auto grid-cols-2 gap-10">
            <BoxItem title="Front End Development" />
            <BoxItem title="Backend End Development" />
            <BoxItem title="Web Design" />
            <BoxItem title="App Development" />
        </div>
    );
}
