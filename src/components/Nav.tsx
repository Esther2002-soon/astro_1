import {motion} from 'framer-motion'
import { useState } from "react"
import download from "./download.png"
//import { useMediaQuery } from '../util/useMediaQuery'
export default function Nav(){
    //const [toggled, setToggled]=useState(false)
    //const matches = useMediaQuery("(min-width: 1280px)")
    //console.log(matches)
    return(
        <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32 ">
            <svg className = 'absolute bottom-0 left-1/2 -translate-x-1/2 ' 
            width= '250' 
            height={4} 
            viewBox="0 0 250 4" 
            fill='none' 
            xmlns='http://www.w3.org/2000/svg'>
            </svg>
            <div>
                <a href='/'><img src='download.png' alt="Profile picture of University" /></a>
            </div>
            {/*title */}
            <h1 className='text-lg font-bold'style={{ fontSize: '2rem' }}>
                <a href='/'>National Cheng Kung University</a>
            </h1>
            {/* <div className='flex gap-12'>
                <a href="/">Home</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>

            </div> */}
            {/* <div onClick={()=>setToggled(((prevToggle) => !prevToggle))} className='space-y-1' cursor-pointer>
                <span className='block h-0.5 w-8 bg-black'></span>
                <span className='block h-0.5 w-6 bg-black'></span>
                <span className='block h-0.5 w-4 bg-black'></span>

            </div> */}
            <div className='flex gap-6 '>
                <a href="/home">Campus</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    )
}