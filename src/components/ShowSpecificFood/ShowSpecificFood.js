import React, { useEffect, useState } from 'react'
import CardOfSpecificFood from "../CardOfSpecificFood/CardOfSpecificFood"
import {useParams} from "react-router-dom";
import "./ShowSpecificFood.css"

export default function ShowSpecificFood({dataOfFood}) {

    const [currentFood, setCurrentFood] = useState({})

    let { id } = useParams();

    useEffect(() => {
        const result = dataOfFood.find(element => element.id == id)
        if(result){
            setCurrentFood(result)
        }
    }, [])

    useEffect(() => {
        const result = dataOfFood.find(element => element.id === id)

        if(result){
            setCurrentFood(result)
        }
    }, [id])

  return (
    <div className="all">
        {currentFood.image ? <div className='cardOfSpecificFood'><CardOfSpecificFood currentFood={currentFood}/></div> : null}
    </div>
  )
}
