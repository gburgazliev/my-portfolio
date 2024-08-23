import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './contact.css'

const Contact = () => {
    const [revealForm, setRevealForm] = useState(false);



    return (
        <motion.div layout id='contact'>
            
        
            <motion.button layout  onClick={() => setRevealForm(!revealForm)} id='contact-button'>Contact me</motion.button>
            <motion.form layout id='contact-form' action='https://getform.io/f/blljxeqb' method='POST'> 
             <motion.input layout placeholder='Email' type='email' name='email' required/>
             <motion.input name='name' required/>
             <motion.input name='message'required/>
             <motion.button type='submit'>Submit</motion.button>
            </motion.form>
        </motion.div>


    )
}

export default Contact;