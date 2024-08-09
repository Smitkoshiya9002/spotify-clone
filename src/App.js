import React, { useContext } from "react";
import SideBar1 from "./components/SideBar1";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContex } from "./context/PlayerContexProvider";

const App = () => {
    const { audioref, track } = useContext(PlayerContex);

    return (
        <div className="h-screen bg-black">
            <div className="h-[90%] flex">
                <SideBar1 />
                <Display />
            </div>
            <Player />
            <audio ref={audioref} src={track.file} preload="auto"></audio>
        </div>
    );
};

export default App;
