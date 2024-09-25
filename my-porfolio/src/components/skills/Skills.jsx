import { SiEslint, SiReact, SiHtml5, SiGithub, SiFirebase, SiJest, SiDaisyui, SiChakraui, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import Reveal from "../Reveal/Reveal";
import './skills.css'

const Skills = () => {
    let skillCounter = 1;
    const technologies = [
        { name: 'React', logo: <SiReact size='40px' style={{ color: 'lightblue' }} /> },
        { name: 'JavaScript', logo: <TbBrandJavascript size='40px' fill="yellow" /> },
        { name: 'HTML5', logo: <SiHtml5 size='40px' style={{ color: 'darkorange', }} /> },
        { name: 'CSS', logo: <IoLogoCss3 size='40px' style={{ color: 'blue', }} /> },
        { name: 'Chakra UI', logo: <SiChakraui size='40px' style={{ color: 'lightgreen', }} /> },
        { name: 'Github', logo: <SiGithub size='40px' /> },
        { name: 'Node.js', logo: <SiNodedotjs size='40' fill="green" /> },
        { name: 'Jest', logo: <SiJest fill="red" size='40px' /> },
        { name: 'ESLint', logo: <SiEslint fill="lightblue" size='40px' /> },
        { name: 'Tailwind CSS', logo: <SiTailwindcss size='40px' fill="lightblue" /> },
        { name: 'Daisy UI', logo: <SiDaisyui size='40px' color="lightblue" /> },
    ]


    return (
        <Reveal>
            <div id="skills">



                <h2 style={{ color: 'white', textAlign: 'center' , fontSize: '1rem', }}>Technologies I have worked with</h2>
                <div className="container">
                    <div className="technologies-container">
                        {technologies.map((object) => {
                            const individualSkillClass = `item${skillCounter++}`
                            
                            return <div 
                            className={'item' + ' ' + individualSkillClass} 
                           >
                                <span>{object.logo}</span>   <span style={{ color: 'white', textAlign: 'center' }}>{object.name}</span>
                            </div>



                        })}
                    </div>





                </div>



            </div></Reveal>
    )
}

export default Skills;
