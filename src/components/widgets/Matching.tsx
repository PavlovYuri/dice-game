import React from "react";
import "../../styles/matching.css";
import MatchStr from "./MatchStr";
import OverallResult from "./OverallResult";

const Matching: React.FC = () => {
    return (
        <div className="matching">
            <table className="matching__table">
                <tr className="matching__header-tr">
                    <th className="matching__high-th"><span className="matching__dice-highlighted-text">Dice</span></th>
                    <th className="matching__high-th"></th>
                    <th className="matching__high-th"></th>
                    <th className="matching__high-th"><span className="matching__matching-highlighted-text">Matching</span></th>
                    <th className="matching__high-th"></th>
                    <th className="matching__high-th"></th>
                </tr>
                <tr className="matching__header-tr">
                    <th className="matching__th"></th>
                    <th className="matching__th">Color</th>
                    <th className="matching__th">Number</th>
                    <th className="matching__th">Position</th>
                    <th className="matching__th">Rotation</th>
                    <th className="matching__th">% correct</th>
                </tr>
                <MatchStr></MatchStr>
                <OverallResult></OverallResult>
            </table>
        </div>
    );
};

export default Matching;