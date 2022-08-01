
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SampleNextArrow, SamplePrevArrow } from '../../../../components/Customs/ButtonSlider';

function SlickSlider({
    children,
    dots = true,
    infinite = true,
    speed = 700,
    slidesToShow = 4,
    slidesToScroll = 1,
    ...passProps
}) {
    const settings = {
        dots,
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        ...passProps,
    };
    return <Slider {...settings}>{children}</Slider>;
}

export default SlickSlider;
