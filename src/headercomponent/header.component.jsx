import React, { useState } from "react"
import "./header.component.css"
import { Link } from "react-router-dom"
import dubai from "../../src/assets/dubai.jpg"
import carpik from './../../src/assets/carpik.jpg'
import electrician from './../../src/assets/electrician.png'
import TUTOR from './../../src/assets/TUTOR.png'
import restaurent from './../../src/assets/restaurent.png'
import PLUMBER from './../../src/assets/PLUMBER.png'
import GYM from './../../src/assets/GYM.jpg'
import  hotell from './../../src/assets/hotell.png'
import beauty from './../../src/assets/beauty.png'
import hospital from './../../src/assets/hospital.png'
import cardcar from './../../src/assets/cardcar.jpg'
import restaurant from './../../src/assets/restaurant.jpg'
import packers from './../../src/assets/packers.jpg'
import carrepair from './../../src/assets/carrepair.jpg'
import name from "./../../src/assets/name.jpeg"

import Popup from "reactjs-popup";
import { LoginComponent } from "../logincomponent/login.component"
import    { SignupComponent }  from "../signupcomponent/signup.component"
import BusinessSignupComponent from "../businesssignupcomponent/businesssignup.component"
import BusinessLoginComponent from "../businesslogincomponent/businesslogin.component"

export function HeaderComponent() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isUserLoginOpen, setIsUserLoginOpen] = useState(false);
  const [isBusinessSignupOpen, setIsBusinessSignupOpen] = useState(false);
  const [isBusinessLoginOpen, setIsBusinessLoginOpen] = useState(false);
  return (


    <section >

     <nav className="fixed-top" >
      <nav class="navbar navbar-expand-lg " id="navbar-body1">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}
              &nbsp;&nbsp;

              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  English
                </a>
                <ul class="dropdown-menu">
                  <li> <a class="dropdown-item" href="#">Hindi</a></li>
                  <li><a class="dropdown-item" href="#">Arabic</a></li>
                </ul>
              </li>
              &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

              <li class="nav-item dropdown">
                <a class="nav-link active  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  USD
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">UAE</a></li>
                  <li><a class="dropdown-item" href="#">INR</a></li>
                </ul>
              </li>
            </ul>

            {/* 
      <form class="d-flex" role="search" id="ddd">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            <div className="firstpart">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-items">




                &nbsp;&nbsp;

                <h6 className="about">
                  <a class="nav-link active" href="#">About&nbsp;Us</a>
                </h6>

                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                <h6 class="nav-item">
                  <a class="nav-link active" href="#">Contact&nbsp;Us</a>
                </h6>

                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                <Link to="/addservice"> 
                <h6 class="nav-item">
                  <a class="nav-link active" href="#">Add&nbsp;Service</a>
                </h6></Link>

                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;



{/* 
                <h6 class="nav-item">
                  <a class="nav-link active" href="#">Login</a>
                </h6>

                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                <h6 class="nav-item">
                  <a class="nav-link active" href="#">Signup</a>
                </h6> */}

                <div className="butt">
                <Link to="/login">
                   <button className="regi">Login</button></Link>

{/* <button onClick={() => setIsUserLoginOpen(true)}>Login</button>  */}

            {isUserLoginOpen && (
              <div className="popup">
                <div className="popup-content">
                  <LoginComponent onClose={() => setIsUserLoginOpen(false)} ></LoginComponent>
                  </div>
                  </div>

            )}

&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

            {/* <button onClick={() => setIsSignupOpen(true)}>Signup</button> */}

            {isSignupOpen && (
              <div className="popup">
                <div className="popup-content">
                  <SignupComponent onClose={() => setIsSignupOpen(false)} ></SignupComponent>
                  </div>
                  </div>
      
    )}

