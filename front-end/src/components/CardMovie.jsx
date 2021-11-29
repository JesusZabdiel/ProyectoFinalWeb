import {React, useState} from "react";


function CardMovie (props){
    return(
        <div className="card">
            <img className="img-thumbnail" src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt={props.titulo} width="200px" hanging="350"/>
            <h4>{props.titulo}</h4>
            <h4>{props.calificacion}</h4>
        </div>
    )
}

export default CardMovie