import { Card, ListGroup, Col }from 'react-bootstrap';
    
    
const Tile = (props) => {
    return(
        <Col style={{display:"flex"}}>
            <Card style={{ width: '180px', height: '170px', flex: "auto", justifyContent: "center"}} >
                <Card.Img variant="top" src={props.image} />
                <ListGroup variant="flush">
                    <ListGroup.Item>Username: {props.username}</ListGroup.Item>
                    <ListGroup.Item>Age: {props.age}</ListGroup.Item>
                    <ListGroup.Item>Description: {props.generateDescription}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    );
}
export default Tile;