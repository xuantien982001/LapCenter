import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import ClipLoader from 'react-spinners/ClipLoader';

const fakeAccount = {

    username: 'admin',
    password: 'admin',
}
const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const handleChange = (val, field) => {
        if (field === 'username') {
            setUsername(val)
        } else {
            setPassword(val)
        }
    }
    // const handlelogin = () => {
    //     if(
    //         username === fakeAccount.username && password === fakeAccount.password
    //     ){
    //         navigate('/')
    //     }
    //     else{
    //         alert('Tai khoan chua chinh xac')
    //     }
    // }
    const handleSubmitLogin = () => {
        setLoading(true)
        axios.post('https://lapcenter-v1.onrender.com/api/login', {
            username: username,
            password: password,
        })
            .then(function (response) {
                console.log(response);
                console.log('userName',response.data.userName);
                navigate('/')
                setLoading(false)
                localStorage.setItem('name',response.data.userName)
                localStorage.setItem('userId',response.data.userId)
                localStorage.setItem('isAdmin',response.data.isAdmin)

            })
            .catch(function (error) {
                console.log(error);
                alert('Tai khoan chua chinh xac')
                setLoading(false)

            });
    }

    return (
        <div className="w-screen h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-[500px] h-[600px] bg-slate-600">
                <p className="font-bold m-2 cursor-default">Lapcenter</p>
                <p className="my-7 text-center text-3xl font-bold text-white"> LOGIN PAGE</p>
                <div className="p-8">
                    <p className="font-semibold mb-1">User name</p>
                    <input className="w-full p-2 border-[1px] border-white  bg-slate-200 outline-none" value={username}
                        onChange={(e) => handleChange(e.target.value, 'username')} type="text" id="" />
                    <p className="font-semibold mb-1 mt-3">Password</p>
                    <input className="w-full p-2 border-[1px] border-white bg-slate-200 outline-none" value={password}
                        onChange={(e) => handleChange(e.target.value, 'password')} type="password" />
                    <div className="w-[100px] bg-slate-400 m-auto mt-4 p-2 rounded hover:bg-slate-500"
                        onClick={handleSubmitLogin}>
                        {loading ? (
                            <div className="flex justify-center">
                                <ClipLoader color="white" size={20} loading={loading} />
                            </div>
                        ) : (
                            <p className="text-center text-white font- font-semibold">Login</p>
                        )}
                    </div>
                    
                    <div className="w- [175px] m-auto" onClick={() => navigate('/register')}> <p className="text-white cursor-pointer mt-3">
                        Register a new account </p>
                    </div>
                    <div className="w- [105px]" onClick={() => navigate('/')}> 
                        <p className="underline text-white hover: text- cursor-pointer mt-3">
                        Back to home 
                        </p>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login



