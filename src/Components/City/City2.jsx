import React, { useRef } from "react";
import Slider from "react-slick";
import './City.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import canada from '../../assets/cand.jpg'
import dubai from '../../assets/dubai.jpg'
import antalya from '../../assets/antalya.jpg'
import usa1 from '../../assets/usa1.jpg'
import europe2 from '../../assets/europe2.jpg'
import sharm from '../../assets/sharm.jpg'
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Card2 from "../Card/Card2";



const City2 = () => {
    const { t, i18n } = useTranslation();
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
  

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                }
              },
              {
                breakpoint: 1120,
                settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 3,
                  infinite: true,
                }
              },
            {
              breakpoint: 1020,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 620,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
          ]
    };
    return (
        <div className="city">
            <div className="container">
                <h1 className="city-title">{t("city2")}</h1>
                <p className="city-text">{t("city3")}</p>
                <div className="slider-container">

                    <Slider ref={slider => (sliderRef = slider)} {...settings}>
                        <div className="slide-card">
                            <Card2 city={t("city17")} number={"234"}  images={canada} />
                        </div>
                        <div className="slide-card">
                            <Card2 city={t("city18")} number={"234"} images={dubai}/>
                        </div>
                        <div className="slide-card">
                            <Card2 city={t("city19")} number={"278"} images={antalya}/>
                        </div>
                        <div className="slide-card">
                            <Card2 city={t("city20")} number={"128"} images={usa1}/>
                        </div>
                        <div className="slide-card">
                            <Card2 city={t("city21")} number={"486"} images={europe2}/>
                        </div>
                        <div className="slide-card">
                            <Card2 city={t("city22")} number={"355"} images={sharm} />
                        </div>
                    </Slider>
                    <div style={{ textAlign: "center" }}>
                        <button className="button" onClick={next}>
                        <LeftCircleOutlined />
                        </button>
                        <button className="button" onClick={previous}>
                        <RightCircleOutlined />
                        </button>
                    </div>
                </div>
                <hr style={{width:"100%", 
                  marginTop:"90px",
                  marginBottom:"40px"
                }} />
            </div>
        </div>
    );
}

export default City2;
