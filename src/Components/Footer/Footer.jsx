import React from 'react'
import '../Footer/Footer.css'
import logo from '../Img/logo.png'

const Footer = () => {
  return (
    <div className='footer_menu'>
        <div className="footers">
        <div className="footer_one">
            <h3 className='footer_title'>Quality cleaning for your home</h3>
            <p className='footer_text'>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
        </div>
        <div className="footer_two">
            <strong className='footer_title2'>Contact Us</strong>
            <p className='footer_text2'>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
            <p className='footer_text3'>(414) 567 - 2109</p>
            <p className='footer_text3'>contact@cleaning.com</p>
        </div>
        <div className="footer_three">
            <strong className='footer_title2'>Hours</strong>
            <p className='footer_text4'>6:00 AM - 9:00 PM</p>
            <strong className='footer_name'>Saturday & Sunday</strong>
            <p className='footer_text4'>8:00 AM - 8:00 PM</p>
        </div>
        <div className="footer four">
            <strong className='footer_title2'>Get a free estimate</strong>
            <h3 className='footer_number'>(414) 567 - 2109</h3>
            <p className='footer_text5'>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
            <button className='footer_btn'>Request a free quote</button>
        </div>
        </div>
        <div className="foot">
            <img className='footer_logo' src={logo} alt="" />
            <p className='footer_mail'>Copyright © Cleaning X | Designed by - Powered by Webflow-Licenses</p>
        </div>
    </div>
  )
}

export default Footer