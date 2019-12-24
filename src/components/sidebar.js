import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Collapse from "react-bootstrap/Collapse"
import "./css/sidebar.css"

import { useMediaPredicate } from "react-media-hook";

const Sidebar = (props) => {
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
    // mobile open and closed functionality
    const [open, setOpen] = useState(false);

    //initialize the random color
    const [randomColor, setRandomColor] = useState(props.allColorArray[Math.floor(Math.random() * props.allColorArray.length)])


    // Map all the names of groups into an array of buttons for grouping
    const colorGroupButtons = Object.keys(props.allColors).map((d, i) => {
        return (
            <Col style={{ margin: "0px", padding: "0px" }} key={i} xs={12}>
                <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/" >
                    <button value={d} onClick={props.handleChangeColorGrouper} className="button" style={{
                        fontWeight: "bold", color: "white", backgroundColor: `${props.allColors[d][800]}`
                    }}>{d}</button>
                </NavLink>
            </Col>

        )
    })

    //update random color every time it is clicked
    const updateRandomColor = () => {
        setRandomColor(props.allColorArray[Math.floor(Math.random() * props.allColorArray.length)])
    }

    const randomColorButton =
        (
            <NavLink style={{
                textDecoration: "none",
                color: "inherit"
            }}
                to={`/colors/${randomColor.substr(1)} `} >
                <button className="button"
                    onClick={updateRandomColor}
                    style={{ backgroundColor: "black", margin: "10px", color: "white" }}>Random Color</button>
            </NavLink>
        )

    const allColorsButton =
        <Col style={{ margin: "0px", padding: "0px" }} xs={12}>
            <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/" >
                <button value={""} onClick={props.handleChangeColorGrouper}
                    className="button" style={{
                        fontWeight: "bold", color: "black", backgroundColor: "white"
                    }}>All</button>
            </NavLink>
        </Col >


    const content = biggerThan1000 ?
        (<Row style={{ margin: "0px", padding: "0px" }}>
            <Col xs={12} >
                {randomColorButton}
            </Col>
            <Col xs={12} ><h2 style={{
                margin: "20px",
                fontFamily: "Source Serif Pro, serif",
                color: "white",

            }}>Groups</h2></Col>
            {allColorsButton}
            {colorGroupButtons}
        </Row>)
        :
        (<div>
            <button
                className="button"
                style={{ backgroundColor: "black", margin: "5px" }}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Open Color Tools
            </button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <Row style={{ margin: "0px", padding: "0px" }}>
                        <Col xs={12} >
                            {randomColorButton}
                        </Col>
                        <Col xs={12} ><h2 style={{
                            margin: "20px",
                            fontFamily: "Source Serif Pro, serif",
                            color: "white",

                        }}>Groups</h2></Col>
                        {allColorsButton}
                        {colorGroupButtons}
                    </Row>
                    <button
                        style={{ backgroundColor: "black", margin: "5px" }}
                        className="button"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        Close Color Tools
            </button>
                </div>
            </Collapse>
        </div>)

    // add collapsable component
    return (
        <div style={{ backgroundColor: "grey", minHeight: "100%", margin: "0px" }}>
            {content}
        </div>)
}
export default Sidebar;