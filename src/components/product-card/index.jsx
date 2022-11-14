import React from "react";

const ProductCard = () => {
    return(
        <div className="w-[220px] h-[320px] p-[10px] bg-sky-200 rounded-lg shadow lg shadow-gray-300">
            <img src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg" alt="" className="w-[200] h-[140px]"/>
        <div>
            <p className="font-medium text-xl mt-1">Latop RỞM</p>
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
        <div className="w-[160px] p-2 bg-gray-600 rounded-xl my-2 m-auto hover:bg-gray-700">
            <p className="text-center font-medium text-lime-50 cursor-pointer">Xem sản phẩm</p>
        </div>
        </div>
    )
}
export default ProductCard