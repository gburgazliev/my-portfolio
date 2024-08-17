import { motion } from 'framer-motion';
import './introduction.css';

const Introduction = () => {
    const h1Words = "Hello there, I am Georgi Burgazliev".split("");
    const h2Words = "Frontend Developer".split("");

    const h1Variants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.1
            }

        })
    }

    const h2Variants = {
        uncolored: {
            color: "hsl(195, 100%, 50%)",
          
            
        },
        colored: (custom) => ({
            color: "hsl(39, 100%, 50%)",
           
            transition: {
                delay: custom * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,

                 
            }
        })
    }
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren", // start the parent's transition before the children
            staggerChildren: 4, // delay between each child's animation
          },
        },
      };

      const childVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }
      };
    return (
        <motion.div layout className="introduction"
           initial="hidden"
            animate="visible"
             variants={containerVariants} 
             exit={{ opacity: 0 }}
            
        >
            <motion.div layout   
          
            className="introduction-container">
                <motion.h1 layout variants={childVariants}>{h1Words.map((word, i) => {
                    return <motion.span
                        key={i}
                        layout
                        custom={i}
                        variants={h1Variants}
                        initial={'hidden'}
                        animate={'visible'}>{word}</motion.span>
                })}</motion.h1>
                <motion.h2 layout variants={childVariants}>{h2Words.map((word, i) => {
                    return <motion.span
                        key={i}
                        layout
                        variants={h2Variants}
                        initial={'uncolored'}
                        custom={i}
                        animate={'colored'}

                    >{word}</motion.span>
                })}</motion.h2>
            </motion.div>
        </motion.div>
    );
}


export default Introduction;