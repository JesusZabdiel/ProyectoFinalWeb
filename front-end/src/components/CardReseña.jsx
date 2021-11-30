import {React, useState} from "react";

function CardReview (props){

    const [_id ,setId] = useState(props._id)

    
    return(
        <div className="card my-5 bg-secondary">

            <h4>{props.movie}</h4>
            <p>{props.reseñaTexto}</p>
            <h4>Calificación</h4>
            <h4>{props.score}</h4>
            
        </div>
    )
}

export default CardReview