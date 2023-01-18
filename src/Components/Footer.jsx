import React from 'react'
import './FooterStyle.css'

export default function Footer() {
  return (
    <div>
      <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-3">
                        <img class="logo" src="./images/footerLogo.png" alt=""/>
                        <p id='tagLine'>A leading light in healthcare</p>
                        <p id='hospitalDesc'>The hospital has a covered area of 320, 000 sq. ft. It is centrally air conditioned and designed to meet International Standards. It has 100% self power generation.</p>
                        <div class="social-icons">
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <h5 class="text-white">for health professionals</h5>
                        <div className='shapeImage'><img src="./images/shape.png" alt="" /></div>
                        <ul class="list-unstyled">
                            <li><span>+</span><a href="#">Careers</a></li>
                            <li><span>+</span><a href="#">Memon College of Nursing</a></li>
                            <li><span>+</span><a href="#">Contact Us</a></li>
                            <li><span>+</span><a href="#">Annual Reports and Newsletters</a></li>
                            <li><span>+</span><a href="#">About Us</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <h5 class="text-white">for hospital visitors</h5>
                        <div className='shapeImage'><img src="./images/shape.png" alt="" /></div>
                        <ul class="list-unstyled">
                            <li><span>+</span><a href="#">Doctors</a></li>
                            <li><span>+</span><a href="#">Our Specialities</a></li>
                            <li><span>+</span><a href="#">Services</a></li>
                            <li><span>+</span><a href="#">Teleclinics</a></li>
                            <li><span>+</span><a href="#">MMI Hospital Clinical Laboratory</a></li>
                            <li><span>+</span><a href="#">Blog</a></li>
                            <li><span>+</span><a href="#">Patient's Rights</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <h5 class="text-white">address</h5>
                        <div className='shapeImage'><img src="./images/shape.png" alt="" /></div>
                        <ul class="list-unstyled" id='locationIcons'>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i>Hyder Buksh Gabol Road,
                                Safoora Chowrangi, Karachi, Pakistan.</li>
                            <li><i class="fa fa-phone" aria-hidden="true"></i>02134691147-54, <br/>02134691159-64</li>
                            <li><i class="fa fa-envelope" aria-hidden="true"></i>Do you have a Question? <br/> info@mmi.edu.pk</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom py-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p class="mb-0">© Copyright 2022. All Rights Reserved.</p>
                    </div> 
                    <div class="col-md-6">
                        {/* <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-twitter'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </div>
  )
}
