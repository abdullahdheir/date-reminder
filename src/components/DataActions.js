import React from 'react'
import { Row, Col } from 'react-bootstrap';

const DataActions = (props) => {
    const clearAll = props.onDelete;
    const viewAll = props.onView;
    return (
        <Row className="justify-content-center py-2">
            <Col sm="8">
                <div className="d-flex justify-content-between">
                    <button onClick={viewAll} className="btn btn-color">عرض المواعيد</button>
                    <button onClick={clearAll} className="btn btn-color">مسح الكل</button>
                </div>
            </Col>
        </Row>
    )
}

export default DataActions