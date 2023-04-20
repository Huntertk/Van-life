import React, { useEffect, useState } from 'react'
import { useParams, Link, Outlet, NavLink } from 'react-router-dom'
import loadingIcon from "../../src/assets/images/1496.gif"

const HostVanDetails = () => {
  const parameter = useParams()
  const [currentVan,setCurrentVan] = useState(null)
  const [isLoading,setIsLoading] = useState(true)

   const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }


  const getData = async () => {
    const response = await fetch(`/api/host/vans/${parameter.id}`)
    const data = await response.json()
    setCurrentVan(data.vans)
    setIsLoading(false)
  } 
  
  
  useEffect(() => {
    getData()
  },[])




  
    if(isLoading){
        return <div className="loading-icon">
            <img  src={loadingIcon} />
        </div> 
    }
  return (
        <section>
          <Link
                to=".."
                relative='path'
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                  <NavLink to="." 
                  end
                  style= {({isActive}) => {return isActive ? activeStyles : null}}
                  >Details</NavLink>

                  <NavLink to="pricing" 
                  style= {({isActive}) => {return isActive ? activeStyles : null}}
                  >Pricing</NavLink>

                  <NavLink to="photos" 
                  style= {({isActive}) => {return isActive ? activeStyles : null}}
                  >Photos</NavLink>
                </nav>
                <Outlet context={currentVan}/>
            </div>
        </section>
  )
}

export default HostVanDetails
