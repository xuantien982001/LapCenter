import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";
import Loader from "../../components/loader";
import iconCart from "../../assets/images/cart.png"
import iconDelete from "../../assets/images/delete.png"
import { useNavigate } from "react-router";

const MyCart = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const handleGetAllProductsInCart = () => {
        setLoading(true)
        axios.get(`https://lapcenter-v1.onrender.com/api/cart/${localStorage.getItem('userId',)}`,)
            .then(function (response) {
                // handle success
                console.log(response);
                setLoading(false)
                setData(response?.data?.products)
                console.log('ok');
            })
            .catch(function (error) {
                // handle error
                setLoading(false)
                console.log(error);
            })

    }
    const handleDeleteProductsInCart = (productId) => {
        axios
            .delete(`https://lapcenter-v1.onrender.com/api/cart/removeCartInCart/${productId}`)
            .then(function (response) {
                console.log('Đã xoá');
                handleGetAllProductsInCart();

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        handleGetAllProductsInCart()
    }, [])

    return (
        <div>
            <Navbar />
            {loading ? (<Loader />) : (
                <>
                    <p className="text-center my-5 font-semibold text-xl">Giỏ hàng của {localStorage.getItem('name')} </p>
                    <div className="px-20">
                        <table class="table-fixed w-[95%]">
                            <thead className="border-b-[1px] border-black">
                                <tr className="text-left">
                                    <th className="w-[15%]">Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hãng</th>
                                    <th>Giá</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item) => (
                                    <tr className="border-b-[1px] border-gray-200">
                                        <td className="py-2 " ><img className="w-[50px] h-[50px]" src={item?.image} alt="" />
                                        </td>
                                        <td className="py-2" >{item?.productName}</td>
                                        <td className="py-2" >{item?.productBrand}</td>
                                        <td className="py-2" >{item?.price}</td>
                                        <td className="py-2 flex mt-4" >
                                            <img onClick={() => navigate('/buy', { state: { productInfo: item } })} className="w-[30px] cursor-pointer hover:scale-125 mx-2" src={iconCart} alt="" />
                                            <img onClick={() => handleDeleteProductsInCart(item._id) } className="w-[30px]  cursor-pointer hover:scale-125" src={iconDelete} alt="" />
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                        <p className="text-center  text-red-600 font-semibold mt-7"> {data?.length === 0 && 'Không có sản phẩm trong giỏ hàng'}</p>
                    </div>
                </>
            )}

        </div>
    )
}
export default MyCart