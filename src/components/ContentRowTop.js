import React from "react";

import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowTop(){
    return(
        /* Content Row Top */
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            
            < ContentRowMovies 
                cardsProperties={[
                    {titulo: "Movies in Data Base", cifra: 21, color: "primary", icono: "fa-film" }, 
                    {titulo: "Total awards", cifra: 79, color: "success", icono: "fa-award"}, 
                    {titulo: "Actors quantity", cifra: 49, color: "warning", icono: "fa-user"}
            ]}/>

            {/* Content Row Last Movie in Data Base */}
            <div className="row">
                < LastMovieInDb />
                < GenresInDb />  
            </div>
        </div>
        /*End Content Row Top*/
    )
}

export default ContentRowTop;

