import React from 'react'
import Jadval from '../Img/jadval.png'
import Tolov from '../Img/tolov.png'
import Toza from '../Img/toza.png'
import '../About/About.css'

const About = () => {
  return (
    <div className='about'>
        <h2 className='about_tittle'>About Us</h2>
        <p className='about_text'>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        <div className="about_menu">
            <div className="about_left">
                <img className='about_img' src={Jadval} alt="" />
                <h4 className='about_title'>1. Schedule online</h4>
                <p className='about_text2'>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
            <div className="about_between">
                <img className='about_img' src={Tolov} alt="" />
                <h4 className='about_title'>2. Pay online easily</h4>
                <p className='about_text2'>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
            </div>
            <div className="about_right">
                <img className='about_img' src={Toza} alt="" />
                <h4 className='about_title'>3. Get your house cleaned</h4>
                <p className='about_text2'>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
            </div>
        </div>
            <button className='about_button'>Get a free quote</button>
            <button className='about_button2'>Explore services</button>
    </div>
  )
}

export default About