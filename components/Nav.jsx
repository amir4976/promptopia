"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState,useEffect } from 'react'
import {singIn,singOut,useSession,getProviders} from 'next-auth/react'




function Nav() {
  const isUserLoggedIn = false
  const [provider ,setProvider] = useState(null)
  const [ToggleDropDown, setToggleDropDown] = useState(false)


  useEffect(()=>{
    const setProvider = async () =>{
      const response = await getProviders()
      setProvider(response)
    }
    setProvider()
  },[])


  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className='flex gap-2 flex-center'>
        <Image 
        src='./images/logo.svg'
        alt='promptoipa logo'
        width={30}
        height={30}
      className='object-contain'
/>      
      <p className='logo_text'>PROMPTOPIA</p>
      </Link>


      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href={'/create-prompt'} className='black_btn'>create post </Link>
            <button type='button' onClick={singOut} className ='outline_btn '>
              sign Out
            </button>
             <Link href={'/profile'}>

              <Image src='./images/logo.svg'  width={37} height={37} className='rounded-full'/>
            </Link>
          </div>
        ):(
          <>
            {provider && Object.values(provider).map((provider)=>(
                <button type='button'
                key={provider.name}
                onClick={()=> singIn(provider.id) }
                className='black_btn'
                >
                  sign Up
                </button>
            ))}
          </>
        )}


      </div>
            {/* MOBILE NAVIGATION */}



    </nav>
  )
}

export default Nav