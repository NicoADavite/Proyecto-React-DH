import React, { Component } from 'react';

import Genre from './Genre';

class GenresInDb extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            genresList: []
        }
    }

    cambiarFondoBody(){
        document.querySelector("#genres-card-body").classList.toggle("bg-secondary");
    }

    originalFondoBody(){
        document.querySelector("#genres-card-body").classList.toggle("bg-secondary");
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/genres")
            .then(response => { return response.json()})
            .then(genres => {
                this.setState({genresList: genres.data})
                console.log(this.state.genresList)
            })
    }
    
    render() {
        
        return ( 
            <React.Fragment>
                {/* Genres in DB */}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.cambiarFondoBody} onMouseLeave={this.originalFondoBody}>Genres in Data Base</h5>
                        </div>
                        <div className="card-body" id="genres-card-body">
                            <div className="row">
                                {this.state.genresList.map((genero, i) => { 
                                    return < Genre {...genero} key={`genero-${i}`} />                
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default GenresInDb;
// function GenresInDb(){
//     return(
//         <React.Fragment>
            // {/* Genres in DB */}
            // <div className="col-lg-6 mb-4">						
            //     <div className="card shadow mb-4">
            //         <div className="card-header py-3">
            //             <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
            //         </div>
            //         <div className="card-body">
            //             <div className="row">
            //                 <div className="col-lg-6 mb-4">
            //                     <div className="card bg-dark text-white shadow">
            //                         <div className="card-body">
            //                             Acción
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-6 mb-4">
            //                     <div className="card bg-dark text-white shadow">
            //                         <div className="card-body">
            //                             Animación
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-6 mb-4">
            //                     <div className="card bg-dark text-white shadow">
            //                         <div className="card-body">
            //                             Aventura
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-6 mb-4">
            //                     <div className="card bg-dark text-white shadow">
            //                         <div className="card-body">
            //                             Ciencia Ficción
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-6 mb-4">
            //                     <div className="card bg-dark text-white shadow">
            //                         <div className="card-body">
            //                             Comedia
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-6 mb-4">
            //                     <div className="card bg-dark text-white shadow">
            //                         <div className="card-body">
            //                             Documental
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-6 mb-4">
            //                     <div className="card bg-dark text-white shadow">
            //                         <div className="card-body">
            //                             Drama
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-6 mb-4">
            //                     <div className="card bg-dark text-white shadow">
            //                         <div className="card-body">
            //                             Fantasia
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-6 mb-4">
            //                     <div className="card bg-dark text-white shadow">
            //                         <div className="card-body">
            //                             Infantiles
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-6 mb-4">
            //                     <div className="card bg-dark text-white shadow">
            //                         <div className="card-body">
            //                             Musical
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
//         </React.Fragment>
//     )
// }

// export default GenresInDb;

