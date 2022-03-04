import React from 'react';
import PropTypes from 'prop-types';

function Movie(props) {

    // let genres;
    
    // if(props.generos !== "No hay Géneros"){
    //     genres = props.genre_id.map((genero, i) => {return(<li key={`genero${i}`}>{genero}</li>)});
    // } else {
    //     genres = props.genre_id;
    // }
    
    return (  
        <React.Fragment>
            <tr>
                <td>{props.title}</td>
                <td>{props.length}</td>
                <td>{props.rating}</td>
                <td>{props.genre_id}</td>   
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

