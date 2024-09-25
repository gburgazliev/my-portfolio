import { motion } from 'framer-motion';
import avatar from '../../assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import GeorgiBurgazlievResume from '../../assets/GeorgiBurgazlievResume.pdf'
import { scrollToSection } from '../../scrollToSection';
import './introduction.css';

const Introduction = () => {
    const [hovered, setHovered] = useState(false);
    const h1Words = "Hi There, I'm ".split(/(\, )/)

    const h2Words = "Web Development".split("");

    const h2Variants = {
        uncolored: {
            color: "hsl(155, 100%, 50%)",
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
        hidden: { opacity: 0 , },
        visible: {
            opacity: 1,
           
            transition: {
                when: "beforeChildren", // start the parent's transition before the children
                staggerChildren: 0.5, // delay between each child's animation
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, scale: 0.7 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const nameVairants = {
        hidden: {
            opacity: 0.8,
            color: "hsl(195, 100%, 50%)",
        },
        visible: {
            opacity: 1,
            color: "hsl(39, 100%, 50%)",
            transition: {
                delay: 0.5,
                duration: 10.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            boxShadow: "0px 0px 8px rgb(239, 235, 235)",
            transition: {

                duration: 1,
            }
        }
    }


    useEffect(() => {
        const button = document.getElementById('introduction-button');
        button.addEventListener('mouseover', () => setHovered(true));
        button.addEventListener('mouseout', () => setHovered(false));

        return () => {
            button.removeEventListener('mouseover', () => setHovered(true));
            button.removeEventListener('mouseout', () => setHovered(false));
        }

    }, [])

    const arrowVariants = {
        hidden: { y: 0, transition: { y: { duration: 3 } } },
        visible: {
            opacity: 1,
            y: ['0%', '-5%', "-10%", '-5%', '0%', '5%', "10%", '5%', '0%'], // Move up and down by 10%
            transition: {

                y: {
                    duration: 2,
                    repeat: Infinity, // Repeat the animation indefinitely
                    ease: "easeInOut"
                }
            }
        }
    }

    

    return (
        <motion.div layout id="introduction"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            exit={{ opacity: 0 }}>



            <motion.img layout
                src={avatar}
                draggable="false"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            />
            <motion.div layout
                className="introduction-container" >
                <motion.h1 layout variants={childVariants}>{h1Words.map((word, i) => {
                    return <motion.span
                        key={i}
                        layout

                    >{word}</motion.span>
                })}
                    <motion.span
                        layout
                        variants={nameVairants}
                        initial={'hidden'}
                        animate={'visible'}>Georgi Burgazliev</motion.span>

                </motion.h1>
                <motion.h2 layout variants={childVariants}><motion.span style={{ color: 'white' }}>I am into</motion.span> {h2Words.map((word, i) => {
                    return <motion.span
                        key={i}
                        layout
                        variants={h2Variants}
                        initial="uncolored"
                        animate="colored"
                        custom={i}

                    >{word}</motion.span>

                })} </motion.h2>
                <motion.button layout id="introduction-button" variants={childVariants}
                    whileHover={{ scale: 1.2, backgroundColor: 'rgb(202, 114, 59)' }}
                     whileTap={{ backgroundColor: 'rgb(202, 114, 59)' }} onClick={() => scrollToSection('about-me')}>About Me  
                     <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 50 50"
                        
                    >
                        <motion.path
                            fill="white"
                            stroke="white"
                            border="none"
                            variants={arrowVariants}
                            initial="hidden"
                            animate={hovered ? "visible" : "hidden"}
                            strokeWidth="2"
                            d="M 10 15 L 25 35 L 40 15"

                            transition={{ duration: 1 }}
                        />
                    </motion.svg>  </motion.button>


                <motion.div layout className="introduction-socials" variants={childVariants}>
   <a href={GeorgiBurgazlievResume} download='GeorgiBurgazlievResume.pdf'>
                   <motion.button layout className="socials-button"  whileHover={{scale: 1.1, backgroundColor: 'rgb(149, 102, 237)'}}> 
                  Download CV
                   </motion.button>
</a>
                    <motion.div layout
                        className='socials-container' >

                        <motion.a layout 
                            href="https://www.linkedin.com/in/georgi-burgazliev-117b9130a/"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FontAwesomeIcon icon={faLinkedin} className='fa' />
                        </motion.a>



                        <motion.a layout
                            href="https://github.com/gburgazliev"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FontAwesomeIcon icon={faGithub} className='fa' />
                        </motion.a>



                        <motion.a layout
                            href="mailto:burgazlievgeorgi@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FontAwesomeIcon icon={faEnvelope} className='fa' />
                        </motion.a>
                    </motion.div>



                </motion.div>
            </motion.div>
        </motion.div>
    );
}


export default Introduction;