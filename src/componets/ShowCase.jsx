import React from 'react'
import kitchenconcrete from "./images/kitchenconcrete.jpg"
import atrium from "./images/atrium.jpg"
import livingroom from "./images/livingroom.jpg"
import livingroom2 from "./images/livingroom2.jpg"
import diningroom from "./images/diningroom.jpg"
import bedroom from "./images/bedroom.jpg"
function ShowCase() {

    return ( 
      <div id="showcase">
            <h2 className="section-name">Showcase.</h2>
             <div class="section-line"></div>
            <img src={kitchenconcrete} alt=""/>
            <img src={atrium} alt=""/>
            <img src={livingroom} alt=""/>
            <img src={diningroom} alt=""/>
            <img src={bedroom} alt=""/>
            <img src={livingroom2} alt=""/>
      </div>

    )

}

export default ShowCase