import React, { Component } from 'react'
import Slider from '../src/slider'
import { CustomSlide, getExtension } from '../src'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div>
        <CustomSlide
          src={
            'http://c-static-qa.copart.com/v1/AUTH_G1_QA/LPR1/dcaf2167-0b9c-4d8a-a0e4-99f1d4e5942a_sample.pdf?temp_url_sig=3d2e205c09b1d451aecbbde93a1ed78b88d6a2a8&temp_url_expires=1531382816'
          }
        />
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
  }
}
