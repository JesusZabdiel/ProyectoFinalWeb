import React from "react"


class FormularioReseña extends React.Component {

    constructor(){
        super()
        this.state={
            movie:"",
            score: 0,
            reseñaTexto:"",
        }
    }

    handleInput = (e)=>{
        const {value, name} = e.target
        this.setState({
            [name]:value
        })

    }

    handleSumbit = async () => {
        const res = await fetch("http://localhost:8080/Reviews/addReview", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              movie: this.state.movie,
              score: this.state.score,
              reseñaTexto: this.state.reseñaTexto
            })
          }
        )

    }
    render(){
        return(
            <div className="container">
    
                <h2>Ingresa los datos de tu película</h2>
    

            <label>Película de la reseña</label>    
            <input onChange={this.handleInput}  className="form-control mb-5" type="text" name="movie"/>
            <label>Calificación del 1 al 5</label> 
            <input onChange={this.handleInput}  className="form-control mb-5" type="number" min={1} max={5} name="score"/>
            <label>Escribe tu reseña</label>
            <input onChange={this.handleInput} className="form-control mb-5" type="text" name="reseñaTexto"/>
            <button className="btn btn-success" type="button" onClick={this.handleSumbit}>Añadir</button>
    
            </div>        )

    }

}

export default FormularioReseña