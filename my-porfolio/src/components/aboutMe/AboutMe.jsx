import { motion } from 'framer-motion'
import Contact from '../contact/Contact'
import Reveal from '../Reveal/Reveal';
import './aboutMe.css'
const AboutMe = () => {



    return (
        <Reveal>
        <motion.div layout id='about' >
            <motion.div layout className='about-container'>
                <motion.h1 layout>
                    About Me
                </motion.h1>
                <motion.p layout>
              I was always curious about programming as a teenager, but I never really tried to code,
                just because it seemed very hard for me. That was until I decided to try with JavaScript and signed for the
                <a href=' https://learn.telerikacademy.com/mod/customcert/verify_certificate.php?contextid=99501&code=1ESFKS8jqp&qrcode=1&fbclid=IwZXh0bgNhZW0CMTEAAR1Scg5ngvph6NZMHWb4_vpqrpS9BAopaMa5c7abiqPHD6f6r_UwS6Lu2WQ_aem_3juBr2OfN-SxyLSxJCx1fw' target='_blank'> 6-month Alpha JavaScript Track Program</a>.
                With the passing of the entrance exam my desire for coding just got bigger and after 6 months, a lot of tasks solved and 4 simple projects behind my back 
                I am looking for opportunities to solidify my skills and learn new ones.
                </motion.p>
            </motion.div>
            <Contact/> 

        </motion.div> 
    </Reveal>
    )
}

export default AboutMe;