import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-back-to-top'><span>Back to top</span></div>
        <div className='footer-body'>
            <div className='footer-body-links'>
                <span>Get to Know Us</span>
                <a href=''>About Us</a>
                <a href=''>Careers</a>
                <a href=''>Press releases</a>
                <a href=''>Amazon Science</a>
            </div>

            <div className='footer-body-links'>
                <span>Connect with Us</span>
                <a href=''>Facebook</a>
                <a href=''>Twitter</a>
                <a href=''>Instagram</a>
            </div>

            <div className='footer-body-links'>
                <span>Make Money with Us</span>
                <a href=''>Sell on Amazon</a>
                <a href=''>Sell under Amazon Accelerator</a>
                <a href=''>Protect and Build Your Brand</a>
                <a href=''>Amazon Global Selling</a>
                <a href=''>Become an Affiliate</a>
                <a href=''>Fulfilment by Amazon</a>
                <a href=''>Advertise Your Products</a>
                <a href=''>Amazon Pay on Merchants</a>
            </div>

            <div className='footer-body-links'>
                <span>Let Us Help You</span>
                <a href=''>COVID-19 and Amazon</a>
                <a href=''>Your Account</a>
                <a href=''>Returns Centre</a>
                <a href=''>100% Purchase Protection</a>
                <a href=''>Amazon App Download Help</a>
                <a href=''>Help</a>
            </div>
        </div>
        <div className='footer-links'></div>
    </div>
  )
}

export default Footer
