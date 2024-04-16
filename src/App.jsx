import { Home } from "./components/Pages/Home/Home"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Section } from "./components/Section/section"
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
          <h1>Second Section</h1>
        </Section>
      </Main>
    </Home>
    </>
  ) 
}

export default App