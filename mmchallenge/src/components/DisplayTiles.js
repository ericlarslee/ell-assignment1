import React from 'react';
import { Row } from 'react-bootstrap';

const DisplayTiles = (props) => {
    return(
        <Row>
            {props.mapTiles()}
        </Row>
    );
}
export default DisplayTiles;