import React from 'react';
import farm from './assets/AboutUs/farm.jpg'
import choice from './assets/AboutUs/choice.jpg'
import local from './assets/AboutUs/local.jpg'
import trust from './assets/AboutUs/trust.jpg'
import easy from './assets/AboutUs/easy.jpg'
import styled from "styled-components";
function AboutUs() {
  return (  
    <Wrapper>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
        <div className="header">
           <p className="text-blk heading">
              <i>About Us</i>
            </p>
        </div>
          <div className="imgContainer">
            <img className="mainImg" src={farm} alt="Farm" />
          </div>
          <div className="responsive-container-block textSide">

            <p className="text-blk subHeading">
              Welcome to Novus Vegetables! Your ultimate destination for all things fresh, vibrant, and nourishing! At Novus Vegetables, we have cultivated a digital marketplace where the love for vegetables meets the convenience of modern technology.<br/>
              Our journey began with a simple yet profound belief: that the path to a healthier and happier lifestyle starts with what you put on your plate. With this ethos at heart, we embarked on a mission to connect local growers, passionate gardeners, and vegetable enthusiasts from all walks of life. Our platform not only redefines the way we buy and sell vegetables but also fosters a sense of community built upon a shared passion for wholesome, sustainable living.
            </p>
            <p>
              <h2 className="heading">Why choose us?</h2>
            </p>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src={choice} alt="Bounty of Choices" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">
                  Bounty of Choices
                </p>
                <p className="text-blk cardSubHeading">
                  Explore a diverse selection of premium-quality vegetables, from heirloom varieties to garden-fresh staples. We take pride in curating an extensive range that caters to every palate and culinary preference.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src={local} alt="Supporting Local" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">
                  Supporting Local
                </p>
                <p className="text-blk cardSubHeading">
                  When you shop with us, you're not just getting fresh produce – you're supporting local economies and sustainable agriculture. It's a small step with a big impact.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src={trust} alt="Transparency & Trust" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">
                  Transparency & Trust
                </p>
                <p className="text-blk cardSubHeading">
                  We believe in full transparency. Know the origins of your vegetables, their journey from seed to table, and the practices that make them stand out. Every purchase is a vote for sustainable agriculture and responsible farming.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src={easy} alt="Simplicity & Convenience" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">
                  Simplicity & Convenience
                </p>
                <p className="text-blk cardSubHeading">
                  Navigating our website is as easy as harvesting ripe tomatoes. With user-friendly features and aseamless interface, you can browse, select, and order your favorite vegetables in a few clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Wrapper>
  );
}
const Wrapper = styled.div`
font-family: 'Poppins', sans-serif;
.text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  line-height: 25px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.responsive-cell-block {
  min-height: 75px;
}

.responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

.responsive-container-block.bigContainer {
  display:flex;
  padding:0;
  margin:0;
}
.header{
  font-family: 'Courgette', cursive;
  padding-top:10px;
  width:100%;
  position:relative;
  align-items: center;
  text-align: center;
  color: darkgreen;

}
.responsive-container-block.Container {
  max-width: 87%;
  display:flex;
  flex-direction:row;
  justify-content: space-evenly;
  align-items: center;
  padding:20px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  margin:20px auto;
  gap:20px;
  border-radius:10px;
  box-shadow:inset 0px 0px 13px 5px rgba(0,0,0,0.1);
}

.mainImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:10px;
}


.imgContainer {
  position: relative;
  width: 50%;
}

.responsive-container-block.textSide {
  width: 48%;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  z-index: 100;
  font-weight: normal;
}

.text-blk.heading {
  color:#295a13d1;
  font-size: 36px;
  line-height: 40px;
  font-weight: 1000;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 20px;
  margin-left: 0px;
}

.text-blk.subHeading {
  font-family: 'Roboto', sans-serif;
  font-size: 1.7rem;
  font-weight:500;
  line-height: 26px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 20px;
  margin-left: 0px;

}
.text-blk.subHeading.heading{
  font-family: 'Oswald', sans-serif;
}
.cardImg {
  width: 100px;
  height: 100px;
}

.cardImgContainer {
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 0px;
  margin-right: 10px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 0px;
}

.text-blk.cardHeading {
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
}

.text-blk.cardSubHeading {
  color: rgb(153, 153, 153);
  line-height: 22px;
}


@media (max-width: 1024px) {
  .responsive-container-block.Container {
    position: relative;
    align-items: flex-start;
    justify-content: center;
  }

  .mainImg {
    bottom: 0px;
  }

  .imgContainer {
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: auto;
    width: 60%;
  }

  .responsive-container-block.textSide {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: auto;
    width: 70%;
  }

  .responsive-container-block.Container {
    flex-direction: column-reverse;
  }

  .imgContainer {
    position: relative;
    width: auto;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
  }

  .responsive-container-block.textSide {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
    width: 100%;
  }

  .responsive-container-block.Container {
    flex-direction: row-reverse;
  }

  .responsive-container-block.Container {
    flex-direction: column-reverse;
  }
}

@media (max-width: 768px) {
  .responsive-container-block.textSide {
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .text-blk.subHeading {
    text-align: center;
    font-size: 17px;
    max-width: 520px;
  }

  .text-blk.heading {
    text-align: center;
  }

  .imgContainer {
    opacity: 0.8;
  }

  .imgContainer {
    height: 500px;
  }

  .imgContainer {
    width: 30px;
  }

  .responsive-container-block.Container {
    flex-direction: column-reverse;
  }

  .responsive-container-block.Container {
    flex-wrap: nowrap;
  }

  .responsive-container-block.textSide {
    width: 100%;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
  }

  .imgContainer {
    width: 90%;
  }

  .imgContainer {
    height: 450px;
    margin-top: 5px;
    margin-right: 33.9062px;
    margin-bottom: 0px;
    margin-left: 33.9062px;
  }
}

@media (max-width: 500px) {
  .imgContainer {
    position: static;
    height: 450px;
  }

  .mainImg {
    height: 100%;
  }

  .imgContainer {
    width: 100%;
  }

  .responsive-container-block.textSide {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .responsive-container-block.Container {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    overflow-x: visible;
    overflow-y: visible;
  }

  .responsive-container-block.bigContainer {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding: 0 30px 0 30px;
  }

  .text-blk.subHeading {
    font-size: 16px;
    line-height: 23px;
  }

  .text-blk.heading {
    font-size: 28px;
    line-height: 28px;
  }

  .responsive-container-block.textSide {
    margin-top: 40px;
    margin-right: 0px;
    margin-bottom: 50px;
    margin-left: 0px;
  }

  .imgContainer {
    margin-top: 5px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    width: 100%;
    position: relative;
  }

  #ixvck {
    width: 90%;
    margin-top: 40px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    font-size: 15px;
  }

  .blueDots {
    bottom: 0px;
    width: 100%;
    height: 80%;
    top: 10%;
  }

  .text-blk.cardHeading {
    font-size: 16px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 8px;
    margin-left: 0px;
    line-height: 25px;
  }

  .responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12 {
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
  }
}
`;

export default AboutUs;