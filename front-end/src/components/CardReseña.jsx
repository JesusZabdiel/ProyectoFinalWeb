import {React, useState} from "react";

function CardReview (props){

    
    return(
        <div className="card my-5 bg-secondary">

            <h4>{props.movie}</h4>
            <p>{props.reseñaTexto}</p>
            <h4>Calificación</h4>
            <h4>{props.score}</h4>

            <div className="card-footer">
                <button className="btn btn-danger mx-3">Eliminar</button>
            </div>
            
        </div>
    )
}

export default CardReview