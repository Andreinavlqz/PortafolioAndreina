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
            <p>Hi, I'm Andreina Velazquez.Currently I design, new projects and web application sites, both on the client side (Front-end, UX / UI) and on the server side (Back-end). Continuously learning and acquiring new skills based on current and future demands and technological trends in the field of design and development of web applications in general. Passionate about the work I do, offering and contributing my knowledge, skills and experience, as well as new ideas, solutions, customization and quality monitoring of the client and his objective in each project.</p>
            <a href="https://drive.google.com/file/d/10GTypCcNoGlaAGfVcn9xUsOzUj_F0hDx/view?usp=sharing" target="_blank"><button>DOWNLOAD CV</button></a>
        </Col>
      </Row>
    </Container>
    </div>
   
  );
}
export default About;