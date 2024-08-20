import { motion } from 'framer-motion';
import React from 'react';
import { useEffect, useRef } from 'react';
import {scrollToSection} from '../../scrollToSection'
import './menuItem.css';


const MenuItem = ({ string, i, toggleOpen }) => {
    const id = string.toLowerCase();
    const itemRef = useRef();

    const variants = {
        open: {
            opacity: 1,
            x: 0,
            transition: {
                x: { stiffness: 1000 }
            }
        },
        closed: {
            opacity: 0,
            x: "-100%",
            transition: {
                x: { stiffness: 1000 }
            }
        }
    }



    useEffect(() => {
        const item = itemRef.current;
        const handleMouseEnter = (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty("--x", `${x}px`);
            item.style.setProperty("--y", `${y}px`);
            item.classList.add('animate')
        }

        const handleMouseLeave = (e) => {
            const rect = item.getBoundingClientRect();
             
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty("--x", `${x}px`);
            item.style.setProperty("--y", `${y}px`);
            item.classList.remove('animate')
        }

        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            item.removeEventListener('mouseenter', handleMouseEnter);
            item.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, [])

    
    
    return (
        <motion.li layout variants={variants} onClick={() => scrollToSection(id, toggleOpen)}>
            <motion.div layout className='menu-item'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                ref={itemRef}>
                {string}
                <div className="item-background"></div>
            </motion.div>

        </motion.li>
    )
}

export default MenuItem;