{isBusinessLoginOpen && (
        <div className="popup">
          <div className="popup-content">
            <BusinessLoginComponent
              onClose={() => setIsBusinessLoginOpen(false)}
            ></BusinessLoginComponent>
          </div>
        </div>
      )}

      {isBusinessSignupOpen && (
        <div className="popup">
          <div className="popup-content">
          <BusinessSignupComponent
              onClose={() => setIsBusinessSignupOpen(false)}
            ></BusinessSignupComponent>
          </div>
        </div>
      )}




                  <Link to="/signup">
                   <button className="regi">SIGN UP</button></Link>
                </div>

                {/* <div className="butt">
                  <Link to ="/blogin">
            <button onClick={() => setIsBusinessLoginOpen(true)}>
              Business Login
            </button> </Link>

            <Link to ="/bsignup" >
            <button onClick={() => setIsBusinessSignupOpen(true)}>
              Business Signup
            </button> </Link>
          </div>      */}




            </ul>






              
            </div>
          </div>
        </div>
      </nav>

      {/* second header  */}


      <nav class="navbar navbar-expand-lg bg-body-tertiary"  id="navbar-body2">
        <div class="container-fluid"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
          <img src={dubai} className="dubai-img"></img> &nbsp;
          <a class="navbar-brand" href="#">Find Dubai</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="secondpart">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-items">
                <h6>
                  <a class="nav-link active" href="#">My Wishlist</a>
                </h6>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <h6>
                  <a class="nav-link active" href="#">Cart</a>
                </h6>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h6>
                  <a class="nav-link active" href="#">Track&nbsp;Order</a>
                </h6>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </nav>







              
       
{/* Carousel start */}
      {/* <div>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={carpik} className="d-block w-100 " alt="..." />
            </div>
            <div class="carousel-item">
              <img src={""} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={""} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
<br></br> <br></br> <br></br> <br></br>  <br></br><br></br><br></br><br></br>

     {/* services */}

<div className="cards-parent">
            <div className="cards1">
               <button><img src={electrician} className="img-tutor" /></button>
               <p className="word-electri">Electrician</p>
            </div>

           <div className="cards1">
               <button><img src={TUTOR} className="img-tutor" /></button>
               <p className="word-tutor">Tutor</p>
            </div>

           <div className="cards1">
               <button><img src={restaurent}  className="img-tutor"/></button>
               <Link to="/restaurant">
               <p className="word-electri">Restaurant</p> </Link>
            </div>

            <div className="cards1">
               <button><img src={hotell} className="img-tutor"/></button>
               <p className="word-tutor">Hotels</p>
            </div>

            <div className="cards1">
               <button><img src={PLUMBER} className="img-tutor" /></button>
               <p className="word-tutor">Plumber</p>
            </div>

            <div className="cards1">
               <button><img src={GYM} className="img-tutor" /></button>
               <p className="word-gym">Gym</p>
            </div>

            <div className="cards1">
               <button><img src={beauty} /></button>
               <p className="word-education">Beauty&nbsp;&&nbsp;Spa</p>
            </div>

            <div className="cards1">
               <button><img src={hospital} /></button>
               <p className="word-tutor">Hospitals</p>
            </div>
{/*
            <div className="cards1">
               <button><img src={consultant} /></button>
               <p className="word-consultant">Consultants</p>
            </div>

            <div className="cards1">
               <button><img src={Popular} className="img-tutor"/></button>
               <p className="word-tutor">Popular Categories</p>
            </div>

                  */}
   </div>

{/* cards */}

      <div class="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="menu-section-heading">Explore Menu</h1>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="shadow menu-item-card p-3 mb-3">
                <img src={cardcar} class="menu-item-image w-100" />
                <h3 class="menu-card-title">Car Rental</h3>
                <a href="/car" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
  <div class="shadow menu-item-card p-3 mb-3">
    <img src={restaurant} class="menu-item-image w-100" />
    <h3 class="menu-card-title">Restaurant</h3>
    <Link to="/restaurant" class="menu-item-link">
      View All
      <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
      </svg>
    </Link>
  </div>
