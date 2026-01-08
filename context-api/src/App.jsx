import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        {/* <Route path='/' element={<Hero/>}/> */}
      </Routes>
    </div>
  )
}

export default App