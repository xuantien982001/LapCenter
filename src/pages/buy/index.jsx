import React from "react";
import Navbar from "../../components/navbar";
import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
import "./styles.css"
import Modal from 'react-modal';
import iconClose from '../../assets/images/close.png'
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastMassage } from "../../components/massage";
import Input from "../../components/input";
import Button from "../../components/button";


const Buy = () => {
    const { state } = useLocation()
    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const productInfo = state?.productInfo
    const [isOpen, setIsOpen] = React.useState(false);


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const incrementQuantity = () => {
        if (!quantity) {
            setQuantity(1)
        } else setQuantity(parseInt(quantity) + 1)
    }
    const decrementQuantity = () => {
        if (parseInt(quantity) > 1) {
            setQuantity(parseInt(quantity) - 1)
        } else {
            setQuantity(1)
        }
    }

    const handleChangeQuantity = (val) => {
        if (val < 0) {
            setQuantity(1)
        }
        if (val == '') {
            setQuantity(1)
        }
        else setQuantity(val)
    }

    const handleAddProductInHistory = () => {
        axios.post('https://lapcenter-v1.onrender.com/api/history/addProductToHistory', {
            userId: localStorage.getItem('userId'),
            phone: phone,
            address: address,
            productName: productInfo.name || productInfo?.productName,
            productBrand: productInfo.brand || productInfo?.productBrand,
            quantity: quantity,
        })
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);


            });
    }


    const handleBuyProduct = () => {
        axios.post('https://lapcenter-v1.onrender.com/api/order/addOrder', {
            customerName: name,
            email: email,
            phone: phone,
            address: address,
            productName: productInfo.name || productInfo?.productName,
            productBrand: productInfo.brand || productInfo?.productBrand,
            quantity: quantity,
            orderStatus: 1
        })
            .then(function (response) {
                console.log(response);
                setIsOpen(false)
                toastMassage('success', 'Tạo đơn hàng thành công!')
                //CHỉ luu lsu mua hàng khi đã đăng nhập
                localStorage.getItem('userId') && handleAddProductInHistory()
            })
            .catch(function (error) {
                console.log(error);
                setIsOpen(false)
                toastMassage('erros', 'Tạo đơn hàng thất bại!')
            });

    }


    function handleOpenModal() {
        setIsOpen(true);
    }
    function handleCloseModal() {
        setIsOpen(false);
    }



    useEffect(() => {
        if (
            !name ||
            !email ||
            !phone ||
            !address ||
            !quantity ||
            parseInt(quantity) === 0
        ) {
            setIsDisabled(true)
        }
        if (name && email && phone && address && quantity > 0) {
            setIsDisabled(false)
        }
    }, [name, email, phone, address, quantity])

    useEffect(() => {
        if (!name || !email || !phone || !address || !quantity || parseInt(quantity) === 0) {
            setIsDisabled(true)
        }
        if (name && email && phone && address && quantity > 0) {
            setIsDisabled(false)

        }

    }, [name, email, phone, address, quantity])

    const handleChange = (val, field) => {
        switch (field) {
            case 'name':
                setName(val)
                break
            case 'email':
                setEmail(val)
                break
            case 'phone':
                setPhone(val)
                break
            case 'address':
                setAddress(val)
                break
            default:
                break
        }
    }

    return (
        <div>
            <Navbar />
            <div className="px-20 py-5">
                <div className="px-40">
                    <p className="mb-4">
                        <span className="text-red-600 font-bold">Để đặt hàng,</span> quý
                        khách hàng vui lòng kiểm tra sản phẩm, số lượng, giá, màu sắc và
                        điền các thông tin dưới đây:
                    </p>
                    <div className="flex justify-between">
                        <img src={productInfo?.image || productInfo?.images[0]} className="w-[100px] h-[70px]" />
                        <p className="font-bold">{productInfo?.productName || productInfo?.name}</p>
                        <div className="flex justify-between">
                            <div onClick={decrementQuantity} className="bg-gray-300 w-[35px] h-[35px] rounded-lg cursor-pointer hover:bg-gray-400">
                                <p className="text-2xl text-green-700 text-center">-</p>
                            </div>
                            <input
                                value={quantity}
                                type="number"
                                onChange={(e) => handleChangeQuantity(e.target.value)}
                                className="w-[50px] h-[35px] border-[1px] border-gray-700 mx-2 rounded outline-none px-2"
                            />
                            <div className="bg-gray-300 w-[35px] h-[35px] rounded-lg cursor-pointer hover:bg-gray-400">
                                <p onClick={incrementQuantity} className="text-2xl text-gray-600 text-center">+</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-right mt-3 font-semibold text-gray-600">Giá:{productInfo?.price}</p>
                    <hr />
                    <p className="text-right mt-3 font-semibold text-red-500 text-2xl">Tổng tiền: {productInfo?.price * quantity} VND</p>
                    <div className=" w-full h-[510px] rounded-2xl shadow-lg shadow-gray-500/50 my-6 p-8">
                        <p className="text-center font-semibold text-gray-600 text-xl"> Thông tin người nhận</p>
                        <p> Tên người nhận</p>
                        <Input
                            type={'text'}
                            value={name}
                            handleChange={handleChange}
                            placeholder='Tên người nhận'
                            className={"border-[1px] border-gray-400 w-full mb-3  px-2 outline-none mt-1 py-2 rounded"}
                            field={'name'}
                        />
                        <p> Email</p>
                        <Input
                            type={'text'}
                            value={email}
                            handleChange={handleChange}
                            placeholder='Email'
                            className={"border-[1px] border-gray-400 w-full mb-3  px-2 outline-none mt-1 py-2 rounded"}
                            field={'email'}
                        />

                        <p> Số điện thoại </p>
                        <Input
                            type={'text'}
                            value={phone}
                            handleChange={handleChange}
                            placeholder='Nhập số điện thoại'
                            className={"border-[1px] border-gray-400 w-full mb-3  px-2 outline-none mt-1 py-2 rounded"}
                            field={'phone'}
                        />
                        {/* <input value={phone} onChange={(e) => handleChange(e.target.value, 'phone')} type="text" placeholder="Số điện thoại" className="border-[1px] border-gray-400 w-full mb-3  px-2 outline-none mt-1 py-2 rounded" /> */}

                        <p> Địa chỉ nhận hàng</p>
                        <Input
                            value={address}
                            onChange={(e) => handleChange(e.target.value, 'address')}
                            rows='3'
                            type={'text'}
                            placeholder="Địa chỉ nhận hàng"
                            className="border-[1px] border-gray-400 w-full mb-3  px-2 outline-none mt-1 py-2 rounded"
                            isTextarea={true}

                        />

                        <div
                            className={`w-[100px] p-3 bg-gray-500 rounded m-auto ${isDisabled
                                ? 'bg-emerald-400 cursor-not-allowed'
                                : 'hover:bg-gray-600 cursor-pointer'
                                }`} onClick={!isDisabled && handleOpenModal}>

                            <p className="text-center text-white font-bold">Đặt hàng</p>
                        </div>
                        <button onClick={() => {
                            toast('Đã xác nhận đơn hàng!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                            });
                        }}></button>


                    </div>

                </div>
            </div>
            <Modal
                isOpen={isOpen}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={handleCloseModal}
                style={customStyles}
            // contentLabel="Example Modal"
            >
                <div className="w-[700px]">
                    <div className="flex justify-between">
                        <p className="font-semibold text-red-600 text-xl py-2"> Xác nhận thông tin đơn hàng</p>
                        <img src={iconClose} alt="" className="w-[30px] h-[30px]" onClick={handleCloseModal} />
                    </div>
                    <hr />
                    <div className="flex justify-between">

                        <div className="flex">
                            <img className="w-[150px] h-[110px]" src={productInfo?.imageproductInfo?.images[0]} alt="" />
                        </div>
                        <div className=" text-left ">
                            <p className="font-semibold">Thông tin sản phẩm</p>
                            <p>Tên sản phẩm: <span className="font-semibold">{productInfo?.productName || productInfo?.name}</span></p>
                            <p>Hãng: <span className="font-semibold">{productInfo?.brand} </span> </p>
                            <p>Số lượng: <span className="font-semibold">{quantity} </span> </p>
                            <p>Tổng thanh toán: <span className="font-semibold"> {quantity * productInfo?.price} VND </span> </p>
                            <h3 className="font-semibold mt-2" >Thông tin khách hàng</h3>
                            <p>Tên khách hàng: <span className="font-semibold">{name} </span>  </p>
                            <p>Số điện thoại: <span className="font-semibold">{phone}</span> </p>
                            <p>Email: <span className="font-semibold">{email}</span> </p>
                            <p>Địa chỉ nhận hàng: <span className="font-semibold">{address}</span> </p>
                        </div>

                    </div>
                    <Button
                        handleClick={handleBuyProduct}
                        className={'w-[100px] mt-3 p-2 bg-gray-500 rounded m-auto'}
                        textStyles={'text-center text-white cursor-pointer font-bold'}
                        btnText={'Mua hàng'}
                    />

                </div>
            </Modal>


        </div >
    )
}
export default Buy


// const btnStyles =
//     type === 'primary'
//       ? `bg-green-500 rounded ${
//           isDisabled
//             ? 'bg-emerald-400 cursor-not-allowed'
//             : 'hover:bg-green-600 cursor-pointer'
//         }`
//       : `bg-red-500 rounded
//       ${
//         isDisabled
//           ? 'bg-red-300 cursor-not-allowed'
//           : 'hover:bg-red-600 cursor-pointer'
//       }`
// ====
// <Button
//               handleClick={!isDisabled && handleOpenModal}
//               className={`w-[100px] p-3 m-auto`}
//               textStyles={'text-center text-white font-bold'}
//               btnText={'Đặt hàng'}
//               isDisabled={isDisabled}
//               type={'primary'}
//             />
// =====
// <Button
//             handleClick={handleBuyProduct}
//             className={'w-[100px] p-3 m-auto mt-3'}
//             textStyles={'text-center text-white font-bold'}
//             btnText={'Mua hàng'}
//             type={'primary'}
//           />