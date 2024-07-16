
import { useTranslation } from 'react-i18next'
import './App.scss'
import City from './Components/City/City'
import City2 from './Components/City/City2'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Section from './Components/Section/Section'
import Service from './Components/Service/Service'
import Crousel from './Components/Crousel/Crousel'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Contactjon from './Components/Contactjon/Contactjon'

function App() {
  const { t, i18n } = useTranslation();

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
   <hr style={{
    marginTop:100,
    opacity:0.2,
    marginBottom:30
   }}/>
   <Section/>
   <Service/>
   <Crousel/>
   <Contactjon/>
   <Contact/>
   <Footer/>
  



 

   </div>
  )
}

export default App
