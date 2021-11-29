import {React, useState} from "react";

function CardReview (props){
    return(
        <div className="card">
            <h4>{props.score}</h4>
            <h4>{props.movie}</h4>
        </div>
    )
}

export default CardReview