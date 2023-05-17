import '../Component.css';
import { Link, Routes, Route } from 'react-router-dom';
import Carkus from './Carkus';
import Welcome from './Welcome';
import Blog from './Blog';
import Kata from './Notfound'

    export default function MyContent(){
        return(
            <div className='Content'>
                <div>
                    <h2>
                        <Routes>
                            <Route path='/' element={<Welcome />} />
                            <Route path='/carkus' element={<Carkus />} />
                            <Route path='/blog' element={<Blog />} />
                            <Route path='*' element={<Kata/>} />
                        </Routes>
                    </h2>
                </div>
                <div>
                    <h2>Project</h2>
                        <p><Link to="/blog">Mine Blog</Link></p>
                        <p><Link to="/carkus">Carkus</Link></p>

                </div>
            </div>
        )
    }