import React from "react";
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './home';
import Resume from './Resume';
import About from './about';
import {AnimatePresence} from "framer-motion"

export default function AnimatedRoutes(){
    const location = useLocation();
   
    return (
        <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element= {<Home/>}/>
                    <Route path="/Resume" element= {<Resume/>}/>
                    <Route path="/about" element= {<About/>}/>
                </Routes>
        </AnimatePresence>
   
    )
}