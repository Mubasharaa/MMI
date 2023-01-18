
import React from 'react'
import styled from 'styled-components'
import quality from './images/quality and safety.png'
import leading from './images/leading and technology.png'

import experience from './images/experience.png'


function Card() {
  return (
    <main>
      <section className="container1">
      <section className="card__container1 card__leading ven">
        <div className="content__img">
<img src={quality} className="img__card" loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
          </div>
       
          <div className="card__parr">
                        <h1>Quality and safety</h1>
            <p>
            Our hospital utilizes state of the art
technology and employs a team of trueexperts.
            </p>
            </div>
 
         
        </section>


        <section className="card__container1 card__leading" id='card2'>
        <div className="content__img">
            <img src={leading} className="img__card" loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
          </div>
       
          <div className="card__parr">
            <h1>Leading and Technology</h1>
            <p>
           Our hospital utilizes satate of the art technology and employsateam of true experts .
            </p>
          </div>
         
        </section>
        
       
        <section className="card__container1 card__leading ven">
        <div className="content__img">
<img src={experience} className="img__card " loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
          </div>
       
          <div className="card__parr">
<h1>Experts by Experience</h1>
            <p>
            Our hospital utilizes satate of the art technology and employsateam of true experts .
            </p>
          </div>
         
        </section>
  


         
       

      </section>
    </main>
  );
}



export default Card