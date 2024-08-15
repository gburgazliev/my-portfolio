import { motion } from 'framer-motion';
import React from 'react';
import MenuItem from '../menuItem/MenuItem';

const Navigation = () => {

  const menuItems = [
   'About', 'Projects', 'Contact'
  ]

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };



  return (
    <motion.ul variants={variants}>

      {menuItems.map((item, i) => (
        <MenuItem string={item} i={i} key={i} />
      ))}
    </motion.ul>
  )

}

export default Navigation;