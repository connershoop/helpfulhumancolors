import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./css/sidebar.css"

const Sidebar = (props) => {

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

    const allColorsButton = <Col style={{ margin: "0px", padding: "0px" }} xs={12}>
        <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/" >
            <button value={""} onClick={props.handleChangeColorGrouper} className="button" style={{
                fontWeight: "bold", color: "black", backgroundColor: "white"
            }}>All</button>
        </NavLink>
    </Col>




    return (
        <div style={{ backgroundColor: "grey", minHeight: "100%", margin: "0px" }}>
            <Row style={{ margin: "0px", padding: "0px" }}>
                <Col xs={12} >
                    {randomColorButton}
                </Col>
                <Col xs={12} ><h2 style={{
                    margin: "20px",
                    fontFamily: "Source Serif Pro, serif",
                    color: "black"
                }}>Groups</h2></Col>
                {allColorsButton}
                {colorGroupButtons}
            </Row>
        </div>)
}
export default Sidebar;