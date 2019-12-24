import React, { useContext, useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ColorContext from "./colorContext"
import { NavLink } from "react-router-dom"
import "./css/pageNumber.css"
const ListView = (props) => {

    // retrieve filteredColors from context provider in App Component
    var filteredColors = useContext(ColorContext)

    //pagination setup
    var itemsPerPage = 9;
    var numberOfPages = Math.ceil(filteredColors.length / itemsPerPage)
    const pageNumberArray = Array.from(Array(numberOfPages).keys())

    // slice which is displayed
    const [slicedFilteredColors, setSlicedFilteredColors] = useState(filteredColors.slice(0, itemsPerPage))

    // to fire when changing group
    useEffect(() => {
        updatePage()
    }, [filteredColors])

    const handleChangePage = (event) => { // slice color array to fit page
        const number = Number(event.target.value)
        setSlicedFilteredColors(filteredColors.slice(number * itemsPerPage, (number + 1) * itemsPerPage))
    }
    // for resetting when changing group
    const updatePage = () => {
        setSlicedFilteredColors(filteredColors.slice(0, 9))
    }


    //create a page numbers array
    const pageNumbers = pageNumberArray.map((d, i) => {
        return (
            <Col style={{ margin: "0px", padding: "0px" }} key={i} xs={1}>
                <button className="pageNumber" onClick={handleChangePage} value={d}> {d + 1}</button>
            </Col>
        )
    })


    const cards = slicedFilteredColors.map((d, i) => {
        return (
            <Col key={i} style={{ fontFamily: "Source Serif Pro, serif", marginTop: "10px", marginBottom: "10px" }} xs={11} md={4} >
                <NavLink style={{ textDecoration: "none", color: "inherit" }} to={`/colors/${d.substr(1)}`}>
                    <Card style={{ height: "200px", backgroundColor: `${d}` }}>
                        <Card.Body>
                            <Card.Text style={{ backgroundColor: "white" }} >{d}</Card.Text>
                        </Card.Body>
                    </Card>
                </NavLink>
            </Col >
        )
    }
    )




    return (<div style={{ height: "100%", margin: "0px", padding: "0px" }}>
        <Row style={{ margin: "0px", padding: "0px" }}>
            {cards}
        </Row>
        <Row style={{ margin: "0px", padding: "0px" }} >{pageNumbers}</Row>

    </div>)
}
export default ListView;