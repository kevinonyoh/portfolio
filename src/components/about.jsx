import {motion} from "framer-motion";
import React from 'react';
import { Grid, Typography, Box, Divider } from '@mui/material';
export default function About() {
    return (
        <motion.div 
      
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: {duration: 0.9}}}
      >
          

        <div style={{ padding: 20 }}>
        <Divider><Typography variant="h3">About</Typography></Divider>
            <Grid
             container
            rowSpacing={0.5}
             direction="row"
             alignItems="center"
             justifyContent="center"
            >
                <Grid xs={12} md={8}>
                
                    <Box sx={{marginTop: "40px", marginBottom: "40px"}}> 
                        <p>
                        I am Kevin Onyoh, and I specialize in backend development. I have over three years of professional expertise in this sector. My knowledge includes a thorough understanding of Rest API and microservices architecture, showcasing my ability to design and implement solid backend solutions. Throughout my career, I have actively contributed to the creation of scalable and efficient systems, applying my experience to improve application performance and functionality.
                        </p>
                        <p>
                        In the ever-changing world of technology, I've always kept up with the newest industry trends and best practices, ensuring that my abilities stay cutting-edge. My dedication to excellence and enthusiasm for problem solving motivate me to develop solutions that not only meet, but surpass, the expectations of customers and end users alike. As a backend engineer, I am committed to providing high-quality, scalable, and maintainable code that meets the ever-changing needs of the digital landscape.
                        </p>
                    </Box>
                <Divider><Typography variant="h4">Skills</Typography></Divider>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-Start", flexWrap: "wrap", gap: "8px"}}>
                  <div style={{backgroundColor: "#b8a20c", padding: "5px", borderRadius: "8%"}}>Javascript</div>
                  <div style={{backgroundColor: "#6ec23d", padding: "5px", borderRadius: "8%"}}>NodeJs</div>
                  <div style={{backgroundColor: "#6b3428", padding: "5px", borderRadius: "8%"}}>NestJs</div>
                  <div style={{backgroundColor: "#1c5419", padding: "5px", borderRadius: "8%"}}>MongoDB</div>
                  <div style={{backgroundColor: "#4946b9", padding: "5px", borderRadius: "8%"}}>Postgres</div>
                  <div style={{backgroundColor: "#a11e18", padding: "5px", borderRadius: "8%"}}>Redis</div>
                  <div style={{backgroundColor: "#3d32cd", padding: "5px", borderRadius: "8%"}}>Jira</div>
                  <div style={{backgroundColor: "#9d8014", padding: "5px", borderRadius: "8%"}}>Git</div>
                  <div style={{backgroundColor: "#d94226", padding: "5px", borderRadius: "8%"}}>RabbitMQ</div>
                  <div style={{backgroundColor: "#057c10", padding: "5px", borderRadius: "8%"}}>Python</div>
                  <div style={{backgroundColor: "#4b38c7", padding: "5px", borderRadius: "8%"}}>Typescript</div>
                  </div>
                </Grid>
            </Grid>
          
        </div>


 </motion.div>
        
    )

}