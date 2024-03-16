import React from "react";
import "../../styles/control-panel.css";

const ControlPanel: React.FC = () => {
    return (
        <div className="control-panel">
            <div className="control-panel__item">
                <span className="control-panel__remaining-time-text">Remaining time: </span>
                <span className="control-panel__remaining-time-value">0</span> sec.
            </div>
            <div className="control-panel__item">
                <span className="control-panel__remaining-dice-text">Remaining dice: </span>
                <span className="control-panel__remaining-dice-value">0</span>
            </div>
            <div className="control-panel__item">
                <button className="control-panel__check-btn"> 
                    Check
                </button>
            </div>
            <div className="control-panel__item">
                <button className="control-panel__next-btn">
                    Next
                </button>
            </div>
        </div>
    );
};

export default ControlPanel; 