import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "./capacity/ut.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={3}>
            <img style={{height:"180px", width:"400px"}} src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} >  <div className="social-icon">
          <p tabindex="0">Last Update: 01-Oct-2022</p>
                    <p tabindex="0">Website Content Managed by Members Of Team RPP!!</p>
                    <p tabindex="0">Designed and Developed by @b_industries..</p>
          <a href="https://www.linkedin.com/company/nasa/"><img src={navIcon1} alt="Icon" /></a>
          <a href="https://www.facebook.com/NASA"><img src={navIcon2} alt="Icon" /></a>
          <a href="https://www.instagram.com/nasa/?igshid=YmMyMTA2M2Y%3D"><img src={navIcon3} alt="Icon" /></a>
        </div></Col>
          <Col size={12} sm={3} className="text-center text-sm-end pt-5">
            
            <h5 tabindex="0">E- NASA Learning & Exploration </h5><h5>UNDER : Nasa space app challenge
                </h5>
            <p tabindex="0">Lucknow<br/> Uttar Pradesh-226001</p>
            <p>Copyright 2022. RIGHT PATH PREDICTOR!!</p>
          </Col>
          
        </Row>
      
      </Container>
    </footer>
  )
}