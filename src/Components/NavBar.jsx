import React from 'react'
import './NavBarStyle.css'
import Button from './UI/Button';

export default function NavBar() {
    return (
        <div>
            <div className='topBar'>
            </div>

            <div className='row'>
                <div className='col-md-6 phoneIcon'>
                    <p id='callNum'>
                        <i class="fa fa-phone" aria-hidden="true"></i>Phone: (92-021) 34691147-54
                    </p>
                </div>
                <div className='col-md-6 text-center iconLinks'>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                </div>
            </div>

            <div className='navOuterDiv'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navBarDiv">
                <div class="container-fluid navLinksDiv">

                    <a class="navbar-brand" href="#" style={{width: "100px"}}>
                        {/* <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="logo" width="75px"/> */}
                        <img src="./images/logo.png" alt="logo" width="45px" />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="row w-100 mx-0">

                            <div class="col-lg-10 col-md-12">
                                <div class="row navLinksDiv">
                                    <div class="col-lg-1 col-md-12 homeLink">HOME</div>
                                    <div class="col-lg-2 col-md-12 my-2">
                                        <div class=" dropdown">
                                            <a class="nav-link dropdown-toggle px-0" href="#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                ABOUT
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 my-2">
                                        <div class=" dropdown">
                                            <a class="nav-link dropdown-toggle px-0" href="#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                LATEST
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 my-2">
                                        <div class=" dropdown">
                                            <a class="nav-link dropdown-toggle px-0" href="#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                DOCTORS
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 my-2">
                                        <div class=" dropdown">
                                            <a class="nav-link dropdown-toggle px-0" href="#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                COLLEGES
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-12 my-2">
                                        <div class=" dropdown">
                                            <a class="nav-link dropdown-toggle px-0" href="#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                CAREERS
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-1 col-md-12 donateLink">DONATE</div>
                                </div>
                            </div>

                            <div class="col-lg-1 col-md-12 my-2" id='search'>
                                <i class="fa fa-search" aria-hidden="true"></i>
                                {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                            </div>


                            <div class="col-lg-1 col-md-12 my-2">
                                <Button />
                                {/* <button class="btn btn-outline-primary" type="submit">App</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
            
            </div>

    )
}
