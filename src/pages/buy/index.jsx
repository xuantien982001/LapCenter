import React from "react";
import Navbar from "../../components/navbar";
import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
import "./styles.css"
const Buy = () => {
    const { state } = useLocation()
    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const productInfo = state?.productInfo
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
                        <img src={productInfo.images[0]} className="w-[100px] h-[70px]" />
                        <p className="font-bold">{productInfo.name}</p>
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
                    <p className="text-right mt-3 font-semibold text-gray-600">Giá:{productInfo.price}</p>
                    <hr />
                    <p className="text-right mt-3 font-semibold text-red-500 text-2xl">Tổng tiền: {productInfo.price * quantity} VND</p>
                    <div className=" w-full h-[510px] rounded-2xl shadow-lg shadow-gray-500/50 my-6 p-8">
                        <p className="text-center font-semibold text-gray-600 text-xl"> Thông tin người nhận</p>
                        <p> Tên người nhận</p>
                        <input value={name} onChange={(e) => handleChange(e.target.value, 'name')} type="text" placeholder="Tên người nhận" className="border-[1px] border-gray-400 w-full mb-3  px-2 outline-none mt-1 py-2 rounded" />

                        <p> Email</p>
                        <input value={email} onChange={(e) => handleChange(e.target.value, 'email')} type="text" placeholder="Email" className="border-[1px] border-gray-400 w-full mb-3  px-2 outline-none mt-1 py-2 rounded" />

                        <p> Số điện thoại </p>
                        <input value={phone} onChange={(e) => handleChange(e.target.value, 'phone')} type="text" placeholder="Số điện thoại" className="border-[1px] border-gray-400 w-full mb-3  px-2 outline-none mt-1 py-2 rounded" />

                        <p> Địa chỉ nhận hàng</p>
                        <textarea value={address} onChange={(e) => handleChange(e.target.value, 'address')} rows={3} type="text" placeholder="Địa chỉ nhận hàng" className="border-[1px] border-gray-400 w-full mb-3  px-2 outline-none mt-1 py-2 rounded" />


                        <div
                            className={`w-[100px] p-3 bg-gray-500 rounded m-auto ${isDisabled
                                ? 'bg-emerald-400 cursor-not-allowed'
                                : 'hover:bg-gray-600 cursor-pointer'
                                }`}>

                            <p className="text-center text-white font-bold">Đặt hàng</p>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}
export default Buy