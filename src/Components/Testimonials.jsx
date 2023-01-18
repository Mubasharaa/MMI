import React from 'react'
import './TestimonialStyle.css'

export default function Testimonials() {
    return (
        <div className='testimonialDiv'>
            <p className='happyHeading'>HAPPY PATIENT</p>
            <h3 className='heading'>What They Say About MMI Hospital</h3>
            <div className='container d-flex justify-content-center' id="vectorDiv">
                <img src="./images/Vector.png" className='vect' alt="" />
            </div>

            <div class="containert">
                <div class="row">
                    <div class="col-md-12" data-wow-delay="0.2s">
                        <div class="carousel slide" data-ride="carousel" id="quote-carousel">

                            <ol class="carousel-indicators">
                                <li data-target="#quote-carousel" data-slide-to="0" class="active"><img class="img-responsive " src="./images/testimonialLeft.png" alt="" />
                                </li>
                                <li data-target="#quote-carousel" data-slide-to="1"><img class="img-responsive" src="./images/testimonialCenter.png" alt="" />
                                </li>
                                <li data-target="#quote-carousel" data-slide-to="2"><img class="img-responsive" src="./images/testimonialRight.png" alt="" />
                                </li>
                            </ol>
                            <div class="carousel-inner text-center">


                                <div class="item active">
                                    <div className="quoteDiv">
                                        <div class="row">
                                            <div class="col-sm-8 col-sm-offset-2">

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !</p>
                                                <small>Someone famous</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div className="quoteDiv">
                                        <div class="row">
                                            <div class="col-sm-8 col-sm-offset-2">

                                                <p>Best private hospital in this area. This hospital has provided with all the modern facilities of diagnostic and treatment of the patients. Professional doctors and 24 hours emergency services are available. </p>
                                                <small>Rizwan Ahmad</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div className="quoteDiv">
                                        <div class="row">
                                            <div class="col-sm-8 col-sm-offset-2">

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>
                                                <small>Someone famous</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a class="carousel-control left" href="#quote-carousel" data-slide="prev">
                                <i class="fa fa-angle-left"></i>
                            </a>
                            <a class="carousel-control right" href="#quote-carousel" data-slide="next">
                                <i class="fa fa-angle-right"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
