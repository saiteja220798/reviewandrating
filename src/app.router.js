import { CarrentalComponent } from "./carrental/carrental.component";
import { HeaderComponent } from "./headercomponent/header.component";
import { Route,Routes } from "react-router-dom";
import { RestaurantComponent } from "./restaurantcomponent/restaurant.component";
import {LoginComponent} from "./logincomponent/login.component";
import {SignupComponent} from "./signupcomponent/signup.component";
import BusinessSignupComponent from "./businesssignupcomponent/businesssignup.component";
import BusinessLoginComponent from "./businesslogincomponent/businesslogin.component";
import BusinessDashboard from "./businessdashboard/businessdashboard";
import { AddService } from "./addservice/addservice";




export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<HeaderComponent></HeaderComponent>}></Route>
            <Route path="/car" element={<CarrentalComponent></CarrentalComponent>} ></Route>
            <Route path="/signup" element={<SignupComponent></SignupComponent>}></Route>
<Route path ="/login" element={<LoginComponent></LoginComponent>}></Route>
<Route path="/addservice" element={<AddService></AddService>}></Route>
<Route path="/bsignup" element={<BusinessSignupComponent></BusinessSignupComponent>}></Route>
<Route path ="/blogin" element={<BusinessLoginComponent></BusinessLoginComponent>}></Route>
        <Route path="/restaurant" element={<RestaurantComponent></RestaurantComponent>}></Route>
        <Route path ="/business/dashboard" element={<BusinessDashboard></BusinessDashboard>}></Route>
        
        </Routes>
    )
}