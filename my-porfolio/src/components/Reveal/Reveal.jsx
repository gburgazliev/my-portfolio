import { useInView, useAnimation, motion } from "framer-motion"
import React, { useEffect, useRef } from "react";



const Reveal = ({children}) => { 
 const ref = useRef(null);
 const animationControl = useAnimation();
 const isInView = useInView(ref);
  
 useEffect(() => {
    if(isInView) animationControl.start('visible');
 }, [isInView])


 return (
  <motion.div layout ref={ref}
  variants={{
    hidden: {opacity: 0, y: 150},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8,}}
  }}
  initial='hidden'
  animate={animationControl}
  > 
   {children}
    
  </motion.div>
 )

}

export default Reveal;