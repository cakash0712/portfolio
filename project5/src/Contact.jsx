import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
  <>
   <h1 style={{marginLeft:"40px",color:"blueviolet"}}>Contact</h1>
   <h2 className='cont2'>Get In Touch</h2>
   <p className='cont'>
   
   I'd love to hear from you! Whether you have a question, project idea, <br /> or just want to connect, feel free to reach out.
   </p>
  <div className='input'>
  <input type="text" placeholder='Name' required  className='name'/>
  <br />
  <br />
  <input type="email" placeholder='Email' required className='email'/>
  <br />
  <br />
  <textarea name="message" placeholder='your message' rows={5} required className='text'></textarea>
  <br />

  <button className='ent'>Enter</button>
  <p className="p3">Thank you for visiting my portfolio. Let's connect!</p>
  </div>
  <div className='footer'>
  <a href="https://github.com/cakash0712"><i class="fab fa-github ss1"></i></a>
  <a href="https://www.linkedin.com/in/akashc45/"><i class="fab fa-linkedin sr1"></i></a>
    <p className='p1'>91+ 7806854956 | cakash0712@gmail.com</p>
  <p className="p2">© 2025 Akash</p>
  

  </div>
  </>
  )
}

export default Contact