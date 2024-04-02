import { Button, Col, Row } from "react-bootstrap";

export function Jumbotron() {
  return (
        <Row className="texto">
      <Col style={{height:"250px" , backgroundColor: "lightgray"}}>
        <h1>A Warm Welcome!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
          tenetur magni veniam eos provident commodi dolore molestias, molestiae
          nemo ab rem? Numquam, totam accusamus! Fugiat aspernatur id voluptas
          omnis facere!
        </p>
        <Button variant="primary" style={{position:"relative", top:"60px"}}>Call to action!</Button>
        </Col>
       </Row>
  );
}
