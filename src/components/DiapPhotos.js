import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay} from 'swiper';

// Import Swiper styles
/*import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';*/

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css"; /* rajoute les fleches sur le coté */
//import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";

import "../assets/css/DiapPhotos.css";

import Presentation1 from './../assets/img/presentation1.jpg';
import Presentation2 from './../assets/img/presentation2.jpg';
import Presentation3 from './../assets/img/presentation3.jpg';
import Presentation4 from './../assets/img/presentation4.jpg';
import Presentation5 from './../assets/img/presentation5.jpg';
import Presentation6 from './../assets/img/presentation6.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

const dataEquipe= [
    {
        id: 1,
        titre : 'Lieu 1',
        presentation : 'lorem ipsum dolor sit, amet consectetur adipiscing',
        urlPhoto : Presentation1
    },
    {
        id: 2,
        titre : 'Lieu 2',
        presentation : 'lorem ipsum dolor sit, amet consectetur adipiscing',
        urlPhoto : Presentation2
    },
    {
        id: 3,
        titre : 'Lieu 3',
        presentation : 'lorem ipsum dolor sit, amet consectetur adipiscing',
        urlPhoto : Presentation3
    },
    {
        id: 4,
        titre : 'Lieu 4',
        presentation : 'lorem ipsum dolor sit, amet consectetur adipiscing',
        urlPhoto : Presentation4
    },
    {
        id: 5,
        titre : 'Lieu 5',
        presentation : 'lorem ipsum dolor sit, amet consectetur adipiscing',
        urlPhoto : Presentation5
    },
    {
        id: 6,
        titre : 'Lieu 6',
        presentation : 'lorem ipsum dolor sit, amet consectetur adipiscing',
        urlPhoto : Presentation6
    },
]

const DiapPhotos = () => {
    return (
        <div className="Equipe">

            <Swiper
            /*effect="fade"*/
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
                "delay": 5000,
                "disableOnInteraction": false
            }}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            { dataEquipe.map(user=> (
                <SwiperSlide key={user.id} className="slide">
            <div className="swiperdAbout">
                <div className="swiperHCard">
                    <div className="swiperCercle" style={{ backgroundImage: `url(${user.urlPhoto})` }}></div>
                </div>
                {/* <h3>{user.titre}</h3> */}
            </div>

                    {/* <div className="slide-content">
                        <div className="user-image">
                            <img src="/img/photo1.jpg" alt="image de présentation" className="user-photo" />
                        </div>
                        <h5>{user.username}</h5>
                        <p><i>" {user.presentation} </i> "</p>
                    </div> */}
                </SwiperSlide>
        ))}
        
      </Swiper>
      
      </div>
    );
};

export default DiapPhotos;