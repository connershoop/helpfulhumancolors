import React, { useContext, useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { NavLink } from "react-router-dom"
import "./css/pageNumber.css"
var Color = require('color');


// Function found Online ***
function LightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col, 16);


    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);

}

const DetailView = (props) => {

    // return to homepage
    const backButton = <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/" >
        <button style={{ marginTop: "20px" }} className="pageNumber">Clear</button>
    </NavLink>

    // return the shaded cards using the pre defined lightening and darkening function

    //create an array to map through
    const shadesArray = [-40, -20, 0, 20, 40]
    const shadeCards = shadesArray.map((d, i) => {
        let color = LightenDarkenColor(props.match.params.hexColor, d)
        while (color.length < 6) {
            color = "0" + color
        }

        color = "#" + color;
        return (
            <Col xs={2} >
                <Card style={{ height: "100px", backgroundColor: `${color}` }}>
                    <Card.Body>
                        <Card.Text style={{ backgroundColor: "white" }} >{color}</Card.Text>
                    </Card.Body>
                </Card>
            </Col >
        )
    })





    return (
        <div style={{ height: "100%", margin: "0px", padding: "0px" }}>
            <Row className="justify-content-center" style={{ margin: "0px", padding: "0px" }}>
                <Col xs={12}>
                    <Card style={{ margin: "50px", backgroundColor: "#" + props.match.params.hexColor, height: "400px", }}>
                        <Card.Body>
                            <Card.Text style={{ backgroundColor: "white" }}>{"#" + props.match.params.hexColor}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {shadeCards}
                <Col xs={12}>
                    {backButton}
                </Col>
            </Row>

        </div>)
}
export default DetailView;