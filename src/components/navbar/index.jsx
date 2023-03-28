import React from "react";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router";


const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear();
        window.location.replace('/');
    }
    const navigateTo = (path) => {
        navigate(path)
        window.location.reload(true)
    }
    return (
        <div className="flex justify-between px-10 py-2 bg-slate-700 min-w-[525px]">
            <img src={logo} alt="" className="w-[48px] h-12 cursor-pointer" />
            <div className="flex">
                <Link to="/" className="ml-4 mt-2 font-medium text-white hover:text-yellow-400">Trang chủ</Link>
                <Link to="/intro" className="ml-4 mt-2 font-medium   text-white hover:text-yellow-400">Giới thiệu</Link>
                <Link to="/contact" className="ml-4 mt-2 font-medium   text-white hover:text-yellow-400">Liên hệ</Link>
                {localStorage.getItem('name') &&
                    <Link to="/my-cart" className="ml-4 mt-2 font-medium   text-white hover:text-yellow-400">My Cart</Link>
                }
                {/* <Link to="/test" className="ml-4 mt-2 font-medium   text-white hover:text-yellow-400">Liên</Link>       */}
                {/* {localStorage.getItem('name') ? (
                    <Link to="/login" onClick={() => { }} className="ml-4 mt-2 font-medium   text-white hover:text-yellow-400">Đăng xuất</Link>
                ) : (
                    <Link to="/login" className="ml-4 mt-2 font-medium   text-white hover:text-yellow-400">Đăng nhập</Link>
                )} */}
                {localStorage.getItem('isAdmin') === 'true' && (
                    <Link onClick={() => navigateTo('/orders')} className="ml-4 mt-2 font-medium   text-white hover:text-yellow-400">Quản lý đơn hàng</Link>

                )}
                {localStorage.getItem('name') ? (

                    <Link to="/" className="ml-4 mt-2 font font-medium text-white hover:text-purple-500 "
                        onClick={handleLogout}>
                        ĐĂNG XUẤT
                    </Link>
                ) : (
                    <Link to="/login" className="ml-4 mt-2 font font-medium text-white hover:text-purple-500 "
                    >
                        ĐĂNG NHẬP
                    </Link>
                )}
            </div>
        </div>
    )
}
export default Navbar