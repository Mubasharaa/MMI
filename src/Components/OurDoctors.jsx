import React from 'react'
import './OurDoctorsStyle.css'

const OurDoctors = () => {
  return (
    <div className='outerDiv1'>
      <p className='ourDoctor'>OUR DOCTORS</p>
      <h3 className='heading'>Our Dedicated Doctors Team</h3>
      <div className='container d-flex justify-content-center'>
        <img src="./images/Vector.png" className='vect' alt="" />
      </div>

      <div className="container cards-wrapper d-flex gx-5 justify-content-center">
          <div className='row'>
            <div className='col-md-3 imgDiv'>
              <img src="./images/doctor1.png" alt="" />

            </div>

            <div className='col-md-3 imgDiv'>
              <img src="./images/doctor2.png" alt="" />

            </div>

            <div className='col-md-3 imgDiv'>
              <img src="./images/doctor3.png" alt="" />

            </div>

            <div className='col-md-3 imgDiv'>
              <img src="./images/doctor4.png" alt="" />

            </div>
          </div>
      </div>
      <p className='contactLine'>Don’t hesitate, contact us for better help and services <span>Explore all Dr. Team</span></p>

    </div>
  )
}

export default OurDoctors




