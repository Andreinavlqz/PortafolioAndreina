import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import programadorinit from "../../images/chica-programando-removebg-preview.png"
import { Link, animateScroll as scroll } from "react-scroll";
function Inicio() {
  
  return (
    <div id="Inicio">
      <Container id="first-section-init">
        <Row>
          <Col id="inicio-first-col">
              <div className='Inicio-Tittles'>
                 
                  <p className='hola-tittle'>Hola!</p>
                  <h2>Soy Andreina Velazquez</h2>
                  <p className='frontend-tittle'>Desarrolladora Full stack</p>

                  <Link activeClass="active" to="header-contact" spy={true} smooth={false} offset={-100} duration={500}>
                    <button className="Contact-butt">CONTACTACTAME</button>
                  </Link>
                  
                  
              </div>
          </Col>
          <Col id="inicio-second-col">
              <div className='Inicio-Image'>
                  <img src={programadorinit}></img>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

export default Inicio;