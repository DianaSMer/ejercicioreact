
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Button from './components/Button/Button.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';
import Astros from './components/Astros/Astros.jsx';
function App() {

  const links = [
    { id: 1, name: 'Home', href: '/'},
    { id: 2, name: 'About', href: '/about'},
    { id: 3, name: 'Astros', href: '/astros'},
  ]

  
  const btnText = 'Login';
  return(
    <>
    <Navbar links={links}/>
    <Routes>
    <Route
      path='/'
      element={<Button name={btnText}/>}
    />

    <Route
    
      path='/about'
      element={<BottomNav/>}

    />

    <Route
      path='./about'
      element={<BottomNav/>}
    />

    </Routes>

    <Astros/>
      <Button name={btnText}/>
      <BottomNav/>
    </>
  )
}

export default App
