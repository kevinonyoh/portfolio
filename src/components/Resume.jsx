import {animate, motion} from "framer-motion"

export default function Resume() {
    return (
        <motion.div 
      
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.9}}}
      >
              <h1>Resume</h1>
     </motion.div>
    )
}