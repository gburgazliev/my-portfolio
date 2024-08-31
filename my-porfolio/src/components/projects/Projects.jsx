import './projects.css'
import React, { useEffect, useState } from 'react'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion'
import forum from '../../assets/forum.png'
import fitnessTracker from '../../assets/fitnessTracker.png'
import voleyball from '../../assets/voleyball.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Reveal from '../Reveal/Reveal';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    const [hovered, setHovered] = useState({
        forum: false,
        fitness: false,
        voleyball: false
    });
    const imageVariants = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },

        hidden: {
            opacity: 0,
            transition: {
                duration: 1
            }
        }
    }

    const handleMouseEnter = (key) => {
        setHovered(prev => ({ ...prev, [key]: true }))
    }
    
    const handleMouseLeave = (key) => {
        setHovered(prev => ({ ...prev, [key]: false }))
    }

    const handleTouchStart = (key) => {
        setHovered(prev => ({ ...prev, [key]: !prev[key] }))
    }

    useEffect(() => {
        new Swiper('.swiper', {
        
            modules: [Navigation, Pagination],
            speed: 500,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });

    }, []);







    return (
        <Reveal>
            <div id='projects'>

      
        <div class="swiper">

            <div class="swiper-wrapper">

                <div class="swiper-slide" >

                    <div class='swiper-slide-description-container'>
                        <h2>Fitness Tracking App</h2>
                        <motion.div layout class='image-container'>
                            < motion.div layout className='image-background'
                                visible={hovered.fitness ? 'true' : 'false'}
                                animate={hovered.fitness ? 'visible' : 'hidden'}
                                variants={imageVariants}
                                onMouseEnter={() => handleMouseEnter('fitness')}
                                onMouseLeave={() => handleMouseLeave('fitness')}
                                onTouchStart={() => handleTouchStart('fitness')}
                            >
                                <motion.a layout
                                    target='_blank'
                                    href="https://github.com/Adrian-Baltov/fitness-tracking-app"
                                    whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <FontAwesomeIcon icon={faGithub} className='fa-image-background' />
                                </motion.a>

                            </motion.div>
                            <motion.img src={fitnessTracker} alt="forum" />
                        </motion.div>
                        <p>
                            A fitness tracking app where users can schedule exersices
                            and track their progress. Users can also search for other users
                            and send friend
                            requests.
                        </p>
                    </div>

                </div>
                <div class="swiper-slide" >
                    <div class='swiper-slide-description-container'>
                        <h2>Forum</h2>
                        <motion.div layout class='image-container'>
                            < motion.div layout className='image-background'
                                visible={hovered.forum ? 'true' : 'false'}
                                animate={hovered.forum ? 'visible' : 'hidden'}
                                variants={imageVariants}
                                onMouseEnter={() => handleMouseEnter('forum')}
                                onMouseLeave={() => handleMouseLeave('forum')}
                                onTouchStart={() => handleTouchStart('forum')}
                            >
                                <motion.a layout
                                    href="https://github.com/NPetranov/Forum-Project"
                                    target='_blank'
                                    whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <FontAwesomeIcon icon={faGithub} className='fa-image-background' />
                                </motion.a>

                            </motion.div>
                            <motion.img src={forum} alt="forum" />
                        </motion.div>
                        <p>  A gaming forum where passionate gamers can create posts, post comments and like other users posts and comments. Can also delete
                            comments from their posts.
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                <div class='swiper-slide-description-container'>
                        <h2>Voleyball team</h2>
                        <motion.div layout class='image-container'>
                            < motion.div layout className='image-background'
                                visible={hovered.voleyball ? 'true' : 'false'}
                                animate={hovered.voleyball ? 'visible' : 'hidden'}
                                variants={imageVariants}
                                onMouseEnter={() => handleMouseEnter('voleyball')}
                                onMouseLeave={() => handleMouseLeave('voleyball')}
                                onTouchStart={() => handleTouchStart('voleyball')}
                            >
                                <motion.div layout class='project-bg-icons-container'>

                                <motion.a layout 
                                target='_blank'
                                href='https://www.heaven-07.com/'
                                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}                              
                                > <FontAwesomeIcon icon={faGlobe} className='fa-image-background'/></motion.a>
                                <motion.a layout
                                    target='_blank'
                                    href="https://github.com/gburgazliev/voleyball-team"
                                    whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <FontAwesomeIcon icon={faGithub} className='fa-image-background' />
                                </motion.a>
                               </motion.div>
                            </motion.div>
                            <motion.img src={voleyball} alt="voleyball" />
                        </motion.div>
                        <p>
                        A portfolio website for a volleyball team, including admin controls for easily adding and removing staff in a real-time database.
                        </p>
                    </div>
                </div>
            </div>

           


            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>


            
        </div>
</div>
        </Reveal>
      
    )
}

export default Projects;