import logo from './logo.svg';
import './App.css';
import CardMovie from './components/CardMovie';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import {Route, Routes, Link, Outlet} from 'react-dom'
import CardReview from './components/CardReseña';


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
        <div className="container">
          <CardReview titulo={reseña.titulo} movie={reseña.movie}></CardReview>
        </div>
      )
    })
    return(
      <div>
        <h1>Reviews</h1>
        {reseñasActuales}
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
    console.log(this.state.movies)
    const moviesActuales = this.state.peliculas.map((movie, id)=>{
      return(
          <div className="col-md-4">
            <CardMovie titulo={movie.titulo} calificacion={movie.avgScore}></CardMovie>
          </div>
      
        )
    })

    return(
      <div>
        {moviesActuales}
      </div>
      
    )

  }

}


function App() {


  return (
    <div className="App">
      <NavBar/>
      <Movies/>
      <Reviews/>
    </div>
  );

  
}


export default App;
