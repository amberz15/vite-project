import React from "react";
import '../../App.css'
import { Button } from '../Button'
import './SignUp.css'


export default function SignUp(){
    return (
    <div>
        {/* <h1 className='sign-up'>subscribe</h1> */}
        <div className="sign-up signUp-input signUp-container">
                <h1>subscribe</h1>
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
        </div>
    </div>
    
    )
}