import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function MyCards() {
    return (
      <div className="d-flex justify-content-evenly" style={{display:"flex" , marginTop:"10px"}}>
      <Row xs={1} md={4}>

      <Col>
      <Card style={{ width: '14rem',height:"300px" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      <Button variant ="primary" style={{margin:"10px", position:"relative" ,top:"70px"}}>Find Out More! </Button>
      </Card.Text>
      </Card>
     </Col>

     <Col>
      <Card style={{ width: '14rem',height:"300px" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      <Button variant ="primary" style={{margin:"10px", position:"relative" ,top:"70px"}}>Find Out More! </Button>
      </Card.Text>
      </Card>
     </Col>


     <Col>
      <Card style={{ width: '14rem',height:"300px" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      <Button variant ="primary" style={{margin:"10px", position:"relative" ,top:"70px"}}>Find Out More! </Button>
      </Card.Text>
      </Card>
     </Col>


     <Col>
      <Card style={{ width: '14rem',height:"300px" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      <Button variant ="primary" style={{margin:"10px", position:"relative" ,top:"70px"}}>Find Out More! </Button>
      </Card.Text>
      </Card>
     </Col>

    </Row>
    </div>
);
}


