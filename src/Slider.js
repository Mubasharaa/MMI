import React from 'react'
import total from './images/total knee.png'
import gaserv from './images/gaserv.png'
import hip from './images/total hip.png'
function slider() {
    return (
        <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carouseled">
      <div class="carousel-inner">
        <div class="carousel-item active">
        <img src={total} className="img__card1" loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
            
        </div>
        <div class="carousel-item">
        <img src={gaserv} className="img__card1" loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
        </div>
        <div class="carousel-item">
        <img src={ hip} className="img__card1" loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
       
      </div>
      );
    };
    
    
  
  
  
  export default slider