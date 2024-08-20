import { motion } from 'framer-motion';
import React from 'react';
import MenuItem from '../menuItem/MenuItem';

const Navigation = ({toggleOpen}) => {

  const menuItems = [
   'About', 'Projects', 'Contact'
  ]

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      display: 'block'
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
      display: 'none'
    }
  };


  return (
    <motion.ul variants={variants}>

      {menuItems.map((item, i) => (
        <MenuItem string={item}  key={i} toggleOpen={toggleOpen}/>
      ))}
    </motion.ul>
  )

}

export default Navigation;