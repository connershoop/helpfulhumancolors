import React from "react"
import logo from "../images/index.svg"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import { NavLink, withRouter } from "react-router-dom"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
const Navbar = (props) => {

    const handleSearch = (event) => {
        event.preventDefault()
        props.setSearchIdentifier("")
        props.history.push("/")
    }



    return (<div style={{ flexDirection: "horizontal", backgroundColor: "#363C3C", height: "100px", width: "100%" }}>
        <Row style={{ margin: "0px", padding: "0px" }}>
            <Col xs={2}>
                <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/" >
                    <img alt="H" style={{ margin: "20px", padding: "0px" }} align="left" src={logo} />
                </NavLink>
            </Col>
            <Col xs={10}>
                <Form onSubmit={handleSearch} /*  not proud to resort to this push */ >
                    <Form.Row>
                        <InputGroup style={{ width: "95%", margin: "20px", align: "right" }} className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                onChange={props.handleSearchChange}
                                value={props.searchIdentifier}
                                input="searchIdentifier"
                                placeholder="hex color search"

                            />
                        </InputGroup>
                    </Form.Row>
                </Form>
            </Col>
        </Row>
    </div >)
}
export default withRouter(Navbar);