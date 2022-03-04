import React, { Component } from 'react';

import Movie from "./Movie";

import './Movies.css'

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/movies")
            .then(response => {return response.json()})
            .then(movies => {
                console.log(movies)
                this.setState({movies: movies.data})
                console.log(movies)
            })
    }

    render() { 
        return (  
            <React.Fragment>
                <table border="1" className="tabla-peliculas">
                    <thead>
                        <tr>
                            <th>TITULO</th>
                            <th>DURACION (min)</th>
                            <th>RATING</th>
                            <th>GENERO</th>
                            <th>PREMIOS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie, i) => {return(<Movie {...movie} key={`movie-${i}`}/>)})}                    
                    </tbody>

                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;

// import React from "react";

// import FilasTablaPeliculas from "./FilasTablaPeliculas";

// import './TablaPeliculas.css'

// let fila1 = {
//     titulo: "Billy Elliot",
//     duracion: 123,
//     rating: 5,
//     generos: ["Drama", "Comedia"],
//     premios: 2
// };

// let fila2 = {
//     titulo: "Alicia en el país de las maravillas",
//     duracion: 142,
//     rating: 4.8,
//     generos: ["Drama", "Acción", "Comedia"],
//     premios: 3
// };

// let filas = [fila1, fila2]


// function TablaPeliculas() {
//     return (
//         <React.Fragment>
//             <table border="1" className="tabla-peliculas">
//                 <tbody>
//                     <tr>
//                         <th>Título</th>
//                         <th>Duración</th>
//                         <th>Rating</th>
//                         <th>Géneros</th>
//                         <th>Premios</th>
//                     </tr>
//                     {filas.map((fila, i) => {return(<FilasTablaPeliculas {...fila} key={`fila${i}`}/>)})}                    
//                 </tbody>

//             </table>
//         </React.Fragment>
//     );
// }

// export default TablaPeliculas;
