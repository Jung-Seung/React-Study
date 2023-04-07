import '../css/Slide.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/slide-image1.jfif';
import img2 from '../images/slide-image2.jfif';
import img3 from '../images/slide-image3.jfif';
import img4 from '../images/slide-image5.jfif';
import img5 from '../images/slide-image6.jfif';
import img6 from '../images/slide-image6.jfif';
import next from '../images/next.svg';
import prev from '../images/prev.svg';

function Slide(){

    const settings={
        nextArrow:(
            <div id='next'>
                <img src={next} alt='next'/>
            </div>
        ),
        prevArrow:(
            <div id='prev'>
                <img src={prev} alt='prev'/>
            </div>
        ),
        autoplay:true,
        autoplaySpeed:1000, //자동재생 속도
        speed:300, //페이지 전환 속도
        slidesToShow:3, //슬라이드에 보여질 갯수
        slidesToScroll:1 //전환당 넘어가는 갯수
    }

    const myImgList=[img1,img2,img3,img4,img5,img6]
    const result=myImgList.map(
        (data)=>(<div id='my-slide-element'>
            <img src={data} alt='data'/>
        </div>)
    )
    return(
        <div id='slide'>
            <Slider {...settings}>
                {result}
            </Slider>
        </div>
    )
}

export default Slide;