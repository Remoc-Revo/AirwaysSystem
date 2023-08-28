import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classes from './styles/slider.module.css'
function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} className={classes.item}>
        <img
          className={classes.image}
          src={require('../../images/slide3.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 ><strong style={{fontSize: '40px'}}>Fly with Kenya Airways</strong></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className={classes.item}>
        <img
          className={classes.image}
          src={require('../../images/slider1.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3 ><strong style={{fontSize: '40px'}}>Discover</strong></h3>
          <p>Journey with us on a unique adventure</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className={classes.item}>
        <img
          className={classes.image}
          src={require('../../images/slider2.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3 ><strong style={{fontSize: '40px'}}>Extra legroom, extra space, extra easy</strong></h3>
          <p>
          Pick from a choice of extras to make flying with us even more comfortable and convenient.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;