import React from "react";
import {useNavigate} from 'react-router-dom'

const ProductCard = () => {
    const navigate = useNavigate() 
    return(
        
        
            <div className="w-[220px] h-[320px] p-[10px] bg-slate-50 rounded-lg shadow lg shadow-gray-500 mt-5 ml-5">
                <img src="https://minhtuanmobile.com/uploads/editer/images/macbook-pro-m2-2022-minhtuanmobile2.jpeg" alt="" className="w-[200] h-[140px]"/>
                
                <div>
                    <p className="font-medium text-xl mt-1">Macbook Air M2</p>
                    <p className="flex mt-1">
                        Hãng : <p className="font-medium text-[16px] ml-1">Apple</p> 
                    </p>
                    <p className="flex mt-1">
                        Chip : <p className="font-medium text-[16px] ml-1">M2</p> 
                        </p>
                    <p className="flex mt-1">
                        Giá:{''} 
                        <p className="font-medium text-[16px] ml-1 text-red-400">{' '}
                            2000 VNĐ
                            </p> 
                        </p>
                </div>
                
                <div onClick={() => navigate('/product/1')} className="w-[160px] p-2 bg-gray-600 rounded-xl my-2 m-auto hover:bg-gray-700">
                    <p className="text-center font-medium text-lime-50 cursor-pointer">Xem sản phẩm</p>
                </div>
            
            </div>        
            
        
    )
}
export default ProductCard