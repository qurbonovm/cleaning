import React from 'react'
import '../Person/Person.css'
import peron from '../Img/Frame.png'


const Person = () => {
  return (
    <div>
        <img className='person_img ' src={peron} alt="" />
    </div>
  )
}

export default Person