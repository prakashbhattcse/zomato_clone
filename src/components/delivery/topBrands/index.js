import React from 'react'
import Slider from 'react-slick/lib/slider';

import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./topBrands.css";


const topBrandsList = [
    {
        id: 1,
        time: "35 min",
        name:"La Pino'z Pizza",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp",
    },
    {
        id: 2,
        time: "29 min",
        name:"Theobroma",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png",
    },

    {
        id: 3,
        time: "32 min",
        name:"Subway",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png",
    },
    {
        id: 4,
        time: "30 min",
        name:"Chaayos Chai+Snacks=Relax",
       
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png",
    },
    {
        id: 6,
        time: "38 min",
        name:"Burger King",
     
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp",
    },
    {
        id: 7,
        time: "31 min",
        name:"Haldiram's",
      
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
    },
    {
        id: 8,
        time: "30 min",
       
        name:"KFC",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png?output-format=webp",
    },
    {
        id: 9,
        time: "40 min",
        name:"Kwality Wall's",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/e12f7587d0a5f589af54c88352ff8bf3_1628325081.png?output-format=webp",
    },
    {
        id: 10,
        time: "35 min",
        name:"Bikanervala",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png",
    },
];


const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};


const TopBrands = () => {
    return (
      <div className="top-brands max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
          {topBrandsList.map((brand) => (
            <div>
              <div className="top-brands-cover">
                <img
                  className="top-brands-image"
                  src={brand.cover}
                  alt={brand.name}
                />
              
              </div>
            <h6 className='brand-covername'>{brand.name}</h6>
            <h6 className='brand-covertime'>{brand.time}</h6>
            </div>
          ))}
        </Slider>
        
        
      </div>
    );
  };

export default TopBrands;