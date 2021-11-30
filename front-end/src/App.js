import logo from './logo.svg';
import './App.css';
import CardMovie from './components/CardMovie';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import {Route, Routes, Link, Outlet} from 'react-router-dom'
import CardReview from './components/CardReseña';
import FormularioPelicula from './components/FormularioPelicula'
import FormularioReseña from './components/FormularioReseña';
import FormularioEditR from './components/FormularioEditR';


class Reviews extends React.Component{ 
  constructor(){
    super()
    this.state = {
      reseñas : []
    }
  }

  componentDidMount(){
    //consumiento servicio get
    fetch("http://localhost:8080/Reviews/reviews")
    .then(res=>res.json())
    .then(datos =>{
      console.log(datos)
      this.setState({
        reseñas :datos
      })
    })
    .catch(err=>{
      console.log(console.error())
    })
  }

  eliminarReseña = async (id) =>{
    const res = await fetch("http://localhost:8080/Reviews/deleteReview", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              _id: id
            })
          }
        )
  }


  render(){
    const reseñasActuales = this.state.reseñas.map((reseña, id,)=>{
      return(
        <div className="col-md-4">
          <CardReview _id={reseña._id}score={reseña.score} movie={reseña.movie} reseñaTexto= {reseña.reseñaTexto} onEliminarReseña={this.eliminarReseña}></CardReview>
        </div>
      )
    })
    return(
      <div>
        <h1>Reviews</h1>
        <div className="container bg-ligth justify-content-around">
            <button className="btn btn-success mx-5"><Link to="/addReview" style={{ textDecoration: 'none'}}>Añadir Reseña</Link></button>
            <button className="btn btn-danger mx-5"><Link to="/deleteReview" style={{ textDecoration: 'none'}}>Borrar Reseña</Link></button>
            <button className="btn btn-warning mx-5"><Link to="/editReview" style={{ textDecoration: 'none'}}>Actualizar Reseña</Link></button>
          </div>
        <div className="row mb-5">
          {reseñasActuales}
        </div>
        
      </div>
    )
  }
}

class Movies extends React.Component{

  constructor(){
    super()
    this.state = {
      peliculas : []
    }
  }



  componentDidMount(){
    //consumiento servicio get
    fetch("http://localhost:8080/Movies/movies")
    .then(res=>res.json())
    .then(datos =>{
      console.log(datos)
      this.setState({
        peliculas :datos
      })
    })
    .catch(err=>{
      console.log(console.error())
    })
  }

  render(){
    const movies = this.state.peliculas.map((movie, index)=>{
      return(
        <div className="col-md-4">
        <CardMovie titulo={movie.titulo} calificacion={movie.avgScore} imagen={movie.imagen}></CardMovie>
        </div>
      )

    })
    return(
      <div>
        <br/>
        <h1 className="h1 ">Peliculas</h1>
        <div className="container bg-ligth my-3">
          <h6>¿No encuentras tu película?</h6>
          <div className="container bg-ligth">
            <button className="btn btn-success"><Link to="/addMovie" style={{ textDecoration: 'none'}}>Añadir Película</Link></button>
          </div>
          <br></br>
        </div>
        


        <div className="row mb-5">
          {movies}
        </div>
      </div>
    )
  }

}


function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>        
        <Route path="/" element={<Movies></Movies>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/addMovie" element={<FormularioPelicula></FormularioPelicula>}></Route>
        <Route path="/addReview" element={<FormularioReseña></FormularioReseña>}></Route>
        <Route path="/editreview" element={<FormularioEditR></FormularioEditR>}></Route>

      </Routes>

    </div>
  )

  
}


export default App;
