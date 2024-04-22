import { Home } from "./components/Pages/Home/Home"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Section } from "./components/Section/section"
import { Cards } from "./components/Cards/Cards"
import { array }  from "./components/Scripts/array"
import imgSection from "./assets/Collage .png"
import './index.css'

function App() {

  return (
    <>
    <Home>
      <Header/>
      <Main>
        <Section>
          <div classname=" items-center"> 
           <img className="w-5/6 " src={ imgSection } alt="" />    
           <div className="bg-gray-700 w-5/6 p-2">          
             <p className="font-thin">27-09-2005</p>
             <h1 className="font-bold">Artitstas lindos y chidos </h1>
             <h2>En este blog encontarmeos algunos de los gustos musicales de mari morita, espero que uno o varios artitstas te llamen la atención y puedas darle una oportunidad en tu playlist. La imagen que estas viendo yo la hice :)</h2>
             </div>
          </div>
        </Section>
        <Section className="w-2/4">
          {array.map (array => <Cards 
          key={array.id}   
          img={array.img}             
          date={array.date} 
          description={array.description}/>)} 
        </Section>
      </Main>
    </Home>
    </>
  ) 
}

export default App