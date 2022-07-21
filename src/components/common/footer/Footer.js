import React from 'react'
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';



const Footer = () => {
  return (
    <section className='footer'> 
      <hr className='footer__line ' />
      <section className='footer__social'>
        <div><a href='https://www.linkedin.com/in/dennislittlefield/'><LinkedInIcon sx={{ fontSize: "40px" }} /></a></div>
        <div><a href='https://github.com/DLittlefield81/'><GitHubIcon sx={{ fontSize: "40px" }} /></a></div>
        <div><a href='https://www.facebook.com/DLittlefield1981'><FacebookIcon sx={{ fontSize: "40px" }} /></a></div>
      </section>
    </section>
  )
}

export default Footer