import React from 'react'
import "./infoitem.css"

const InfoItem = (props) => {
    const{ item}= props;
  return (
    <div className="info-item absolute-center">
        <img alt={item.section_title} className="ii-icon"  src={item.icon}/>
        <div className="ii-title absolute-center"> {item.section_title}</div>
        <div className="ii-description absolute-center">{item.description}</div>
    </div>
  )
}

export default InfoItem