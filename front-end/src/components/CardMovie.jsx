import {React, useState} from "react";


function CardMovie (props){
    return(
        <div className="card my-5">


            <h4>{props.titulo}</h4>

            <img className="img-thumbnail rounded mx-auto d-block" src={props.imagen} alt={props.titulo} width="400" height="600"/>


            <h4>Calificación Promedio</h4>
            <h4>{props.calificacion}</h4>

            
        </div>
    )
}

export default CardMovie