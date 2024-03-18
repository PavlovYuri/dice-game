import React from "react";
import "../../styles/match-str.css"
import Dice3 from "../shared/dice/Dice3";

const MatchStr: React.FC = () => {
    return (
        <tr className="matching__tr">
            <td className="matching__td">
                <td className="matching__dice-number">#1</td>
                <td className="matching__dice-type">
                    <tr className="matching__sub-tr">
                        <td className="matching__dice-sub-td">original</td>
                    </tr>
                    <tr className="matching__sub-tr">
                        <td className="matching__dice-sub-td">your</td>
                    </tr>
                    <tr className="matching__sub-tr">
                        <td className="matching__dice-sub-td">result</td>
                    </tr>
                </td>
            </td>
            <td className="matching__td">
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">red</td>
                </tr>
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">blue</td>
                </tr>
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">0</td>
                </tr>
            </td>
            <td className="matching__td">
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td"><Dice3></Dice3></td>
                </tr>
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td"><Dice3></Dice3></td>
                </tr>
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">1</td>
                </tr>
            </td>
            <td className="matching__td">
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">(312; 152)</td>
                </tr>
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">(300; 142)</td>
                </tr>
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">0.95</td>
                </tr>
            </td>
            <td className="matching__td">
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">0°</td>
                </tr>
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">0°</td>
                </tr>
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">1</td>
                </tr>
            </td>
            <td className="matching__td">
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td"></td>
                </tr>
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td"></td>
                </tr>
                <tr className="matching__sub-tr">
                    <td className="matching__sub-td">74 %</td>
                </tr>
            </td>
        </tr>
    );
};

export default MatchStr; 