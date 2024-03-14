import React from "react";
import "../../styles/main.css";
import Header from "../widgets/Header";
import ChooseConditions from "../widgets/ChooseConditions";

const Main: React.FC = () => {
    return (
        <div className="page-container">
            <Header></Header>
            <main className="main">
                <div className="container">
                    <div className="main__choose-text-container">
                        <span className="main__choose-text"><span className="main__highlighted-text">Choose</span> game conditions:</span>
                    </div>
                    <ChooseConditions></ChooseConditions>
                </div>
            </main>
        </div>
    );
}

export default Main;