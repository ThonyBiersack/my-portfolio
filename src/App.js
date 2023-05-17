import './App.css';
import AboutMe from './Components/Header'
import Footer from './Components/Footer'
import MyContent from './Components/Contents';



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
