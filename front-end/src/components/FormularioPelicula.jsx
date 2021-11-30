import React from "react"


class FormularioPelicula extends React.Component {

    constructor(){
        super()
        this.state={
            titulo:"",
            descripcion: "",
            avgScore:0,
            imagen:""
        }
    }

    handleInput = (e)=>{
        const {value, name} = e.target
        this.setState({
            [name]:value
        })

    }

    handleSumbit = async () => {
        //const {tituloInput, imagenInput, descripcionInput} = e.target
        const tituloInput = "Nueva Película"
        const imagenInput = "https://firebasestorage.googleapis.com/v0/b/webdev-3976c.appspot.com/o/endgame.jpg?alt=media&token=c2ed4cd7-81cf-452c-b9a8-5c8019a902ea"
        const descripcionInput = "Nueva Pelicula"
        const res = await fetch("http://localhost:8080/Movies/addMovie", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              titulo: this.state.titulo,
              avgScore: 0,
              descripcion: this.state.descripcion,
              imagen: this.state.imagen
            })
          }
        )

    }
    render(){
        return(
            <div className="container">
    
                <h2>Ingresa los datos de tu película</h2>
    

            <label>Título de la película</label>    
            <input onChange={this.handleInput}  className="form-control mb-5" type="text" name="titulo"/>
            <label>Descripción Breve</label> 
            <input onChange={this.handleInput}  className="form-control mb-5" type="text" name="descripcion"/>
            <label>Url de imagen</label> 
            <input onChange={this.handleInput} className="form-control mb-5" type="text" name="imagen"/>
            <button className="btn btn-success" type="button" onClick={this.handleSumbit}>Añadir</button>
    
            </div>
        )

    }

}

export default FormularioPelicula