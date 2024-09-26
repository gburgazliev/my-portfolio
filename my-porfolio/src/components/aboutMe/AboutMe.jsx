import { motion } from 'framer-motion'
import Contact from '../contact/Contact'
import Reveal from '../Reveal/Reveal';
import './aboutMe.css'
const AboutMe = () => {



    return (
        <Reveal>
        <motion.div layout id='about' >
            <motion.div layout className='about-container' id='about-me'>
                <motion.h1 layout>
                    About Me
                </motion.h1>
                <motion.p layout>
                I have always been curious about programming since I was a teenager, but I never really tried coding because it seemed difficult to me. That changed when I decided to give JavaScript a try and enrolled in the
                <motion.a layout href=' https://learn.telerikacademy.com/mod/customcert/verify_certificate.php?contextid=99501&code=1ESFKS8jqp&qrcode=1&fbclid=IwZXh0bgNhZW0CMTEAAR1Scg5ngvph6NZMHWb4_vpqrpS9BAopaMa5c7abiqPHD6f6r_UwS6Lu2WQ_aem_3juBr2OfN-SxyLSxJCx1fw' target='_blank'> 6-month Alpha JavaScript Track Program</motion.a>.
                After passing the entrance exam, my passion for coding grew, and after six months of hard work and completing four simple projects, I am now seeking opportunities to solidify my skills and learn new ones.
                While learning web development, I am also studying Cybersecurity at the Technical University of Varna (Bulgaria). During my first year, I went trough the basics of C++ such as OOP and DSA  and got to build some programs.
                </motion.p>
            </motion.div>
            <Contact/> 

        </motion.div> 
    </Reveal>
    )
}

export default AboutMe;