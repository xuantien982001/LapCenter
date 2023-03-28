import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";
import Loader from "../../components/loader";
import iconView from "../../assets/images/iconView.jpeg"
import iconDelete from "../../assets/images/delete.png"
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import UpdateOrderDialog from "./update-order-dialog";
import { toastMassage } from "../../components/massage";


const Orders = () => {
    const handleRenderStatus = (number) => {
        switch (number) {
            case 1:
                return <p className="text-green-600 font-semibold">Vừa đặt hàng</p>
            case 2:
                return <p className="text-blue-600 font-semibold">Đang giao hàng</p>
            case 3:
                return <p className="text-violet-600 font-semibold">Đã nhận hàng</p>

            default:
                return <p className="text-red-600 font-semibold">Bom hàng</p>

                
        }
    }
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [isOpenViewOrder,setIsOpenViewOrder] = useState(false)
    const [orderInfo,setOrderInfo] = useState()
    const handleGetAllOrders = () => {
        setLoading(true)
        axios.get('https://lapcenter-v1.onrender.com/api/order?pageSize=100&pageNumber=2')
            .then(function (response) {
                // handle success
                console.log(response);
                setLoading(false)
                setData(response?.data?.orders)
                console.log('ok');
            })
            .catch(function (error) {
                // handle error
                setLoading(false)
                console.log(error);
            })

    }
    const handleDeleteOrder = (orderId) => {
        axios
            .delete(`https://lapcenter-v1.onrender.com/api/order/removeOrder/${orderId}`)
            .then(function (response) {
                console.log('Đã xoá');
                handleGetAllOrders();
                toastMassage('success', 'Xoá đơn hàng thành công!')
            })
            .catch(function (error) {
                // console.log(error);
                toastMassage('erros', 'Xoá đơn hàng thất bại!')
            });
    }

    const handleCloseViewOrder = () => {
        setIsOpenViewOrder(false)
    }
    useEffect(() => {
        handleGetAllOrders()
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
                                    <th className="w-[15%]">Tên khách hàng</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Số điện thoại</th>
                                    <th>Địa chỉ</th>
                                    <th>Trạng thái</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item) => (
                                    <tr className="border-b-[1px] border-gray-200">
                                        <td className="py-2 " >{item?.customerName}
                                        </td>
                                        <td className="py-2" >{item?.productName}</td>
                                        <td className="py-2" >{item?.phone}</td>
                                        <td className="py-2" >{item?.address}</td>
                                        <td className="py-2" >{handleRenderStatus(item?.orderStatus)}</td>
                                        <td className="py-2 flex mt-4" >
                                            <img
                                                className="w-[30px] cursor-pointer hover:scale-125 mx-2" src={iconDelete}
                                                onClick={() => handleDeleteOrder(item?._id)}
                                            />
                                            <img onClick={() => {
                                                setIsOpenViewOrder(true)
                                                setOrderInfo(item)
                                            }} 
                                                className="w-[35px]  cursor-pointer hover:scale-125" 
                                                src={iconView} alt="" />

                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                        <p className="text-center  text-red-600 font-semibold mt-7"> {data?.length === 0 && 'Không có sản phẩm trong giỏ hàng'}</p>
                    </div>
                </>
            )}
            <UpdateOrderDialog 
            isOpen={ isOpenViewOrder } 
            handleClose = { handleCloseViewOrder }
            orderInfo = {orderInfo}
            getAllOrder = {handleGetAllOrders} />


        </div>
    )
}
export default Orders