import React from 'react'
import "./trendingnfts.css"
import Slider from 'react-slick/lib/slider'
import { TRENDING_NFTS } from '../data/trendingNfts'
import TrendingCard from './TrendingCard'

import { useState } from 'react'


const TrendingNfts = () => {

  const [direction, setDirection] = useState('ltr'); // Initial direction is LTR

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    arrows: false,
    rtl: direction === 'ltr', // Set RTL based on the direction state
  };

  const toggleDirection = () => {
    setDirection(direction === 'ltr' ? 'rtl' : 'ltr');
  };
  

  return (
    <div className="trending-nfts">
      <div className="tn-title absolute-center">
        <span className="heading-gradient">TOP PROFILE'S</span>
       
        
        </div>
        

        <div className="tn-bg-blob"></div>
        <Slider {...settings}>
          {TRENDING_NFTS.map((_nft) =>
           (<TrendingCard nft={_nft}/>
           ))}
          
           </Slider>

          
      
    </div>
  );
};

export default TrendingNfts;