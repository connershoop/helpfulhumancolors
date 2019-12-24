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
    // slice which page numbers are displayed
    const [slicedPageNums, setSlicedPageNums] = useState(pageNumberArray.slice(0, 5))

    // to fire when changing group
    useEffect(() => {
        updatePage()
    }, [filteredColors])

    const handleChangePage = (event) => { // slice color array to fit page
        const number = Number(event.target.value)
        setSlicedFilteredColors(filteredColors.slice(number * itemsPerPage, (number + 1) * itemsPerPage))
        if (number > 0) {
            setSlicedPageNums(pageNumberArray.slice(number - 1, number + 4))
        } else {
            setSlicedPageNums(pageNumberArray.slice(0, 5))
        }
    }
    // for resetting when changing group
    const updatePage = () => {
        setSlicedFilteredColors(filteredColors.slice(0, 9))
        setSlicedPageNums(pageNumberArray.slice(0, 5))
    }


    //create a page numbers array
    const pageNumbers = slicedPageNums.map((d, i) => {
        return (
            <Col style={{ margin: "0px", padding: "0px" }} key={i} xs={2}>
                <button style={{ fontWeight: "bold" }} className="pageNumber" onClick={handleChangePage} value={d}> {d + 1}</button>
            </Col>
        )
    })


    const cards = slicedFilteredColors.length === 0 ?

        <center style={{
            margin: "40px",
            fontFamily: "Source Serif Pro, serif",
            fontSize: "50px", color: "black"
        }}>
            NO COLORS AVAILABLE
        </center>

        :

        (slicedFilteredColors.map((d, i) => {
            return (
                <Col key={i} style={{ fontFamily: "Source Serif Pro, serif", marginTop: "10px", marginBottom: "10px" }} xs={12} md={4} >
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
        )

    return (<div style={{ height: "100%", margin: "0px", padding: "0px" }}>
        <Row style={{ margin: "0px", padding: "0px" }}>
            {cards}
        </Row>
        <Row className="justify-content-md-center" style={{ margin: "0px", padding: "0px" }} >
            {pageNumbers}
        </Row>

    </div>)
}
export default ListView;