import React from 'react';
import Email from "../assets/images/emailIcon.png"
import GitHub from "../assets/images/githubIcon.png"
import Linkedin from "../assets/images/linkedinIcon.png"
import twitter from "../assets/images/twitter.png"

const Footer = () => {
  const date = new Date();

  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <img src= {twitter} alt="Twitter Logo" style={styles.icon} />
      </a>

      <a href="mailto:your.email@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={Email} alt="Gmail Logo" style={styles.icon} />
      </a>

      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <img src={Linkedin} alt="LinkedIn Logo" style={styles.icon} />
      </a>

      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="GitHub Logo" style={styles.icon} />
      </a>
      
     </div>
     <p style={styles.copyright}>&copy; {date.getFullYear()} Onyoh kevin</p>
     
     
    </footer>
  );
};

const styles = {
    footer: {
  
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      width: "100%",
      height: '100px',
      marginTop: "150px"
    },
    iconContainer: {
        display: 'flex',
        marginBottom: '20px',
        alignItems: 'center',
      },
    icon: {
      width: '20px', 
      height: 'auto',
      margin: '10px', 
    },
    copyright: {
         margin: 0,
         marginBottom: '20px',
      },
  };

 

export default Footer;
