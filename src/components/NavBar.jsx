import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';


function NavBar() {
    let navigate = useNavigate()
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link onClick={()=>navigate('/all-ts')}>All Students&Teacher</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>navigate('/add-ts')}>Add Students&Teacher</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;