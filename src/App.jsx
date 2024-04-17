import { Home } from "./components/Pages/Home/Home"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Section } from "./components/Section/section"
import { Cards } from "./components/Cards/Cards"
import { array }  from "./components/Scripts/array"
import './index.css'

function App() {

  return (
    <>
    <Home>
      <Header/>
      <Main>
        <Section>
          <h1>First Section</h1>
        </Section>
        <Section>
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