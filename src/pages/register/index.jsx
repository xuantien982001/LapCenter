
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";


const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)
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
            case 'password':
                setPassword(val)
                break
            default:
                break
        }
    }
        
        const handleSubmitRegister = () => {
            setLoading(true)
            axios.post('https://lapcenter-v1.onrender.com/api/register', {
                name: name,
                email:email,
                phone:phone,
                isAdmin:false,
                password: password,
            })
                .then(function (response) {
                    console.log(response);
                    navigate('/login')
                    setLoading(false)

                })
                .catch(function (error) {
                    console.log(error);
                    alert('Đăng ký tài khoản không thành công, vui lòng thử lại sau!')
                    setLoading(false)
                    navigate('/')

                });
        }

        return (
            <div className="w-screen h-screen bg-gray-50 flex items-center justify-center">
                <div className="w-[500px] h-[600px] bg-slate-600">
                    <p className="font-bold m-2 cursor-default">Lapcenter</p>
                    <p className="my-7 text-center text-3xl font-bold text-white"> ĐĂNG KÝ</p>
                    <div className="p-8">
                        <p className="font-semibold mb-1">User name</p>
                        <input className="w-full p-2 border-[1px] border-white  bg-slate-200 outline-none" value={name}
                            onChange={(e) => handleChange(e.target.value, 'name')} type="text" id="" />
                        <p className="font-semibold mb-1">Email</p>
                        <input className="w-full p-2 border-[1px] border-white  bg-slate-200 outline-none" value={email}
                            onChange={(e) => handleChange(e.target.value, 'email')} type="text" id="" />
                        <p className="font-semibold mb-1 mt-3">Password</p>
                        <input className="w-full p-2 border-[1px] border-white bg-slate-200 outline-none" value={password}
                            onChange={(e) => handleChange(e.target.value, 'password')} type="password" />
                        <p className="font-semibold mb-1">Phone</p>
                        <input className="w-full p-2 border-[1px] border-white  bg-slate-200 outline-none" value={phone}
                            onChange={(e) => handleChange(e.target.value, 'phone')} type="text" id="" />
                       
            
                        <div onClick={handleSubmitRegister} className="w-[100px] bg-slate-400 m-auto mt-4 p-2 rounded hover:bg-slate-500">
                            <p className="text-center text-white font- font-semibold">Đăng ký</p>
                        </div>
                        <div className="w- [175px] m-auto" onClick={() => navigate('/login')}> <p className="text-white cursor-pointer mt-3">
                        Login if you have an account </p> 
                    </div>
                        <div className="w- [105px]" onClick={() => navigate('/')}> <p className="underline text-white hover: text- cursor-pointer mt-3">
                            Back to home </p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
    export default Register