import { motion } from 'framer-motion';
import React from 'react';
import './menuItem.css';


const MenuItem = ({ string, i }) => {

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

    const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

    return (
        <motion.li layout variants={variants}>
            <motion.div layout className='menu-item' whileHover={{scale: 1.2}}>{string}</motion.div>

        </motion.li>
    )
}

export default MenuItem;