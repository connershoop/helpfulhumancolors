import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

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
  const [allColors, allColorArray, filteredColors, loading] = useGetColors(colorGrouper, searchIdentifier) // use a hook to get user scores and data into a data frame


  // from the sidebar color group onClick 
  const handleChangeColorGrouper = (event) => {
    setColorGrouper(event.target.value);
  }


  const handleSearchChange = (event) => {
    setSearchIdentifier(event.target.value.toLowerCase())
  }

  console.log("searchIdentifier", searchIdentifier)
  let content = (
    <ColorContext.Provider value={filteredColors}>
      <Router style={{ margin: "0px" }}>

        <Row style={{ margin: "0px", padding: "0px" }}>
          <Navbar setSearchIdentifier={setSearchIdentifier} searchIdentifier={searchIdentifier} handleSearchChange={handleSearchChange} />
        </Row>
        <Row style={{ margin: "0px", padding: "0px" }}>
          <Col sm={0} lg={2} style={{ margin: "0px", padding: "0px" }}>
            {loading ? <div>...loading</div> :
              <Sidebar allColorArray={allColorArray}
                handleChangeColorGrouper={handleChangeColorGrouper}
                allColors={allColors} />
            }
          </Col>
          <Col style={{ margin: "0px", padding: "0px" }}
            sm={12} lg={10}>
            {loading ? <div>...loading</div> :
              <div>
                <Route exact path='/' component={ListView} />
                <Route path='/colors/:hexColor' component={DetailView} />
              </div>
            }
          </Col>
        </Row>
      </Router>
    </ColorContext.Provider>

  )

  return (
    <div className="App">{content}</div>
  );
}

export default App;
