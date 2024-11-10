import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div style={{backgroundColor:'#A29875'}}className='w-[100%] h-[134px] flex'>
       <Image src="./images/logo.svg" alt="logo" width={100} height={100}/>
      <h1 className='w-[839px] h-[94px] text-[75px]  text-white '>Glam & GLow</h1>
     
    </div>
  )
}

export default Header