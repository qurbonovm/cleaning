import React from 'react'
import '../Articl/Articl.css'
import clean from '../Img/Frame2.png'
import woman from '../Img/Frame3.png'

const Articl = () => {
  return (
    <div className='arcticl'>
       <div className="articl_section">
       <h2 className='articl_title'>Articles & resources</h2>
        <button className='articl_btn'>Get a free quote</button>
        <button className='articl_btn2'>Browse articles</button>
       </div>
       <div className="articl_menu">
        <div className="articl_left">
            <img className='articl_img' src={clean} alt="" />
            <div className="articl_one">
                <strong className='articl_title2'>8 best vacuum cleaners to clean any mess for your home in 2022</strong>
                <p className='articl_text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                <strong className='articl_time'>Jan 28, 2022</strong>
            </div>
        </div>
        <div className="articl_right">
            <img className='articl_img2' src={woman} alt="" />
            <div className="articl_two">
                <strong className='articl_title2'>How to properly disinfect your phone and other electronics</strong>
                <p className='articl_text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                <strong className='articl_time'>Feb 1, 2022</strong>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Articl