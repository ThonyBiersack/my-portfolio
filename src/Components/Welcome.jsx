import '../Component.css';
import { Link } from 'react-router-dom';

export default function welcome(){
    return (
        <div className="Content">
            <div>
                <h2><Link to='/'>Welcome</Link></h2>
                <p>My name is Anthony suryadjie, 
                    I'm a full-stack developer based in Sukabumi, 
                    West Java, Indonesia. I have created several website
                    like blog website, carkus, and e-commerce platform but I didn't
                    publish it.</p>
            </div>
        </div>
    )
}