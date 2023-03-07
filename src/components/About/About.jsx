import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from "../../images/desarrollo.png"
function About() {
  return (
    <div id="About">
       <Container id="second-section-main__container">
      <Row>
        <Col id="second-section-about-img">
            <img src={aboutimg}></img>
        </Col>
        <Col id="second-section-about-text">
            <h2>SOBRE MI</h2>
            <p>Hola soy Andreina Velazquez. Actualmente diseño, nuevos proyectos y sitios de aplicaciones web, tanto del lado del cliente (Front-end, UX/UI) como del lado del servidor (Back-end). Continuamente aprendiendo y adquiriendo nuevas habilidades en base a las demandas actuales y futuras y las tendencias tecnológicas en el campo del diseño y desarrollo de aplicaciones web en general. Apasionado por el trabajo que realizo, ofreciendo y aportando mis conocimientos, habilidades y experiencia, así como nuevas ideas, soluciones, personalización y seguimiento de calidad del cliente y su objetivo en cada proyecto.</p>
            <a href="https://drive.google.com/file/d/10GTypCcNoGlaAGfVcn9xUsOzUj_F0hDx/view?usp=sharing" target="_blank"><button>DOWNLOAD CV</button></a>
        </Col>
      </Row>
    </Container>
    </div>
   
  );
}
export default About;