import '../Component.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Carkus from './Carkus';
import Welcome from './Welcome';
import Blog from './Blog';
import Kata from './Notfound'

export default function MyContent() {
    // const navigate = useNavigate();
    return(
        <div className='Content'>
            <div>
            <Router>
                    <Routes>
                        <Route path='/' element={<Welcome />} />
                        <Route path='/carkus' element={<Carkus />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='*' element={<Kata/>} />
                    </Routes>
                </Router>
            </div>
            <div>
                <h2>Project</h2>
                    <p><a href='https://dancing-crumble-c1b5f2.netlify.app/'>Carkus</a></p>
                    <p><a href="https://thony-personality.netlify.app/blog.html">Mine Blog</a></p>
            </div>
        </div>
    )
}