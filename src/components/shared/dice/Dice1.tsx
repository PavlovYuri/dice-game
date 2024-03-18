import React from "react";
import "../../../styles/dice-svg.css"; 

const Dice1: React.FC = () => {
    return (
        <svg className="dice-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
            <g>
                <g>
                    <g>
                        <path d="M490.667,0H21.333C9.551,0,0,9.551,0,21.333v469.333C0,502.449,9.551,512,21.333,512h469.333 c11.782,0,21.333-9.551,21.333-21.333V21.333C512,9.551,502.449,0,490.667,0z M469.333,469.333H42.667V42.667h426.667V469.333z"></path>
                        <path d="M256,298.667c23.573,0,42.667-19.093,42.667-42.667S279.573,213.333,256,213.333S213.333,232.427,213.333,256 S232.427,298.667,256,298.667z"></path>
                    </g>
                </g>
            </g>
        </svg>
    ); 
};

export default Dice1;