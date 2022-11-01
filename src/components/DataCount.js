import React from 'react'
import { Row, Col } from 'react-bootstrap';
const DataCount = (props) => {
    const person = props.person;
    return (
        <Row className="justify-content-center">
            <Col sm="8">
                <span>لديك {person.length} مواعيد اليوم</span>
            </Col>
        </Row>
    )
}

export default DataCount