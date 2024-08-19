import React from 'react';
import { motion, AnimatePresence, useCycle, delay } from 'framer-motion';
import BurgerIcon from '../burgerIcon/BurgerIcon';
import { useState } from 'react';
import { useRef } from 'react';
import { useDimensions } from '../../useDimensions';
import Navigation from '../navigation/Navigation';
import './NavBar.css';




const NavBar = () => {

    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            },

        }),

        closed: {
            clipPath: "circle(30px at 40px 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            },


        }
    };


    const containerBackgroundVariants = {
        open: {
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.5
            }
        },
        closed: {
            opacity: 0,
            transition: {
                duration: 0.5
            }

        }
    }

    const navClass = isOpen ? 'nav nav-open' : 'nav nav-closed';
    return (
        <header>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                isOpen={isOpen}
                ref={containerRef}
                className={navClass}
            >
                <motion.div layout className="container-background" variants={containerBackgroundVariants} animate={isOpen ? "open" : "closed"}/>
                <motion.div className="background" variants={sidebar} />




                <Navigation />
                <BurgerIcon toggle={toggleOpen} isOpen={isOpen} />
            </motion.nav>
        </header>

    )
}

export default NavBar