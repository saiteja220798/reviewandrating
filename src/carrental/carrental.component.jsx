import dubaicar from './../../src/assets/dubaicar.jpg'
import './carrental.component.css'
import dubai from './../../src/assets/dubai.jpg'
import routecar from './../../src/assets/routecar.jpg'
import route2car from './../../src/assets/route2car.jpg'
import route3car from './../../src/assets/route3car.jpg'
import route4car from './../../src/assets/route4car.jpg'

export function CarrentalComponent(){
    return(
     
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
             <a class="nav-link active" href="#">Home</a>
           </h6>

           &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
           <h6 class="nav-item">
             <a class="nav-link active" href="#">About&nbsp;Us</a>
           </h6>

           &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

           <h6 class="nav-item">
             <a class="nav-link active" href="#">Contact&nbsp;Us</a>
           </h6>

           &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
           <h6 class="nav-item">
             <a class="nav-link active" href="#">Logout</a>
           </h6>
         </ul>
       </div>
     </div>
   </div>
 </nav>
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
      




       {/* Carousel start */}
      <div>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={dubaicar} className="d-block w-100 " alt="..." />
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
      </div>

      <br></br> <br></br> <br></br>


{/* cards */}

<div class="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="menu-section-heading">Explore Menu</h1>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="shadow menu-item-card p-3 mb-3">
                <img src={routecar} class="menu-item-image w-100" />
                <h3 class="menu-card-title">Dubai</h3>
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
                <img src={route2car} class="menu-item-image w-100" />
                <h3 class="menu-card-title">Abudhabi</h3>
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
                <img src={route3car} class="menu-item-image w-100" />
                <h3 class="menu-card-title">Sharjah</h3>
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
                <img src={route4car} class="menu-item-image w-100" />
                <h3 class="menu-card-title">Dubai </h3>
                <a href="" class="menu-item-link">
                  View All
                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </a>
              </div>
            </div>
            </div>
            </div></div>

        </section>
    )
}