import React,{useEffect, useState} from "react"
import { Link, useSearchParams } from "react-router-dom"
import loadingIcon from "../../src/assets/images/1496.gif"
import { serverD } from "../../src/Api"


export default function Vans() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = React.useState(null)
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get('type')
    
    console.log(searchParams.toString())
    
   
    useEffect(() => {
    const loadingVans = async () => {
        setIsLoading(true)
        try{
            const data = await serverD()
            setVans(data)
            
        } catch(err) {
            setError(err)
        } finally{
            setIsLoading(false)
        }
    }
    console.log(error)

    loadingVans()
    },[])

        const filterArray = typeFilter ? vans.filter((van) => {
            return van.type === typeFilter
        }) : vans
    const vansElement = filterArray.map((van) => {
        return <div key={van.id} className="van-tile">
         <Link to={`${van.id}`} state={{search: `?${searchParams.toString()}`, type: typeFilter}}>
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


    const handleFilterChange = (key, value) => {
        setSearchParams((prev) => {
            if(value === null) {
                prev.delete(key)
            } else {
                prev.set(key, value)
            }
            return prev
        })
    }
    if(error){
        return <h1>There is some error</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore Our Vans Options</h1>
            <div className="van-list-filter-buttons">
                <button className={`van-type simple ${typeFilter === 'simple' ? 'selected': ''}`} 
                
                onClick={() => { handleFilterChange('type', 'simple') }}>
                Simple</button>
                
                <button className={`van-type rugged ${typeFilter === 'rugged' ? 'selected': ''}`} 
                onClick={() => { handleFilterChange('type', 'rugged') }}>Rugged</button>
                
                <button className={`van-type luxury ${typeFilter === 'luxury' ? 'selected': ''}`} 
                onClick={() => { handleFilterChange('type', 'luxury') }}>Luxury</button>
            {
                typeFilter &&
                <button className="van-type clear-filters" onClick={() => { handleFilterChange('type', null) }}>Clear Filter</button>
            
            }
            </div>
            <div className="van-list">
                {vansElement}
            </div>
        </div>
    )
}