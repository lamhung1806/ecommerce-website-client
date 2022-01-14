import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"


export default function SimpleSlider() {
    var settings = {
        dots: true,

        speed: 800,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,

    };
    return (
        <div className="slider">

            <div className='grid wide '>
                <div className='row'>
                    <div className=' col c-12 l-8'>

                        <Slider {...settings}>

                            <div>
                                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/sis-apple-690-300-max.png"></img>
                            </div>
                            <div>
                                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/rog51380-600-max_1_.png"></img>
                            </div>
                            <div>
                                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/HS_AW_S6-03.png"></img>
                            </div>
                            <div>
                                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/fold-3-rr-690-300-max_1a.png"></img>
                            </div>
                            <div>
                                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/magic-6s-690x300_3_.jpg"></img>
                            </div>




                        </Slider>
                    </div>
                    <div className="col l-4 c-0">
                        <div className='slider_right'>
                            <iframe src="https://www.youtube.com/embed/IwcPk6V8VHI" height="180px"></iframe>
                        </div>
                        <div className='slider_right'>
                            <iframe src="https://www.youtube.com/embed/50cv1ND5GXM" height="180px"></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
}