import React from 'react'
import logo from '../Img/phone.png'
import  '../Contact/Contact.css'

const Contact = () => {
  return (
    <div className='contact_start'>
        <div className="contact_left">
            <h2 className='contact_title'>Contact Us</h2>
            <p className='contact_text'>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
           <div className="contacts">
                <div className="contact_one">
                <img src={logo} alt="" />
                </div>
                <div className="contact_two">
                <p className='contact_title2'>CALL US NOW</p>
                <h3 className='contact_number'>(414) 567 - 2109</h3>
                </div>
           </div>
            <h4 className='contact_title3'>Not convinced yet?</h4>
            <p className='contact_text2'>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
            <button className='contact_btn'>Browse our packages</button>
        </div>
        <div className="contact_right">
            <div className="contactRow">
                <div className="row_first">
                    <div className="name">
                         <p className='tittle'>Full name</p>
                         <input className='cont_btn' type="text" />
                    </div>
                    <div className="address">
                        <p className='tittle'>Address</p>
                        <input className='cont_btn' type="text" />
                    </div>
                    <div className="request">
                        <p className='tittle'>Requested service</p>
                        <input className='cont_btn' type="text"/>
                    </div>
                </div>
                <div className="row_second">
                <div className="phone">
                            <p className='tittle'>Phone number</p>
                            <input className='cont_btn' type="text"/>
                        </div>
                        <div className="email">
                            <p className='tittle'>Email</p>
                            <input className='cont_btn' type="text"/>
                        </div>
                        <div className="day">
                            <p className='tittle'>Requested service</p>
                            <input className='cont_btn' type="text"/>
                        </div>
                </div>
            </div>
            <div className="add">
                <p className='tittle'>Add a note</p>
                <input className='contact_add' type="text" />
                </div>
            <button className='contact_btn2'>Submit message</button>
        </div>
    </div>
  )
}

export default Contact