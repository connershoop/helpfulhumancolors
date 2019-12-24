
import React, { useEffect, useState, useContext } from 'react';
import { getAllColors } from "../firebase/db"

// Colors from https://gist.github.com/kawanet/a880c83f06d6baf742e45ac9ac52af96#file-material-colors-json


export const useGetColors = (colorGrouper, searchIdentifier) => {
    //initiallize loading and colors object
    const [loading, setLoading] = useState(true)
    const [allColors, setAllColors] = useState({})
    const [allColorArray, setAllColorArray] = useState([])
    const [filteredColors, setFilteredColors] = useState({})

    useEffect(() => {
        setLoading(true)

        const fetchColors = async () => {
            getAllColors().then(res => {
                setAllColors(res.val())
                sortColors(res.val(), colorGrouper, searchIdentifier)
            }).catch(err => console.log(err))
        }

        fetchColors()
    }, [])


    useEffect(() => { // runs when color colorGrouper or searchIdentifier changes
        setLoading(true)
        if (Object.keys(allColors).length > 0) { // don't run initially before allColors is populated.  Only run on grouper and identifier changes
            sortColors(allColors, colorGrouper, searchIdentifier)
        }
    }, [colorGrouper, searchIdentifier])




    const sortColors = (allColors, colorGrouper, searchIdentifier) => {
        // Set the colors based on color identifier keyword and grouper

        //grouper
        if (Object.keys(allColors).length > 0) {
            if (colorGrouper !== "" && colorGrouper !== "undefined") {  // is it sorted by a group
                //extract colors from group
                let groupedColors = Object.values(allColors[colorGrouper])

                if (searchIdentifier !== "") {
                    console.log("sorts")
                    groupedColors = groupedColors
                        .filter(hex => { return (hex.includes(searchIdentifier)) })     // filter for those that contain search identifier
                        .sort((a, b) => {
                            return (a.indexOf(searchIdentifier) - b.indexOf(searchIdentifier))
                        }) //order by search identifier
                }

                setFilteredColors(groupedColors)
            } else {
                let tempFilteredColors = Object.values(allColors).map(colorGroupObject => { return (Object.values(colorGroupObject)) })

                tempFilteredColors = [].concat.apply([], tempFilteredColors);

                if (searchIdentifier !== "") {
                    tempFilteredColors = tempFilteredColors
                        .filter(hex => { return (hex.includes(searchIdentifier)) })     // filter for those that contain search identifier
                        .sort((a, b) => {
                            return (a.indexOf(searchIdentifier) - b.indexOf(searchIdentifier))
                        }) //order by search identifier
                }

                setFilteredColors(tempFilteredColors)
                setAllColorArray(tempFilteredColors)
                //  flatten all colors out of group objects
            }
        }


        setLoading(false)
    }




    return [allColors, allColorArray, filteredColors, loading]
}