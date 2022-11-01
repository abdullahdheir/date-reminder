import React from 'react'
import { Col, Row } from "react-bootstrap";

const DataLists = (props) => {
    const person = props.person;
    return (
        <Row className="justify-content-center py-2">
            <Col sm="8">
                <div  className="dates-angle">
                    {person.length ? person.map(p => (
                        <div key={p.id} className=" person">
                            <img className="person-image" src={p.image} />
                            <div className="font-small px-2 m-0">
                                <p>{p.name}</p>
                                <p>{p.date}</p>
                            </div>
                            <hr />
                        </div>
                    )) :
                        <p className="py-2 text-center">ﻻ يوجد مواعيد اليوم</p>}

                </div>
            </Col>
        </Row>
    )
}

export default DataLists