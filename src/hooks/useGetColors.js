
import React, { useEffect, useState, useContext } from 'react';
import { getAllColors } from "../firebase/db"

export const useGetColors = (colorGrouper, searchIdentifier) => {
    //initiallize loading and colors object
    const [loading, setLoading] = useState(true)
    const [allColors, setAllColors] = useState({})

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


        if (Object.keys(allColors).length > 0) { // don't run initially before allColors is populated.  Only run on grouper and identifier changes
            sortColors(allColors, colorGrouper, searchIdentifier)
        }
    }, [colorGrouper, searchIdentifier])




    const sortColors = (allColors, colorGrouper, searchIdentifier) => {
        // Set the colors based on color identifier keyword and grouper

        //grouper
        if (Object.keys(allColors).length > 0) {
            if (colorGrouper !== "" && colorGrouper !== "undefined") {
                //extract colors from group
            } else {
                let tempAllColors = [...allColors].map(colorGroup => {
                    return (colorGroup.children)
                })
                tempAllColors = [].concat.apply([], tempAllColors);

                setAllColors(tempAllColors)
                //  flatten all colors out of group objects
            }
        }

        setLoading(false)
    }




    return [allColors, loading]
}