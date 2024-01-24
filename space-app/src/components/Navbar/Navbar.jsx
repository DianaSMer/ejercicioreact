
import Button from '../Button/Button.jsx';
import './Navbar.css';


const Navbar = ({links}) => {
 
return(
   
    <div className= 'nav-container'>
    <div className= 'navbar' > 
    {
        links.map(link=>(
            <Button key ={link.id}{...link}/>
        ))
    }
    </div>

    </div>
)
}

export default Navbar; 


  /**  const divStyle = {
        backgroundColor:'red',
        width: '100vw',
        height: '150px'
    }

    style={{backgroundColor:'red', width: '100vw'}}
*/