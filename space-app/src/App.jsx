
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Button from './components/Button/Button.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';
import Astros from './components/Astros/Astros.jsx';
import Tripulacion from './assets/tripulacion.jpg';
import Imagenes from './assets/Imagenes.jsx';


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
     

    />

    <Route
      path='./about'
      element={<BottomNav/>}

    />

    </Routes>
    <div>
        <img src= {Imagenes.img1}/>
        <img src= {Imagenes.img2}/>
        <img src= {Imagenes.img3}/>
    </div>

    <Astros/>
    <div>
    <img src= {Tripulacion}/>
     </div>
      <Button name={btnText}/>
      <BottomNav/>
    </>
    
  )
}

export default App
