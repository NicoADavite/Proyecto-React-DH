import React from "react";

import MainContent from "./MainContent.js";
import Movies from "./Movies.js";
import Footer from "./Footer.js";

function ContentWrapper(){
    return(
        /* Content Wrapper */
        <div id="content-wrapper" className="d-flex flex-column">
            < MainContent />
            < Movies />
            < Footer />
        </div>
        /* End of Content Wrapper */
    )
    
}

export default ContentWrapper;

  