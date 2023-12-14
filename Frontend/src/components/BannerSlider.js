import React from 'react'
import Banner1 from '../assets/Banner1.jpg'
import Banner2 from '../assets/Banner2.jpg'
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";;
const BannerSlider = () => {
    const data=[
        {
            id: 1,
            image: Banner1,
            title:"Fresh and organic Vegetables",
            description: "Starts fresh. Stays Fresh",
            color1: "#8dc88d",
            color2: "#122912"
        },
        {
            id: 2,
            image: Banner2,
            title:"Fesh and Juicy Fruits",
            description: "Juicy Goodness",
            color1: "#ddd8dd",
            color2: "#e0b6ef"
        }
    ]


    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
          <button className="custom-prev-arrow" onClick={onClick}>
            &#60;
          </button>
        );
      };
    
      const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
          <button className="custom-next-arrow" onClick={onClick}>
            &#62;
          </button>
        );
      };
      var settings = {
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
      };
  return (
    <Wrapper>
    <div className="bannerslider">
        <Slider className="bannerslider" {...settings}>
        {
            data.map(item=>{
                return(
                    <div className="imagecont" key={item.id}>
                    <img src={item.image} alt="no img"/>
                    <div className="content">
                        <h1 style={{color: item.color1}} >{item.title}</h1>
                        <p style={{color: item.color2}}>{item.description}</p>
                    </div>
                    </div>
                )
        })
    }
        </Slider>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.bannerslider{
    width:100%;
    overflow:hidden;
    height:75vh;
    position:relative;
}
.custom-prev-arrow,
.custom-next-arrow {
  background-color:     rgba(255, 255, 255, 0.612);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.custom-prev-arrow {
  left: 10px;
}

.custom-next-arrow {
  right: 10px;
}


/* Apply hover effect */
.custom-prev-arrow:hover,
.custom-next-arrow:hover {
  background-color: #f0f0f0c3;
}
.bannerslider .imagecont{
background-color: black;
display:flex;
position:relative;
width:100%;
height: 75vh;
}

.bannerslider .imagecont img{
    position: absolute;
    width:100%;
    top:0;
    left:0;
    height:100%;
    object-fit: cover;
}

.content{
    font-family: 'Courgette', cursive;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align:center; 
    color:white;
}

.content h1{
    font-family: 'Oswald', sans-serif;
    font-size: 4rem;
    font-weight: 1000;
    margin-bottom: 5px;
    width: 70%;
}

.content p{
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 10px;
    width: 70%;
}

`;

export default BannerSlider
