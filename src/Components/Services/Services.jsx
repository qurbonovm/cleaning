import React from 'react'
import '../Services/Services.css'
import Home from '../Img/house.png'
import Office from '../Img/office.png'
import Factory from '../Img/factory.png'

const Services = () => {
  return (
    <div className='servic'>
       <div className="servic_head">
       <h2 className='servic_title'>Our Services</h2>
        <button className='servic_btn'>Explore services</button>
       </div>
        <div className="servic_menu">
            <div className="servic_house">
                <img className='servic_img' src={Home} alt="" />
                <strong className='servic_title2'>House cleaning</strong>
                <p className='servic_text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className="servic_office">
                <img className='servic_img' src={Office} alt="" />
                <strong className='servic_title2'>Office cleaning</strong>
                <p className='servic_text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className="servic_factory">
                <img className='servic_img' src={Factory} alt="" />
                <strong className='servic_title2'>Industrial cleaning</strong>
                <p className='servic_text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
        </div>
    </div>
  )
}

export default Services