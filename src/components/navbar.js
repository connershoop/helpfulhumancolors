import React from "react"
import logo from "../images/index.svg"

const Navbar = () => {
    return (<div style={{ backgroundColor: "#363C3C", height: "100px", width: "100%" }}>
        <img style={{ margin: "20px", padding: "0px" }} align="left" src={logo} />
    </div>)
}
export default Navbar;