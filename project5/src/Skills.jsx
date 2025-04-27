import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <>
    <h2 className="skill">My Skills</h2>
    <hr />
    <p className='para'>Technologies and tools I use to build modern, responsive, and user-friendly websites.</p>
    <div className='icon'>
    <div className='logo1'>
     <img src="html-5.png"  className='imag2'/>
    <p className='para1'>"Skilled in HTML5, with a strong understanding of semantic elements, <br /> multimedia integration, and modern web structure. Experienced in creating <br /> clean, accessible, and standards-compliant web pages using HTML5."</p>
    </div>
    <div className='logo2'>
      <img src="css.png" className='imag3'/>
      <p className='para2'>I'm a front-end developer specializing in CSS3, with a strong passion  <br />for crafting responsive, accessible, and visually appealing web interfaces. <br /> With a deep understanding of modern CSS techniques—including Flexbox, <br /> Grid, animations, and media queries </p>

    </div>
    <div className='logo3'>
      <img src="js3.png"  className='imag4'/>
      <p className='para3'>I'm a JavaScript developer with a strong focus on building dynamic, <br /> efficient, and scalable web applications. I work confidently with framework <br />  React to deliver responsive user interfaces and robust APIs. I enjoy solving<br />  complex problems with clean code, collaborating in agile teams, and continuously  <br />learning to stay updated with the latest in JavaScript development.</p>

    </div>
    
    </div>


    <div className='icon2'>
      <div className='logo4'>
        <img src="rj.png" className='imag5' />
        <p className='para4'>I'm a React developer with a passion for building interactive, high-performance <br /> web applications. I specialize in developing reusable components, managing state <br /> efficiently, and creating seamless user experiences using modern tools.  With a <br /> strong foundation in JavaScript and responsive design, I bring creative ideas to  <br /> life while ensuring code quality, performance, and scalability. I'm always  exploring <br /> new technologies and best practices to stay at the forefront of front-end development.</p>


      </div>

      <div className='logo5'>
       <img src="gi.png" className='imag6' />
       <p className='para5'>💻 Developer focused on building scalable, user-friendly web applications. <br />
🚀 Proficient in JavaScript, React and modern web technologies. <br />
🛠️ I love clean code, open-source collaboration, and continuous learning. <br />
🌍 Always exploring new tools, frameworks, and creative ideas. <br />
📬 Let’s connect and build something awesome!</p>
      </div>

      

    </div>
    </>
  )
}

export default Skills