import React from 'react';
import PropTypes from 'prop-types';

function Movie(props) {

    // let genres;
    
    // if(props.generos !== "No hay Géneros"){
    //     genres = props.genre_id.map((genero, i) => {return(<li key={`genero${i}`}>{genero}</li>)});
    // } else {
    //     genres = props.genre_id;
    // }

    let length;
    if(props.length === null){
        length = "-"
    } else {
        length = props.length
    }

    let genre;
    if(props.genre === null){
        genre = "-"
    } else {
        genre = props.genre.name
    }
    
    return (  
        <React.Fragment>
            <tr>
                <td className='movie-title'>{props.title}</td>
                <td>{length}</td>
                <td>{props.rating}</td>
                <td>{genre}</td>   
                <td>{props.awards}</td>
            </tr>
        </React.Fragment>
    );
}

Movie.propTypes = {
    titulo: PropTypes.string.isRequired,
    duracion: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    generos: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    premios: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

Movie.defaultProps = {
   titulo: "No hay Título",
   duracion: "No hay Duración",
   rating: "No hay Rating",
   generos: "No hay Géneros",
   premios: "No hay Premios"
}

export default Movie;

