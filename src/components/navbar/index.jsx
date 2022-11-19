import React from "react";
import logo from "../../assets/images/logo.png"
import {Link} from "react-router-dom"


const Navbar = () => {

    return(
        <div className="flex justify-between px-10 py-2">
            <img src={logo} alt="" className="w-[48px] h-12 cursor-pointer"/>
            <div className="flex">
            <Link to="/" className="ml-4 mt-2 font-medium text-black hover:text-white">Trang chủ</Link>
            <Link to="/intro" className="ml-4 mt-2 font-medium  text-black hover:text-white">Giới thiệu</Link>
            <Link to="/contact" className="ml-4 mt-2 font-medium  text-black hover:text-white">Liên hệ</Link>      
            </div>
            
        </div>
    )
}
export default Navbar