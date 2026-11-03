
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import FactDetails from './pages/FactDetails'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <nav>
        <h2>Cat Facts</h2>

        <Link to="/LandingPage">About</Link>

        <br />
        <Link to="/">Home</Link>
      </nav>

      <Routes>

        <Route path="/LandingPage" element={<LandingPage />} />

        <Route path="/" element={<Home />} />

        <Route path="/fact/:id" element={<FactDetails />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App
