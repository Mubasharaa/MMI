
import React from 'react';

import frame from '../images/Frame.png';
import signs from '../images/sign.png';

import heartbeat from '../images/heartbeat.png';

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


function Paragraph() {
  return (
    <div className='row'>
      <div className='col-md-6 col-sm-12'>
      <div className="imagepa">


        <img src={frame} className="img__play" alt="" />
        </div>
        </div>

      
      <div className='col-md-6 col-sm-12'>
        <div className='par1'>
        <p  >Welcome to Memon Medical Institute Hospital</p>
        <h1 id='head'>Providing World Class Healthcaresince 2010</h1>
        <img src={heartbeat} className="heartbeats" alt="" />
        <p className='parag'>Memon Medical Institute Hospital (MMI Hospital) is a tertiary care
          hospital with state-of-the-art infrastructure that is designed according tothe international standards. It is a not for profit, 100% donor funded
          project that aims to serve the people regardless of their caste, creed,
          color, religion or ability to pay. The hospital has a covered area of 320,
          000 sq. ft, centrally air conditioned with own power generation facility.</p>
          </div>
          <div className="image1">


<img src={signs} className="sign" alt="" />

<button type="button" class="btn btn-primary oper">More About</button>
</div>

      </div>
      </div>
     
 

  )

}

export default Paragraph;