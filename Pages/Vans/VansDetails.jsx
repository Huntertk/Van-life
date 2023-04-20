import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import loadingIcon from "../../src/assets/images/1496.gif"


const VansDetails = () => {
    const param = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [van, setVan] = useState(null)

    const fetchData = async () => {
        const response = await fetch(`/api/vans/${param.id}`)
        const data = await response.json()
        setVan(data.vans)
        setIsLoading(false)
    }
    useEffect(() => {
        fetchData()
    },[param.id])

    if(isLoading){
    return <div className="loading-icon">
                <img  src={loadingIcon} />
            </div> 
    }
  return (

    <div className="van-detail-container">
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>{van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
        </div>
  )
}

export default VansDetails
