import React from "react";
import { useNavigate } from "react-router-dom"
const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  return (
    <div className="w-[240px] h-[320px] p-[10px] bg-slate-50 rounded-lg shadow lg shadow-gray-500 mt-5 ml-5">
    <img
        src={item?.images?.length && item?.images[0]}
        alt=""
        className="w-[200px] h-[140px]"
      />
    <div>
    <p className="font-medium text-xl mt-1 truncate">{item.name}</p>
                            <p className="flex mt-1">
                                Hãng: <p className="font-medium text-[16px] ml-1 truncate">{item.brand}</p> 
                            </p>
                            <p className="flex mt-1">
                                Chip: <p className="font-medium text-[16px] ml-1 truncate">{item.cpu}</p> 
                                </p>
                            <p className="flex mt-1">
                                Giá:{" "} 
                                <p className="font-medium text-[16px] ml-1 text-red-400">{" "}{item.price}                           
                                    </p> 
                                </p>
                        </div>   
    {/* truyền value vào string: dùng dấu ``, trước value thêm $ */}

      <div onClick={() => navigate(`/product/${item?._id}`, {state: {id:item._id, brand:item.brand,}})} className="w-[160px] p-2 bg-gray-600 rounded-xl my-2 m-auto hover:bg-gray-700">
                     <p className="text-center font-medium text-lime-50 cursor-pointer">Xem sản phẩm</p>
                </div>
    </div>
  );
};

export default ProductCard;
// import React from "react";
// import {useNavigate} from 'react-router-dom'

// const ProductCard = ({data}) => {
//     const navigate = useNavigate() 
//     return(
        
//     //truyền value vào string: dùng dấu ``, trước value thêm $

        
//             <div className="w-[240px] h-[320px] p-[10px] bg-slate-50 rounded-lg shadow lg shadow-gray-500 mt-5 ml-5">
//                 <img src={data?.images?.length && data?.images[0]} className="w-[200] h-[140px]"/>
                
//                 <div>
//                     <p className="font-medium text-xl mt-1 truncate">{data?.name}</p>
//                     <p className="flex mt-1">
//                         Hãng : <p className="font-medium text-[16px] ml-1">{data?.brand}</p> 
//                     </p>
//                     <p className="flex mt-1">
//                         Chip : <p className="font-medium text-[16px] ml-1 truncate">{data?.cpu}</p> 
//                         </p>
//                     <p className="flex mt-1">
//                         Giá:{''} 
//                         <p className="font-medium text-[16px] ml-1 text-red-400">{data?.price}
                            
//                             </p> 
//                         </p>
//                 </div>
                
//                 <div onClick={() => navigate(`/product/${data?._id}`, {state: {id:data._id}})} className="w-[160px] p-2 bg-gray-600 rounded-xl my-2 m-auto hover:bg-gray-700">
//                     <p className="text-center font-medium text-lime-50 cursor-pointer">Xem sản phẩm</p>
//                 </div>
            
//             </div>   
                
            
        
//     )
// }
// export default ProductCard