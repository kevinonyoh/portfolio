import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { MdOutlineWavingHand } from "react-icons/md";

import {animate, motion} from "framer-motion"

export default function Home() {
    return (
      <motion.div 
      
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.9}}}
      >

      
       <Grid
        container 
        direction="row"
        justifyContent="flex-start"
        alignItems="center"

        sx ={{marginTop: "200px", marginLeft: "70px"}}
       >
             <Grid item xs={12} sm={6} >
                <Typography variant='h3' sx={{marginBottom: "20px"}}>I'm Kevin</Typography>
                <Typography variant='h2' sx={{marginBottom: "30px", marginLeft: "30px"}}>
                     Backend Developer
               </Typography>
               <Typography variant='h5' sx={{marginBottom: "20px", marginLeft: "30px"}}>
                    Read more <Link to={"/About"} style={{color: 'gold', textDecoration: 'none'}} >About me</Link>
               </Typography>
             </Grid>
            
       </Grid>

       </motion.div>
    )
}