import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { NextRightIcon, NextLeftIcon } from '@icons/Icons'
import './Slider.css'
import Image from '@components/Image/Image'
function SliderCommon({ data }) {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextRightIcon width='10px' height='15px' />,
        prevArrow: <NextLeftIcon width='10px' height='15px' />,
    }

    return (
        <Slider {...settings}>
            {data.map((src, index) => (
                <Image src={src} key={index} height='412px' />
            ))}
        </Slider>
    );
}

export default SliderCommon;