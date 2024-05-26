import data from "./TemplateData.json";
import Slider from 'react-slick/lib/slider'
import React, {useState} from "react";
import "./Search.css";

const settings ={
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay: true,
    speed: 500,
    arrows: false, 
  };
const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    
    <div className="templateContainer">
      
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        
        
        <div className="template_Container "> </div>
        <Slider {...settings}>
        
          {
            data 
              .filter((val) => {
                if(searchTerm === ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template absolute-center" key={val.id}>
                      <img src={val.image} alt=""   className="abzar "/>
                      <h3>{val.title}</h3>
                      <p className="price">${val.price}</p>
                  </div> 
                )
              })
          }
        
        </Slider> 
    </div>
    

  )
}

export default Search