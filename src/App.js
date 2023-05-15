import './App.css';
import AboutMe from './Components/Header'
import MyContent from './Components/Contents';
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <div className='kepala'>
        <AboutMe className='neck'/>
      </div>
      <div className='content'>
        <MyContent/>
      </div>
      <div className='kaki'>
        <Footer className='foot'/>
      </div>
    </div>
  )
    
}

export default App;
