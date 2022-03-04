import React from 'react';

import SideBar from './SideBar.js';
import ContentWrapper from './ContentWrapper.js';

function Wrapper(){
    return(
        /* Start of Page Wrapper */
        <div id="wrapper">
            <SideBar />
            <ContentWrapper />                  
        </div>
        /* End of Page Wrapper */
    )
}

export default Wrapper;


