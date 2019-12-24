import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import DetailView from "./components/detailView"
import ListView from "./components/listView"

import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"

import { useGetColors } from "./hooks/useGetColors"


import ColorContext from "./components/colorContext"
function App() {


  //Color grouper which will group color by pre determined sections
  const [colorGrouper, setColorGrouper] = useState("")
  //color search identifier, used to change color on search criteria
  const [searchIdentifier, setSearchIdentifier] = useState("")

  //Custom hook which will get colors and sort them based on input grouping and search identifier
  const [allColors, loading] = useGetColors(colorGrouper, searchIdentifier) // use a hook to get user scores and data into a data frame

  console.log(allColors)


  let content = (
    <ColorContext.Provider value={allColors}>

      <Row style={{ margin: "0px", padding: "0px" }}>
        <Navbar />
      </Row>
      <Row style={{ margin: "0px", padding: "0px" }}>
        <Col xs={2} style={{ margin: "0px", padding: "0px" }}>
          <Sidebar />
        </Col>
        <Col style={{ margin: "0px", padding: "0px" }}
          xs={10}>
          {loading ? <div>...loading</div> :
            <Router style={{ margin: "0px" }}>
              <Route exact path='/' component={ListView} />
              <Route path='/colors' component={DetailView} />
            </Router>}
        </Col>
      </Row>
    </ColorContext.Provider>

  )

  return (
    <div className="App">{content}</div>
  );
}

export default App;
