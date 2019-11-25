import React from 'react';
import '../App.css';
import Logo from './logo.png';
import Banner from './banner.jpg';
import Carousel from 'react-bootstrap/Carousel';

class Content extends React.Component {

  render() {
    return (
      <div className="Home">
        <br></br>
        <h1>Welcome to GameSpot!</h1>
        <br></br>
        <img height = "329" width="329"src={Logo} alt="website logo" />
        <h3><u>PC Parts We Recommend! Click an image to see!</u></h3>



<Carousel>
    <Carousel.Item>
    <a href="https://www.zotac.com/"><img
      className="slide1"
      src="https://gtech.systems/wp-content/uploads/2019/06/banner.jpg"
      alt="First slide"
      height="300"
      width="970"
    /></a>

    </Carousel.Item>
    <Carousel.Item>
    <a href="https://www.zotac.com/us/product/graphics_card/zotac-geforce-gtx-1080-amp-extreme"><img
      className="slide2"
      src="https://m.media-amazon.com/images/S/aplus-media/mg/04dc1803-bd0d-44f0-9981-1fd5711321a0.jpg"
      alt="Second slide"
      height="300"
      width="970"
    /></a>
    
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://www.nvidia.com/en-gb/geforce/graphics-cards/rtx-2080/"><img
      className="slide 3"
      src="https://imgur.com/YsH2HXH.jpg"
      alt="Third slide"
      height="300"
      width="970"
    /></a>
    </Carousel.Item>
  </Carousel>

        
        <br></br>
        <h1>GameSpot - The Community Run Gaming Site!</h1>
        <h3>The best community run application to see all of the best games out right now!</h3>
        <h3>Run by the community , for the community!</h3>
        <br></br>
        <h3>{new Date().toLocaleTimeString()}</h3>
        </div>
       
    );
  }
}

export default Content;