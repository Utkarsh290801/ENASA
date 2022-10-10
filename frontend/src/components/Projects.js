import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "./capacity/s.jpg";
import projImg2 from "./capacity/tels.jpg";
import projImg3 from "./capacity/nept.jpeg";
import projImg4 from "./capacity/lost.jpg";
import projImg5 from "./capacity/artemis.jpg";
import projImg6 from "./capacity/rove.jpg";
import projImg7 from "./capacity/l1.jpg";
import p1 from "./capacity/l2.png"
import p2 from "./capacity/Whats-New-Launch.jpg"
import p3 from "./capacity/a1.jpeg"
import p4 from "./capacity/a2.jpeg"
import p5 from "./capacity/l3.jpeg"
import p6 from "./capacity/a3.jpeg"
import p7 from "./capacity/a4.jpeg"
import p8 from "./capacity/a5.jpeg"
import p9 from "./capacity/a6.jpeg"
import p10 from "./capacity/a7.jpg"
import p11 from "./capacity/l1.jpg"
import p12 from "./capacity/Others.jpg"
// import p13 from "./capacity/Nasa1.png"
// import p14 from "./capacity/Nasa2.png"
// import p15 from "./capacity/Nasa3.png"
// import p16 from "./capacity/Nasa4.png"
// import p17 from "./capacity/Nasa5.png"
// import p18 from "./capacity/Nasa6.png"
// import p19 from "./capacity/Nasa7.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
      title: "Satellites are providing insights into agriculture",
      // description: "Design & Development",
      imgUrl: projImg1,
      // className:"ab"
      //  link:"https://eodashboard.org"
     
    
  
    },
    {
      title: "X-ray space telescope",
      // description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Super Neptune",
      // description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Car Lost in Space",
      // description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Demonstration Test Artemis I Mission",
      // description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "NASA's Perseverance",
      description: "(Mars's Jezero Crater)",
      imgUrl: projImg6,
    },
    {
      title: "Click Here",
      description: "For New Technologies",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>SPACE TECH POINTS</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">RESOURCES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">PHOTO GALLERY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">VIDEO GALLERY</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                             
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    
  <section className="margin-top-bottom-inner">
    <div className="container ">
      <div className="row">
        <div className="col-md-16 col-16">
          <div className="about_text">
            <p tabIndex={0}></p>
            <center>
              <b className="alert-info style9" />
            </center>
            <div className="d-flex ">
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a href="https://www.nasa.gov/osiris-rex" target={0}>
                    <img
                      src={p1}
                      // "./capacity/l2.png"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a href="https://www.nasa.gov/osiris-rex" target={0}>
                      <strong>
                        NASA'S OSIRIS-REx Space craft
                        <br />
                        mission launched Sept. 8, 2016
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a
                    href="https://en.m.wikipedia.org/wiki/Mars_2020"
                    target={0}
                  >
                    <img
                      src={p2}
                      // "./capacity/Whats-New-Launch.jpg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a
                      href="https://en.m.wikipedia.org/wiki/Mars_2020"
                      target={0}
                    >
                      <strong>
                        NASA preservarance rover
                        <br />
                        Mars 2020
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a href="https://blogs.nasa.gov/crew-5/" target={0}>
                    <img
                      src={p3}
                      // "./capacity/a1.jpeg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a href="https://blogs.nasa.gov/crew-5/" target={0}>
                      <strong>
                        SpaceX Crew-5 mission
                        <br /> OCT 05, 2022 12:00 PM
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a
                    href="https://www.space.com/36493-atlas-v-rocket-cygnus-launching-space-cargo-tuesday.html"
                    target={0}
                  >
                    <img
                      src={p4}
                      // "./capacity/a2.jpeg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a
                      href="https://www.space.com/36493-atlas-v-rocket-cygnus-launching-space-cargo-tuesday.html"
                      target={0}
                    >
                      <strong>
                        Atlas V Rocket <br />
                        August 2021
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="margin-top-bottom-inner">
    <div className="container">
      <div className="row">
        <div className="col-md-16 col-16">
          <div className="about_text">
            <p tabIndex={0}></p>
            <center>
              <b className="alert-info style9" />
            </center>
            <div className="d-flex ">
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a
                    href="https://www.space.com/36872-futuristic-mars-rover-nasa-ksc-center-concept.html"
                    target={0}
                  >
                    <img
                      src={p5}
                      // "./capacity/l3.jpeg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a
                      href="https://www.space.com/36872-futuristic-mars-rover-nasa-ksc-center-concept.html"
                      target={0}
                    >
                      <strong>
                        Mars Rover
                        <br />
                        30-July-2020
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a
                    href="https://www.nasa.gov/press-release/solar-orbiter-launch-takes-solar-science-to-new-heights"
                    target={0}
                  >
                    <img
                      src={p6}
                      // "./capacity/a3.jpeg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a
                      href="https://www.nasa.gov/press-release/solar-orbiter-launch-takes-solar-science-to-new-heights"
                      target={0}
                    >
                      <strong>
                        Solar Orbitar Launch
                        <br />
                        10 February 2020 at 9:33 am IST
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a href="https://en.m.wikipedia.org/wiki/Geosat" target={0}>
                    <img
                      src={p7}
                      // "./capacity/a4.jpeg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a href="https://en.m.wikipedia.org/wiki/Geosat" target={0}>
                      <strong>
                        Geoset
                        <br />
                        30 September 1986
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a
                    href="https://climate.nasa.gov/news/3031/watch-virtual-briefing-on-launch-of-sentinel-6-michael-freilich-satellite/"
                    target={0}
                  >
                    <img
                      src={p8}
                      // "./capacity/a5.jpeg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a
                      href="https://climate.nasa.gov/news/3031/watch-virtual-briefing-on-launch-of-sentinel-6-michael-freilich-satellite/"
                      target={0}
                    >
                      <strong>
                        Sentinel - 6 Michael Freilich <br />
                        Satillite Nov. 21, 2020
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="margin-top-bottom-inner">
    <div className="container">
      <div className="row">
        <div className="col-md-16 col-16">
          <div className="about_text">
            <p tabIndex={0}></p>
            <center>
              <b className="alert-info style9" />
            </center>
            <div className="d-flex ">
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a
                    href="https://asf.alaska.edu/data-sets/sar-data-sets/soil-moisture-active-passive-smap-mission/"
                    target={0}
                  >
                    <img
                      src={p9}
                      // "./capacity/a6.jpeg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a
                      href="https://asf.alaska.edu/data-sets/sar-data-sets/soil-moisture-active-passive-smap-mission/"
                      target={0}
                    >
                      <strong>
                        Soil Moisture Active Passive (SMAP) Mission
                        <br />
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a
                    href="https://www.nasa.gov/feature/25-years-of-continuous-robotic-mars-exploration-from-pathfinder-to-perseverance"
                    target={0}
                  >
                    <img
                      src={p10}
                      // "./capacity/a7.jpg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a
                      href="https://www.nasa.gov/feature/25-years-of-continuous-robotic-mars-exploration-from-pathfinder-to-perseverance"
                      target={0}
                    >
                      <strong>
                        Robotic Mars Exploration
                        <br />
                        25 Years Continuous
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a
                    href="https://www.sciencealert.com/nasa-has-discovered-hundreds-of-potential-new-planets-and-10-may-be-like-earth/amp"
                    target={0}
                  >
                    <img
                      src={p11}
                      // "./capacity/l1.jpg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a
                      href="https://www.sciencealert.com/nasa-has-discovered-hundreds-of-potential-new-planets-and-10-may-be-like-earth/amp"
                      target={0}
                    >
                      <strong>
                        Nasa Discoverd 100 of Potential <br />
                        New Planet-10 May Be Like Earth
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card chouBoxshow">
                  <a
                    href="https://www.nasa.gov/planetarydefense/dart/"
                    target={0}
                  >
                    <img
                      src={p12}
                      // "./capacity/Others.jpg"
                      className="card-img-top"
                      alt="..."
                      tabIndex={0}
                    />
                  </a>
                  <p>
                    <a
                      href="https://www.nasa.gov/planetarydefense/dart/"
                      target={0}
                    >
                      <strong>
                        Nasa Dart Mission
                        <br />
                        Sept. 26, 2022
                      </strong>
                    </a>
                  </p>
                  <div className="card-body cardBody"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <div className="container-fluid">
    <div className="col-md-12 col-12">
      <div className="container-fluid boxshadow mt-4">
        <h4 className="text-center font-weight-bold" tabIndex={0}>
          <b />
          QUICK LINKS:-
        </h4>
      </div>
    </div>
  </div> */}
  {/* <div className="row">
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <marquee>
          <a
            href="https://www.nasa.gov/"
            target="_blank"
            title="Unique Identification Authority of India"
          >
            <img
              src={p13}
              // "./capacity/Nasa1.png"
              alt="Unique Identification Authority of India image"
              tabIndex={0}
              style={{ border: "3px solid #9a1919", height: 110 }}
            />
          </a>
          <a href="https://www.isro.gov.in/" target="_blank" title="">
            <img
              src={p14}
              // "./capacity/Nasa2.png"
              alt=" pm kissan samman nidhi"
              tabIndex={0}
              style={{ border: "3px solid #9a1919", height: 110 }}
            />
          </a>
          <a
            href="https://www.gob.mx/aem"
            target="_blank"
            title="Ministry of labour and employment"
          >
            <img
              src={p15}
              // "./capacity/Nasa3.png"
              alt="Common Service Centres Scheme image"
              tabIndex={0}
              style={{ border: "3px solid #9a1919", height: 110 }}
            />
          </a>
          <a
            href="https://www.industry.gov.au/australian-space-agency"
            target="_blank"
            title="my government"
          >
            <img
              src={p16}
              // "./capacity/Nasa4.png"
              alt="my gov"
              tabIndex={0}
              style={{ border: "3px solid #9a1919", height: 110 }}
            />
          </a>
          <a
            href="https://www.iafastro.org/membership/all-members/brazilian-space-agency-aeb.html"
            target="_blank"
            title="Digital India"
          >
            <img
              src={p17}
              // "./capacity/Nasa5.png"
              alt="Digital India image"
              tabIndex={0}
              style={{ border: "3px solid #9a1919", height: 110 }}
            />
          </a>
          <a href="https://www.asc-csa.gc.ca/eng/" target="_blank">
            <img
              src={p18}
              // "./capacity/Nasa6.png"
              tabIndex={0}
              style={{ border: "3px solid #9a1919", height: 110 }}
            />
          </a>
          <a href="https://www.esa.int/" target="_blank">
            <img
              // src={p19}
              // "./capacity/Nasa7.png"
              alt="खाद्य एवं रसद विभाग"
              typeof="Image"
              tabIndex={0}
              style={{ border: "3px solid #9a1919", height: 110 }}
            />
          </a>
        </marquee> */}
      {/* </div> */}
    {/* </div> */}
  {/* </div> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}

                      <section className="margin-top-bottom-inner">
  <div className="container">
    <div className="photo-gallery">
      <div className="container">
        <div className="row photos">
         
          <div className="row">
         
            <div className="col-sm-6 col-md-6 col-lg-6 item">
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/GNpR8yPumJ4"
                title="YouTube video player"
                frameBorder={0}
              />
            </div>
           
            <div className="col-sm-6 col-md-6 col-lg-6 item">
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/fsZo1cxMqck"
                title="YouTube video player"
                frameBorder={0}
              />
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 item">
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/PGElWHGX4WA"
                  title="YouTube video player"
                  frameBorder={0}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 item">
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/1C_zuHf6lP4"
                  title="YouTube video player"
                  frameBorder={0}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 item">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/X4KcXhFBqN8"
              title="YouTube video player"
              frameBorder={0}
            />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 item">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/zsJpUCWfyPE"
              title="YouTube video player"
              frameBorder={0}
            />
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}