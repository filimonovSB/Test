import React from 'react'

function Contacts() {

    return (<div id="contact">
              <h2 className="section-name">Contact.</h2>
              <div className="section-line"></div>
              <p>Do you want us to style yuor home? Fill out the form and fill me in with the details :) We love meting new people!</p>
              <form action="">
                  <label for="Name">Name</label>
                  <input type="text" id="Name"/>
                  <label for="Email">Email</label>
                  <input type="email" id="Email" />
                  <label for="message">Message</label>
                  <input type="text" id="message"/>
                  <input type="submit" value="Send Message" />
              </form>
              </div> 

    )

}

export default Contacts