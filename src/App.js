import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/Container'
import Header from './components/layout/Header'
import Home from './components/pages/Home/Home'
import Footer from './components/layout/Footer'
import AcademicEducation from './components/pages/AcademicEducation/AcademicEducation'
import Goal from './components/pages/Goal/Goal'
import SkillsAndKnowledge from './components/pages/SkillsAndKnowledge/SkillsAndKnowledge'
import Experience from './components/pages/Experience/Experience'

function App() {
  return (
    <Router>
      <Header />
      <Container>
      <Routes>
        <Route element={<Home />} exact path='/'>
        </Route>
      </Routes>
      <Routes>
        <Route element={<AcademicEducation />} exact path='/academic-education'>
        </Route>
      </Routes>
      <Routes>
        <Route element={<Goal />} exact path='/goal'>
        </Route>
      </Routes>
      <Routes>
        <Route element={<SkillsAndKnowledge />} exact path='/skills-and-knowledge'>
        </Route>
      </Routes>
      <Routes>
        <Route element={<Experience />} exact path='/experience'>
        </Route>
      </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
