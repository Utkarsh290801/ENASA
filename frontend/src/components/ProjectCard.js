import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
<a href="https://eodashboard.org/story?id=world-cereal-supply-and-demand"> <Button>View Resource</Button></a>
        
        </div>
      </div>
    </Col>
  )
}