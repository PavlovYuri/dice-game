import React from "react";
import "../app/styles/overall-result.css";

const OverallResult: React.FC = () => {
    return (
        <tr className="matching__sub-tr">
            <td className="matching__td matching__overall-result-td">Overall result</td>
            <td className="matching__td matching__overall-result-td">0 %</td>
            <td className="matching__td matching__overall-result-td">0 %</td>
            <td className="matching__td matching__overall-result-td">0 %</td>
            <td className="matching__td matching__overall-result-td">0 %</td>
            <td className="matching__td matching__overall-result-td">0 %</td>
        </tr>
    ); 
};

export default OverallResult;

