import React, { useContext, useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ColorContext from "./colorContext"
import { NavLink } from "react-router-dom"
import "./css/pageNumber.css"
const DetailView = (props) => {
    return (

        <div style={{ height: "100%", margin: "0px", padding: "0px" }}>
            <Row style={{ margin: "0px", padding: "0px" }}>
                <Col xs={12}>
                    <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/" >
                        <button style={{ marginTop: "20px" }} className="pageNumber"> Go Back</button>
                    </NavLink>
                </Col>
                <Col xs={12}>
                    <Card style={{ margin: "50px", backgroundColor: "#" + props.match.params.hexColor, height: "400px", }}>
                        <Card.Body>
                            <Card.Text style={{ backgroundColor: "white" }}>{"#" + props.match.params.hexColor}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>)
}
export default DetailView;