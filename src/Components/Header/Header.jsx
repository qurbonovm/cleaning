import React from 'react'
import Logo from '../Img/logo.png'
import BG from '../Img/clean.png'
import '../Header/Header.css'
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

const Header = () => {
  return (
    <div className='navbar'>
        <div className="header">
        <img className='nav_logo' src={Logo} alt="" />
        <ul className='nav_list'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Articles</li>
            <li>Contact</li>
        </ul>
        <p className='title'>Cart (0)</p>
        <button className='nav_button'>Get a free quote</button>
        </div>
        <div className="navbar_general">
            <div className="nav_left">
                <h1 className='nav_tittle'>Quality cleaning for your home</h1>
                <p className='nav_text'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                <div className="buttons">
                    <button className='nav_button2'>Get a free quote</button>
                    <div className="navbar_call">
                    <p className='nav_call'>CALL US NOW</p>
                    <h3 className='nav_number'>(414) 567 - 2109</h3>
                    </div>
                </div>
            </div>
            <div className="nav_right">
                <img className='nav_img' src={BG} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header