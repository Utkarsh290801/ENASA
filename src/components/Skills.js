import meter1 from "./capacity/img1_0.jpg";
import meter2 from "./capacity/img2.jpg";
import meter3 from "./capacity/alokj.jpg";
import meter4 from "./capacity/snj.jpg";
import meter5 from "./capacity/KR.jpg";
import meter6 from "./capacity/YSK.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Team Members</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Abhishek Bajpai</h5>
                                <p>(Admin-A.D)</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Arpit Dixit</h5>
                                <p>(ER. Department)</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Alok Maurya</h5>
                                <p>(ER. Department)</p>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Sanjay Chaudhary</h5>
                                <p>(ER. Department)</p>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Yashika Rai</h5>
                                <p>(ER. Department)</p>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Kratika Nishad</h5>
                                <p>(ER. Department)</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}