</div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img src={packers} class="menu-item-image w-100" />
                <h3 class="menu-card-title">Packers & Movers</h3>
                <a href="" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </a>
              </div>
            </div>




            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img src={carrepair} class="menu-item-image w-100" />
                <h3 class="menu-card-title">car Repair </h3>
                <a href="" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <div class="wcu-section pt-5 pb-5" id="wcuSection">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <h1 class="wcu-section-heading">Our Services</h1>
                      <p class="wcu-section-description">
                        We use both original recipes and classic versions of famous Services
                      </p>
                    </div>
                    <div class="col-12 col-md-4">
                      <div class="wcu-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png" class="wcu-card-image" />
                        <h1 class="wcu-card-title mt-3">Mechanical Service</h1>
                        <p class="wcu-card-description">
                          Mechanical services work encompasses a wide range of job specialties - from small automotive garages, domestic repairs and installations to building sites, industrial construction and facilities and shipbuilding.
                        </p>
                      </div>
                    </div>
                    <div class="col-12 col-md-4">
                      <div class="wcu-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png" class="wcu-card-image" />
                        <h1 class="wcu-card-title mt-3">Tution Service</h1>
                        <p class="wcu-card-description">
                          Tuition provides a student with the opportunity to receive personalised attention from a tutor, allowing them to address specific areas where the student may need extra help covered in school.
                        </p>
                      </div>
                    </div>
                    <div class="col-12 col-md-4">
                      <div class="wcu-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png" class="wcu-card-image" />
                        <h1 class="wcu-card-title mt-3">Best Offers</h1>
                        <p class="wcu-card-description">
                          Services Coupons & Offers upto
                          <span class="offers">50% OFF</span>
                          and Exclusive Promo Codes on All Online Service Orders Exclusive Promo Codes on All Online Service OrdersPromo Codes on All Online Service Orders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="col-12 col-md-7">
                <h1 class="healthy-food-section-heading">
                  Fresh, Healthy, Organic, Delicious Fruits
                </h1>
                <p class="healthy-food-section-description">
                  Say no to harmful chemicals and go fully organic with our range of
                  fresh fruits and veggies. Pamper your body and your senses with
                  the true and unadulterated gifts from mother nature. with the true
                  and unadulterated gifts from mother nature.
                </p>
                <button class="custom-button">Watch Video</button>
              </div>
            </div>
          </div>
        </div>
        <div class="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-5 order-1 order-md-2">
                <div class="text-center">
                  <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png" class="delivery-and-payment-section-img" />
                </div>
              </div>
              <div class="col-12 col-md-7 order-2 order-md-1">
                <h1 class="delivery-and-payment-section-heading">
                  Delivery and Payment
                </h1>
                <p class="delivery-and-payment-section-description">
                  Enjoy hassle-free payment with the plenitude of payment options
                  available for you. Get live tracking and locate your food on a
                  live map. It's quite a sight to see your food arrive to your door.
                  Plus, you get a 5% discount on every order every time you pay
                  online.
                </p>
                <button class="custom-button">Order Now</button>
                <div class="mt-3">
                  <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png" class="payment-card-img" />
                  <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png" class="payment-card-img" />
                  <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png" class="payment-card-img" />
                  <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png" class="payment-card-img" />
                </div>
              </div>
            </div>
          </div>
                  </div>
        {/* <div class="thanking-customers-section pt-5 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
                <h1 class="thanking-customers-section-heading">
                  Thank you for being a valuable customer to us.
                </h1>
                <p class="thanking-customers-section-description">
                  We have a surprise gift for you
                </p>
                <div class="d-md-none">
                  <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" class="thanking-customers-section-img" />
                </div>
                <div>
                  <button class="custom-button">Redeem Gift</button>
                </div>
              </div>
              <div class="col-12 col-md-5 d-none d-md-block">
                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" class="thanking-customers-section-img" />
              </div>
            </div>
          </div>
                  </div>  */}
        <div class="follow-us-section pt-5 pb-5" id="followUsSection">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1 class="follow-us-section-heading">Follow Us</h1>
              </div>
              <div class="col-12">
                <div class="d-flex flex-row justify-content-center">
                  <div class="follow-us-icon-container">
                    <i class="fab fa-twitter icon"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg></i>
                  </div>
                  <div class="follow-us-icon-container">
                    <i class="fab fa-instagram icon"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg></i>
                  </div>
                  <div class="follow-us-icon-container">
                    <i class="fab fa-facebook icon"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-section pt-5 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <img src={dubai} class="food-munch-logo" />
                <h1 class="footer-section-mail-id">saitejareddie22@gmail.com</h1>
                <p class="footer-section-address">
                  Shubbar Majid Building, Khaild bin Waleed Road,
                  Near Jubilee Aster Hospital,
                  Dubai, U.A.E, P.O.BOX : 5370.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 








    </section>

  )
}