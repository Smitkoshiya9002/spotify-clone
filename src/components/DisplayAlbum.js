import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContex } from "../context/PlayerContexProvider";

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];

    const { playWithId } = useContext(PlayerContex);

    return (
        <>
            <Navbar />
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img alt=" " src={albumData.image} className="w-48 rounded" />
                <div className="flex flex-col">
                    <p>PlayList</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">
                        {albumData.name}
                    </h2>
                    <h4>{albumData.desc}</h4>
                    <p className="mt-1">
                        <img
                            className="inline-block w-5"
                            alt=""
                            src={assets.spotify_logo}
                        />
                        <b>Spotify</b>• 1,332,456 Likes • <b>50 songs,</b>
                        about 2 hr 30 min
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p>
                    <b className="mr-4">#</b>Title
                </p>
                <p>Album</p>
                <p className="hidden sm:block ">Data Added</p>
                <img className="m-auto w-4" src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {songsData.map((item, index) => (
                <div
                    onClick={() => playWithId(item.id)}
                    key="index"
                    className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
                >
                    <p className="text-white sm:text-[15px] text-[10px]">
                        <b className="mr-2 text-[#a7a7a7] sm:mr-4">
                            {index + 1}
                        </b>
                        <img
                            alt=""
                            className="inline w-7 mr-1 sm:mr-5 sm:w-10"
                            src={item.image}
                        />
                        {item.name}
                    </p>
                    <p className="text-[15px]">{albumData.name}</p>
                    <p className="text-[15px] hidden sm:block">5 Days Ago</p>
                    <p className="text-[15px] text-center">{item.duration}</p>
                </div>
            ))}
        </>
    );
};

export default DisplayAlbum;
