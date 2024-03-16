import React from "react";
import "../../styles/main.css";
import Header from "../widgets/Header";
import ChooseConditions from "../widgets/ChooseConditions";
import PlayBtn from "../shared/PlayBtn";
import ControlPanel from "../widgets/ControlPanel";
import GameField from "../widgets/GameField";
import Navbar from "../widgets/Navbar";

const Main: React.FC = () => {
    return (
        <div className="page-container">
            <Navbar></Navbar>
            {/* <Header></Header> */}
            <main className="main">
                <div className="container">
                    {/* <div className="main__choose-text-container">
                        <span className="main__choose-text"><span className="main__highlighted-text">Choose</span> game conditions:</span>
                    </div>
                    <ChooseConditions></ChooseConditions>
                    <div className="main__play-btn-container">
                        <PlayBtn></PlayBtn>
                    </div>  */}
                    <ControlPanel></ControlPanel>
                    <GameField></GameField>
                </div>
            </main>
        </div>
    );
}

export default Main;