import React from "react";
import Navbar from "../../components/navbar";
const ProducDetail = () => {
    return(
        <div>
            <Navbar/>
            <div className="px-10 py-5">
                <p className="text-lg">Ten san pham</p>
                <div className="flex">
                    <div className="flex">
                        <p>Tình trạng:</p>
                        <p className="ml-2">Con hang</p>
                    </div>
                    <div className="flex ml-6">
                        <p>Bao hanh:</p>
                        <p className="ml-2">24 thang</p>
                    </div>
                </div>
                <hr className="my-3"/>
                <div className="flex ">
                    <div className="w-[33%]">
                        <img  src="https://minhtuanmobile.com/uploads/editer/images/macbook-pro-m2-2022-minhtuanmobile2.jpeg" className="w-full h-auto" alt="" />
                        <div className="flex justify-center ">
                            <img  src="https://minhtuanmobile.com/uploads/editer/images/macbook-pro-m2-2022-minhtuanmobile2.jpeg" className="w-[80px] h-40px] mx-2 " alt="" />
                            <img  src="https://minhtuanmobile.com/uploads/editer/images/macbook-pro-m2-2022-minhtuanmobile2.jpeg" className="w-[80px] h-40px] mx-2" alt="" />
                            <img  src="https://minhtuanmobile.com/uploads/editer/images/macbook-pro-m2-2022-minhtuanmobile2.jpeg" className="w-[80px] h-40px] mx-2" alt="" />
                        </div>

                    </div>
                    <div  className="w-[33%]">
                        <div className="">
                            <span>Giá bán: </span>
                            <span>2000 VND </span>
                        </div>
                        <div className="bg-gray-500 p-5">
                            <p className="text-lg font-medium "> Khuyến mãi</p>
                        </div>
                        <div className="boder-dotted p-5 border-gray-400 border-2">
                            <p >Thông tin quà tặng</p>
                        </div>
                        <div className="flex justify-center my-4">
                            <div className="w-[110px] p-2 bg-slate-300 rounded-lg hover:bg-slate-600 cursor-pointer">
                                <p className="text-lg text-center text-slate-100">Mua ngay</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <span className="mt-[2px]"> Goi</span>
                            <span className="mx-2 text-lg font-semibold text-red-500">111111</span>
                            <span className="mt-[2px]"> de giu hang</span>
                        </div>
                    </div>
                    
                    <div  className="w-[33%] p-6"> 
                        <div>
                            <p>Dien thoai tu van</p>
                        </div>
                        <ul className="ml-8">
                            <li className="list-disc">aaaaaa:0</li>
                            <li className="list-disc" >bbbbbb:1</li>
                            <li className="list-disc">cccccc:2</li>
                        </ul>
                        <div>
                            <p> Dia chi mua hang</p>
                            <ul className="ml-7">
                                <li className="list-disc"> Cho A</li>
                                <li className="list-disc"> Cho B</li>
                                <li className="list-disc"> Cho C</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr className="my-5" />
                <div>
                <table class="table-fixed w-[95%]">
                    <thead className="border-b-[1px] border-black">
                        <tr className="text-left">
                        <th className="w-[20%]">Phan cung</th>
                        <th className="w-[80%]">Thong so ki thuat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-[1px] border-gray-200">
                            <td className="my-[2px]">Chip</td>
                            <td className="py-2">Lậu</td>
                        </tr>  
                        <tr className="border-b-[1px] border-gray-200">
                            <td className="py-2">Màn hình </td>
                            <td className="py-2">13 inch</td>
                        </tr> 
                        <tr className="border-b-[1px] border-gray-200">
                            <td className="py-2">Trong luong </td>
                            <td className="py-2">2 kg</td>
                        </tr>                                   
                    </tbody>
                    </table>
                </div>
                <div className="my-9">
                    <p className="text-lg text-red-400 font-medium">Sản phẩm cùng thương hiệu</p>
                </div>
            </div>
        </div>
        
    )
}
export default ProducDetail