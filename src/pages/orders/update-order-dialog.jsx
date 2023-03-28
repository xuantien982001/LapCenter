import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { customStyles } from "../../constant/styles-modal";
import { toast } from "react-toastify";
import axios from "axios";
import { toastMassage } from "../../components/massage";


const UpdateOrderDialog = ({  handleClose, orderInfo }) => {
    const [orderStatus, setOrderStatus] = useState(orderInfo?.orderStatus)
    const [isOpen, setIsOpen] = React.useState(false);
    const handleChangeOrderStatus = (val) => {
        setOrderStatus(val)

    }
    function handleOpen() {
        setIsOpen(true);
    }
    function handleClose() {
        setIsOpen(false);
    }

    const handleUpdateStatusOrder = (orderId) => {
        axios.path(`https://lapcenter-v1.onrender.com/api/order/editOrderStatus/${orderId}`, {
            orderStatus: orderStatus
        })
            .then(function (response) {
                console.log(response);
                toastMassage('success', 'Cập nhật thành công!')
                handleClose()
            })
            .catch(function (error) {
                console.log(error);
                toastMassage('erros', 'Cập nhật thất bại!')
            });


    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                style={customStyles}
            >
                <div className="w-[700px] h-auto">
                    <div className="flex mb-[20px] justify-between">
                        <p>Xác nhận thông tin đơn hàng</p>
                        <p className="cursor-pointer hover:text-red-600">X</p>
                    </div>
                    <hr className="mb-[20px]" />
                    <div className="flex justify-around ">
                        <p>Tên khách hàng:{' '}<span>{orderInfo?.customerName}</span></p>
                        <p>Tên sản phẩm:{' '}<span>{orderInfo?.productName}</span></p>
                        <p>Hãng:{' '}<span>{orderInfo?.productBrand}</span></p>
                        <p>Số lượng:{' '}<span className="font-semibold">{orderInfo?.quantity}</span></p>
                        <br />
                        <p className="font-semibold">Số điện thoại<span>{orderInfo?.phone}</span></p>
                        <p>Địa chỉ:{' '}<span>{orderInfo?.address}</span></p>
                        <p>Trạng thái đơn hàng:{' '}<select name="" id=""
                            className="border-[1px] border-gray-400 py-1 px-2 rounded w-[150px]"
                            value={orderStatus} onChange={(e) => handleChangeOrderStatus(e.target.value)}>

                            <option value={1}>Vừa đặt hàng </option>
                            <option value={2}>Đang giao hàng</option>
                            <option value={3}>Đã nhận hàng</option>
                            <option value={4}>Không nhận hàng</option>
                        </select></p>
                    </div>
                </div>
                <hr className="mt-3" />
                <div className="flex float-right w-[220px]">
                    <div
                        onClick= {() => handleUpdateStatusOrder(orderInfo._id)}
                        className="w-[100px] p-3 bg-green-500 rounded m-auto hover:bg-green-600 cursor-pointer mt-3"
                    >
                        <p className="text-center text-white font-bold">Cập nhật</p>
                    </div>
                    <div
                        onClick={handleClose}
                        className="w-[100px] p-3 bg-neutral-400 rounded m-auto hover:bg-neutral-500 cursor-pointer mt-3"
                    >
                        <p className="text-center text-white font-bold">Huỷ</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UpdateOrderDialog