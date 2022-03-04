import React from "react";

import PropTypes from "prop-types";

function ContentRowMovies(props){
    return(
        /* Content Row Movies*/
        <div className="row">

            {props.cardsProperties.map((card, i) => {
                return(
                    <div className="col-md-4 mb-4" key={"tarjeta" + i}>
                        <div className={`card border-left-${card.color} shadow h-100 py-2`}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className={`text-xs font-weight-bold text-${card.color} text-uppercase mb-1`}>{card.titulo}</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{card.cifra}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className={`fas ${card.icono} fa-2x text-gray-300`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                )            
            })}

        </div>
        /* End Content Row Movies */
    )
}



ContentRowMovies.propTypes = {
    cardsProperties: PropTypes.arrayOf(
        PropTypes.shape({
            titulo: PropTypes.string.isRequired,
            cifra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            color: PropTypes.string.isRequired,
            icono: PropTypes.string.isRequired
        })
    ).isRequired
}

ContentRowMovies.defaultProps = {
    cardsProperties: [{
        titulo: "No hay titulo",
        cifra: "No hay cifra"
    }]
}

export default ContentRowMovies;