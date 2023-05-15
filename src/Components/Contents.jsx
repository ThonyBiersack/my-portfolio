import '../Component.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carkus from './Carkus';
import Welcome from './Welcome';
import Blog from './Blog';

export default function MyContent() {
    return(
        <div className='Content'>
            <div>
            <Router>
                    <Routes>
                        <Route path='/' element={<Welcome />} />
                        <Route path='/carkus' element={<Carkus />} />
                        <Route path='/blog' element={<Blog />} />
                    </Routes>
                </Router>
            </div>
            <div>
                <h2>Project</h2>
                    <p><a href="/carkus">Carkus</a></p>
                    <p><a href="/blog">Mine Blog</a></p>
            </div>
        </div>
    )
}