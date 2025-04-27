import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    
    <div style={{display:"flex"}}>
   <div>
    <div className='head1'>
        <h1>HI,</h1>
         <h1>I'm Akash</h1>
         <h2 style={{color:"green"}} className='front'>Front-end Developer</h2>
         <p>passionate about crafting clean, responsive, and user-friendly interfaces. <br />  With experience in HTML, CSS, JavaScript, and modern frameworks like  <br />React and Vue, I bring ideas to life in the browser. Whether it’s building <br /> from scratch or improving existing projects, I focus on performance, accessibility,  <br />and seamless user experience.</p>
    

   
    </div>

    <div className='head2'>
      
  <a href="https://github.com/cakash0712"><i class="fab fa-github ss"></i></a>
   <a href="https://www.linkedin.com/in/akashc45/"><i class="fab fa-linkedin sr"></i></a>

 
   

    </div>
    </div>

    <div>
      <img src="akash3.jpg" className='imag'/>
    </div>
   
   </div>
    
    </>
  )
}

export default Home