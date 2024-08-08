import React from "react";
import SideBar1 from "./components/SideBar1";
import Player from "./components/Player";
import Display from "./components/Display";

const App = () => {
    return (
        <div className="h-screen bg-black">
            <div className="h-[90%] flex">
                <SideBar1 />
                <Display />
            </div>
            <Player />
        </div>
    );
};

export default App;
