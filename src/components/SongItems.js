import React, { useContext } from "react";
import { PlayerContex } from "../context/PlayerContexProvider";

const SongItems = ({ name, image, desc, id }) => {
    const { playWithId } = useContext(PlayerContex);

    return (
        <div
            onClick={() => playWithId(id)}
            className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:{bg-[#ffffff26]"
        >
            <img className="rounded" src={image} alt="" />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-sm ">{desc}</p>
        </div>
    );
};

export default SongItems;
