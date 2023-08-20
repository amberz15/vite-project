import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className = 'hero-container'>
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        <h1>summer adventures</h1>
        <p>2023</p>
        <div className='hero-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                get started
            </Button>
            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
                subscribe to my blog
            </Button>
        </div>
    </div>
  )
}

export default HeroSection