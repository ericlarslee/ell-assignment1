// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup }from 'react-bootstrap';
    
    
const Tile = (props) => {
    return(
    <>
    <Card style={{ width: '180px', height: '170px'}}>
        <Card.Img variant="top" src={props.image} />
        <ListGroup variant="flush">
            <ListGroup.Item>Username: {props.username}</ListGroup.Item>
            <ListGroup.Item>Age: {props.age}</ListGroup.Item>
            <ListGroup.Item>Description: {props.generateDescription}</ListGroup.Item>
        </ListGroup>
    </Card>
    </>
    );
}
export default Tile;