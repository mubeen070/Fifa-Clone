import React from "react";
const MenRanking = (rank, thumb, title, points) => {
    
    return(
    <>
    <tr>
        <td>{rank}</td>
        <td>{thumb}</td>
        <td>{title}</td>
        <td>{points}</td>
    </tr>
    </>
    )
}
export default MenRanking;