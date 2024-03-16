import React from "react";
import "../../styles/choose-conditions.css";

const ChooseConditions: React.FC = () => {
    return (
        <div className="choose-conditions">
            <div className="choose-conditions__container">
                <div className="choose-conditions__inner-container">
                    <div className="choose-conditions__item-string">
                        <div className="choose-conditions__item-container">
                            <div className="choose-conditions__item-text">
                                Number of dice:
                            </div>
                            <div className="choose-conditions__item-input-container">
                                <input className="choose-conditions__item-input" name="dice-number" placeholder="from 1 to 10" type="text" data-max-count="10"/> 
                                <div className="choose-conditions__plus-minus-btn-container">
                                    <div className="choose-conditions__plus-btn-container">
                                        <svg className="choose-conditions__plus-btn" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m70.143 97.5-44.71-44.711a3.943 3.943 0 0 1 0-5.578l44.71-44.711 5.579 5.579-41.922 41.921 41.922 41.922z"></path>
                                        </svg>
                                    </div>
                                    <div className="choose-conditions__minus-btn-container">
                                        <svg className="choose-conditions__minus-btn" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m70.143 97.5-44.71-44.711a3.943 3.943 0 0 1 0-5.578l44.71-44.711 5.579 5.579-41.922 41.921 41.922 41.922z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="choose-conditions__item-container">
                            <div className="choose-conditions__item-text">
                                Time to remember:
                            </div>
                            <div className="choose-conditions__item-input-string">
                                <div className="choose-conditions__item-input-container">
                                    <input className="choose-conditions__item-input" name="remember_time" placeholder="from 1 to 30" type="text" data-max-count="10"/> 
                                    <div className="choose-conditions__plus-minus-btn-container">
                                        <div className="choose-conditions__plus-btn-container">
                                            <svg className="choose-conditions__plus-btn" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m70.143 97.5-44.71-44.711a3.943 3.943 0 0 1 0-5.578l44.71-44.711 5.579 5.579-41.922 41.921 41.922 41.922z"></path>
                                            </svg>
                                        </div>
                                        <div className="choose-conditions__minus-btn-container">
                                            <svg className="choose-conditions__minus-btn" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m70.143 97.5-44.71-44.711a3.943 3.943 0 0 1 0-5.578l44.71-44.711 5.579 5.579-41.922 41.921 41.922 41.922z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="choose-conditions__measure-unit">
                                    sec.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="choose-conditions__item-container">
                        <div className="choose-conditions__item-text">
                            Set of colors:
                        </div>
                        <div className="choose-conditions__input-listing">
                            <label className="choose-conditions__input-label">
                                <input className="choose-conditions__color-set-input" type="radio" name="color_set"/>
                                <div className="choose-conditions__input-label-text">
                                    Standard set <span className="choose-conditions__highlighted-text">&#123;red, green, blue, ...&#125;</span>
                                </div>
                            </label>
                            <label className="choose-conditions__input-label">
                                <input className="choose-conditions__color-set-input" type="radio" name="color_set"/>
                                <div className="choose-conditions__input-label-text">
                                    Extended set <span className="choose-conditions__highlighted-text">&#123;&#123;Standard set&#125;, olive, peach, coral, ...&#125;</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseConditions;