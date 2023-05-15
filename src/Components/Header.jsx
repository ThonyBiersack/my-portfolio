import '../Component.css';
import Typewriter from 'typewriter-effect'
import {AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'

export default function AboutMe(){
    return (
        <div className="tentangku">
                <ul>
                    <li><a href="/"><h1>Hello, I'm
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                    
                                    .typeString("Anthony")
                                    
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("a Developer")
                                    
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("a Designer")
                                    
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("a Full-stack Engineer")
                                    
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Anthony")
                                    .start();
                                }}
                            />
                        </h1>
                    </a></li>
                    <li style={{float:'right'}}><a href='mailto:thonybiersack@ummi.ac.id?subject=Mail'><AiOutlineMail className='email'/></a></li>
                    <li style={{float:'right'}}><a href='https://github.com/ThonyBiersack'><AiOutlineGithub className='github'/></a></li>
                    <li style={{float:'right'}}><a href='https://www.linkedin.com/in/anthony-suryadjie-500063200/'><AiOutlineLinkedin className='linkedin'/></a></li>
                </ul>
        </div>
    )
}