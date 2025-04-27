import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <>


    <h1 className='proj'>PROJECTS</h1>

    <div className='project'>
      <div >
        <h2 className='pr1'> Basic E-commerce Website</h2>
         <h3 className='pro1'>
         Developed a responsive e-commerce website using HTML, CSS, <br />
        and JavaScript to simulate an online shopping experience.


         </h3>

         <h3 className='pro2'>
         Implemented product listings and shopping cart functionality.
         </h3>
          <h3 className='pro3'>
          Used basic DOM manipulation to display and update cart items <br />
          dynamically.
          </h3>
          <button className='view2'><a href="https://github.com/cakash0712/CARTIFY" >View</a></button>
      </div>
      <div>
       <img src="ca.png"  className='ca'/>
      </div>
    </div>


    <div className='project1'>
      <div >
        <h2 className='pr11'>Calculator </h2>
        <h3 className='pro11'>
        Created a functional, browser-based calculator using HTML, CSS, <br />
        and vanilla JavaScript.
        </h3>

        <h3 className='pro12'>
        Supported basic arithmetic operations with real-time input and <br />
        result display.
        </h3>
         <h3 className='pro13'>
         Designed an intuitive, minimal interface that works across desktop <br />
         and mobile devices.
         </h3>
         
          <button className='view2'><a href="https://github.com/cakash0712/CALCULATOR" >View</a></button>
      </div>
      <div>
       <img src="cal.png"  className='cal'/>
      </div>
    </div>


    <div className='project2'>
      <div >
        <h2 className='pr13'>Interactive Website
        </h2>
        <h3 className='pro21'>
        Built an interactive multi-page website showcasing animations, <br />
        transitions, and dynamic content.
        </h3>

        <h3 className='pro22'>
        Utilized JavaScript to create user interactions such as image <br />
        sliders, modals, and collapsible sections
        </h3>
         <h3 className='pro23'>
         Ensured smooth navigation and responsiveness using CSS <br />
         Flexbox/Grid and media queries.
         </h3>
         
          <button className='view2'><a href="https://github.com/cakash0712/Cat-facts" >View</a></button>
      </div>
      <div>
       <img src="ap.png"  className='ap'/>
      </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Project