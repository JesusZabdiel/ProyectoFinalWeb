import React from "react"


class FormularioDeleteR extends React.Component {

    constructor(){
        super()
        this.state={
            _id:""
        }
    }

    handleInput = (e)=>{
        const {value, name} = e.target
        this.setState({
            [name]:value
        })

    }

    handleSumbit = async () => {
        const res = await fetch("http://localhost:8080/Reviews/deleteReview", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              _id: this.state._id,
            })
          }
        )

    }
    render(){
        return(
            <div className="container">
    
                <h2>Ingresa los datos de tu película</h2>
    

            <label>Id de la reseña</label>    
            <input onChange={this.handleInput}  className="form-control mb-5" type="text" name="_id"/>
            <button className="btn btn-danger" type="button" onClick={this.handleSumbit}>Borrar</button>
    
            </div>        )

    }

}

export default FormularioDeleteR