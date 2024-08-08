import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full flex items-center font-bold justify-between">
                <div className="flex items-center gap-2">
                    <img
                        onClick={() => navigate(-1)}
                        alt=""
                        src={assets.arrow_left}
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer "
                    />
                    <img
                        onClick={() => navigate(1)}
                        alt=""
                        src={assets.arrow_right}
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer "
                    />
                </div>
                <div className="items-center flex gap-4">
                    <p className="text-black text-[15px] bg-white px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
                        Explore Premium
                    </p>
                    <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer b">
                        Install App
                    </p>
                    <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
                        S
                    </p>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2 mt-4">
                    <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
                        All
                    </p>
                    <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
                        Music
                    </p>
                    <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
                        Podcasts
                    </p>
                </div>
            </div>
        </>
    );
};

export default Navbar;
