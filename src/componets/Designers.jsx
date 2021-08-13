import React from 'react'
import team2 from "./images/team2.jpg"
import team1 from "./images/team1.jpg"
import team3 from "./images/team3.jpg"
function Designers() {

    return ( <div id="Designers">
              <h2 className="section-name">Designers</h2>
              <div className="section-line"></div>
              <p>The best in the world.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi facilisis, varius sem at, fermentum lacus. Nullam dictum erat leo, vitae ornare tellus feugiat sed. Curabitur tortor ante, eleifend eu egestas et, vulputate id turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ultricies cursus diam sit amet pulvinar. Sed libero ante, interdum eget fermentum vel, pulvinar sit amet nulla. Ut urna augue, sollicitudin id dignissim id, tempus et mauris. Proin sem velit, malesuada in odio id, fermentum finibus augue. Sed ullamcorper ante eget nulla commodo, sed gravida orci congue.</p>
              <span>
                  <p>Our designers are thoughtfully chosen:</p>
              </span>
              <div className="designer">
                  <img src={team2} alt=""/>
                  <div className="about-designer">
                      <h2>John Doe</h2>
                      <p>CEO & Founder</p>
                      <p>Sed libero ante, interdum eget fermentum vel, pulvinar sit amet nulla. Ut urna augue, sollicitudin id dignissim id, tempus et mauris. Proin sem velit, malesuada in odio id, fermentum finibus augue. Sed ullamcorper ante eget nulla commodo</p>
                  </div>
              </div>
              <div className="designer">
                  <img src={team1} alt=""/>
                  <div className="about-designer">
                      <h2>Jane Doe</h2>
                      <p>Designer</p>
                      <p>Sed libero ante, interdum eget fermentum vel, pulvinar sit amet nulla. Ut urna augue, sollicitudin id dignissim id, tempus et mauris. Proin sem velit, malesuada in odio id, fermentum finibus augue. Sed ullamcorper ante eget nulla commodo</p>
                  </div>
              </div>
              <div className="designer">
                  <img src={team3} alt=""/>
                  <div className="about-designer">
                      <h2>Mike Ross</h2>
                      <p>Architect</p>
                      <p>Sed libero ante, interdum eget fermentum vel, pulvinar sit amet nulla. Ut urna augue, sollicitudin id dignissim id, tempus et mauris. Proin sem velit, malesuada in odio id, fermentum finibus augue. Sed ullamcorper ante eget nulla commodo</p>
                  </div>
              </div>
          </div>

    )

}

export default Designers