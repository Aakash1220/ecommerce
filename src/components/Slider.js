import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './css/slider.css';
  
 
function Slider() {
    return (
        <div className="slider">
           <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src="https://thumbs.dreamstime.com/b/row-colorful-female-summer-shoes-collection-yellow-background-close-up-top-view-women-fashion-sneakers-set-stylish-gumshoes-row-211999421.jpg" className="sliderimg" alt=""/>
      <img src="https://thumbs.dreamstime.com/b/row-colorful-female-summer-shoes-collection-yellow-background-close-up-top-view-women-fashion-sneakers-set-stylish-gumshoes-row-211999421.jpg" className="sliderimg" alt=""/>
      <img src="https://images.unsplash.com/photo-1533681018184-68bd1d883b97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" className="sliderimg" alt=""/>
      <img src="https://images.bewakoof.com/utter/banner-sliders-as-trendy-types-of-footwear-how-celebrities-wear-slide-sandals-1524138341.jpg"  className="sliderimg" alt=""/>
    </AliceCarousel>
        </div>
    )
}

export default Slider

