import React, { useContext } from "react"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ColorContext from "./colorContext"
const ListView = () => {

    // retrieve allColors from context provider in App Component
    var allColors = useContext(ColorContext)

    console.log(allColors)
    const card = (<Col style={{ margin: "15px" }} xs={11} md={3}>
        <Card >
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
            </Card.Body>
        </Card>
    </Col>)



    return (<div style={{ backgroundColor: "red", margin: "0px", padding: "0px" }}>
        <Row style={{ margin: "0px", padding: "0px" }}>        {card}
        </Row>
    </div>)
}
export default ListView;