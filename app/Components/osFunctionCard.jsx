import React from 'react'

const OsFunctionCard = ({title, description}) =>{
    return(
        <div className="osfunctioncard">
            <h3 className="card-title">
                {title}
            </h3>
            
            <p className="card-content">
                {description}
            </p>
        </div>
    )
}

export default OsFunctionCard