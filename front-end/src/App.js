import logo from './logo.svg';
import './App.css';
import CardMovie from './components/CardMovie';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import {Route, Routes, Link, Outlet} from 'react-router-dom'
import CardReview from './components/CardReseña';
import FormularioPelicula from './components/FormularioPelicula'


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

  render(){
    const reseñasActuales = this.state.reseñas.map((reseña, id,)=>{
      return(
        <div className="col-md-4">
          <CardReview score={reseña.score} movie={reseña.movie} reseñaTexto= {reseña.reseñaTexto}></CardReview>
        </div>
      )
    })
    return(
      <div>
        <h1>Reviews</h1>
        <div className="container bg-ligth">
            <button className="btn btn-success"><Link to="/addReview">Añadir Reseña</Link></button>
            <button className="btn btn-success"><Link to="/addReview">Borrar Reseña</Link></button>
            <button className="btn btn-success"><Link to="/addReview">Actualizar Reseña</Link></button>
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
            <button className="btn btn-success"><Link to="/addMovie">Añadir Película</Link></button>
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

      </Routes>

    </div>
  )

  
}


export default App;
