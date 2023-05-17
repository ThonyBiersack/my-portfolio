import './App.css';
import AboutMe from './Components/Header'
import Halaman from './Components/Contents';
import Footer from './Components/Footer'



function App() {
  return (
    <div className="App">
      <div className='kepala'>
        <AboutMe className='neck'/>
      </div>
      <div className='content'>
        <Halaman/>
      </div>
      <div className='kaki'>
        <Footer className='foot'/>
      </div>
    </div>
  )
    
}

export default App;
