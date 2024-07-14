
import './App.scss'
import City from './Components/City/City'
import City2 from './Components/City/City2'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
   <div >
   <Navbar/>
   <Hero/>
   <City/>
   <hr style={{
    marginTop:100,
    opacity:0.2
   }}/>
   <City2/>


 

   </div>
  )
}

export default App
