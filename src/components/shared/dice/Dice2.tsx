import React from "react";
import "../../../styles/dice-svg.css"; 

const Dice2: React.FC = () => {
    return (
        <svg className="dice-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
            <g>
                <g>
                    <g>
                        <path d="M490.667,0H21.333C9.551,0,0,9.551,0,21.333v469.333C0,502.449,9.551,512,21.333,512h469.333 c11.782,0,21.333-9.551,21.333-21.333V21.333C512,9.551,502.449,0,490.667,0z M469.333,469.333H42.667V42.667h426.667V469.333z"></path>
                        <path d="M149.333,170.667C172.907,170.667,192,151.573,192,128c0-23.573-19.093-42.667-42.667-42.667 c-23.573,0-42.667,19.093-42.667,42.667C106.667,151.573,125.76,170.667,149.333,170.667z"></path>
                        <path d="M362.667,426.667c23.573,0,42.667-19.093,42.667-42.667c0-23.573-19.093-42.667-42.667-42.667 C339.093,341.333,320,360.427,320,384C320,407.573,339.093,426.667,362.667,426.667z"></path>
                    </g>
                </g>
            </g>
        </svg>
    ); 
};

export default Dice2;