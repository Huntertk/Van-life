import React,{useEffect, useState} from "react"
import { Link } from "react-router-dom"
import loadingIcon from "../src/assets/images/1496.gif"


export default function Vans() {
    const [isLoading, setIsLoading] = useState(true)

    const [vans, setVans] = useState([])

    const serverD = async () => {
        const response = await fetch('api/vans')
        const data = await response.json()
        setVans(data.vans)
        setIsLoading(false)
    }
   
    useEffect(() => {
    serverD()
    },[])

        
    const vansElement = vans.map((van) => {
        return <div key={van.id} className="van-tile">
         <Link to={`/vans/${van.id}`}>
                    <img src={van.imageUrl} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
                </div>
    }) 

    if(isLoading){
        return <div className="loading-icon">
            <img  src={loadingIcon} />
        </div> 
    }

    return (
        <div className="van-list-container">
            <h1>Explore Our Vans Options</h1>
            <div className="van-list">
                {vansElement}
            </div>
        </div>
    )
}