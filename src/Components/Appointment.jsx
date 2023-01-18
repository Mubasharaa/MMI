import React from 'react'
import './AppointmentStyle.css'

export default function appointment() {
    return (
        <div>
            {/* <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <div id="textDiv">
                            <p id="p1">Need a Doctor for Check-up?</p>
                            <h1>Just Make an Appointment</h1>
                            <h1>and You’re Done!</h1>
                            <p>Get Your Quote or Call:</p>
                            <p id="p2">02134691147-54, 02134691159-64</p>
                            <button id="b1">Get an Appointment</button>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-12' >
                        <img src="./images/imageDoc.png" width={"50%"} alt="" />
                    </div>
            </div> */}


            <div id="outerMain">
                <div id="innerDiv1">
                    <div id="textDiv">
                        <p id="p1">NEED A DOCTOR FOR CHECK-UP?</p>
                        <p className='headText'>Just Make an Appointment</p>
                        <p className='headText'>and You’re Done!</p>
                        <p id='call'>Get Your Quote or Call:</p>
                        <p id="numbers">02134691147-54, 02134691159-64</p>
                        <button id="b1">Get an Appointment</button>
                    </div>
                </div>

                <div id="innerDiv">
                    <div id="imageDiv">
                        <img src="./images/imageDoc.png" alt="" />
                    </div>
                </div>
            </div>

            <div id="secondOuterMain">
                <div className="container icon-cards d-flex gx-5 justify-content-center">
                    <div className='row icons'>
                        <div className='col iconDiv text-center'>
                            <img src="./images/icon1.png" alt="" />
                            <p className='iconLine'>Years of Experience</p>
                            <p className='iconNo'>14</p>
                        </div>

                        <div className='col iconDiv text-center'>
                            <img src="./images/icon2.png" alt="" />
                            <p className='iconLine'>Medical Specialities</p>
                            <p className='iconNo'>264</p>
                        </div>

                        <div className='col iconDiv text-center'>
                            <img src="./images/icon3.png" alt="" />
                            <p className='iconLine'>Medical Specialities</p>
                            <p className='iconNo'>388</p>
                        </div>

                        <div className='col iconDiv text-center'>
                            <img src="./images/icon4.png" alt="" />
                            <p className='iconLine'>Happy Patients</p>
                            <p className='iconNo'>5093</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
