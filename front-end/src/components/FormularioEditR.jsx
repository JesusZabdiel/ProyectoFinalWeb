import React from "react"


class FormularioEditR extends React.Component {

    constructor(){
        super()
        this.state={
            _idFiltro: "",
            movie: "",
            score: "",
            reseñaTexto: ""

        }
    }

    handleInput = (e)=>{
        const {value, name} = e.target
        this.setState({
            [name]:value
        })

    }

    handleSumbit = async () => {
        const res = await fetch("http://localhost:8080/Reviews/editReview", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                filtro:{
                    _id: this.state._idFiltro
                },
                cambio:{
                    _id: this.state._idFiltro,
                    movie: this.state.movie,
                    score: this.state.score,
                    reseñaTexto: this.state.reseñaTexto
                }
            })
          }
        )

    }
    render(){
        return(
            <div className="container">
    
                <h2>Ingresa los datos de tu película</h2>
    

            <label>Id De la reseña</label>    
            <input onChange={this.handleInput}  className="form-control mb-5" type="text" name="_idFiltro"/>
            <label>Película de la reseña</label>    
            <input onChange={this.handleInput}  className="form-control mb-5" type="text" name="movie"/>
            <label>Calificación del 1 al 5</label> 
            <input onChange={this.handleInput}  className="form-control mb-5" type="number" min={1} max={5} name="score"/>
            <label>Escribe tu nueva reseña</label>
            <input onChange={this.handleInput} className="form-control mb-5" type="text" name="reseñaTexto"/>
            <button className="btn btn-success" type="button" onClick={this.handleSumbit}>Añadir</button>
    
            </div>)

    }

}

export default FormularioEditR