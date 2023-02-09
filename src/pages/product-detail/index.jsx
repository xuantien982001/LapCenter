import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
// import HashLoader from "react-spinners/HashLoader";
import Loader from "../../components/loader";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BrandCard from "../../components/brand-card";

const ProducDetail = () => {
    const [data, setData] = useState()
    const { state } = useLocation()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [thumbnail, setThumbnail] = useState()
    const [listDataBrand, setListDataBrand] = useState()
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const handleSearching = () => {
        setLoading(true)
        //cách1
        axios.get(`https://lapcenter-v1.onrender.com/api/product?productBrand=${state.brand}`,

        )

            .then(function (response) {
                setLoading(false)
                console.log('Product: ', response.data.products);
                setListDataBrand(response.data.products)
            })
            .catch(function (error) {
                setLoading(false)
            })
    }


    const fetchAPI = () => {
        setLoading(true)
        axios
            .get(`https://lapcenter-v1.onrender.com/api/product/getProductById/${state.id}`,)
            .then(function (response) {
                // handle success
                console.log('Response: ', response.data.response);
                setData(response.data.response)
                setThumbnail(response.data.response.images[0])
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
            })
    }
    useEffect(() => {
        // fetchAPI()
        fetchAPI()
        handleSearching()
        window.scroll(0,0)//cuộn lên đầu
    }, [state.id])//Khi 1 trong nhiều giá trị trong mảng đc truyền vào thy đổi thì hàm useEffect sẽ chạy lại
    //truyền value vào string: dùng dấu ``, trước value thêm $
    return (
        <div>
            <Navbar />
            {loading ? (<Loader loading={loading} />) : (
                <div className="px-10 py-5">
                    <p className="text-lg">{data?.name}</p>
                    <div className="flex">
                        <div className="flex">
                            <p>Tình trạng:</p>
                            <p className="ml-2">Còn hàng</p>
                        </div>
                        <div className="flex ml-6">
                            <p>Bảo hành:</p>
                            <p className="ml-2">24 tháng</p>
                        </div>
                    </div>
                    <hr className="my-3" />
                    <div className="flex ">
                        <div className="w-[33%]">
                            <img src={thumbnail} className="w-full h-auto" alt="" />
                            {
                                <div className="flex justify-center">
                                    {data?.images?.map((img, index) => (
                                        <img key={index} className="w-10 h-9 m-5 border-gray-700 border-2 cursor-pointer" src={img}
                                            onClick={() => setThumbnail(img)}>
                                        </img>
                                    ))}
                                </div>
                            }


                        </div>
                        <div className="w-[33%] px-4">
                            <div className="">
                                <span>Giá bán: </span>
                                <span className="text-red-600 text-2xl">{data?.price} VND </span>
                            </div>
                            <div className="bg-gray-500 p-5">
                                <p className="text-lg font-medium "> Khuyến mãi</p>
                            </div>
                            <div className="boder-dotted p-5 border-gray-400 border-2">
                                <p >Thông tin quà tặng</p>
                            </div>
                            <div className="flex justify-center my-4">
                                <div className="w-[110px] p-2 bg-slate-300 rounded-lg hover:bg-slate-600 cursor-pointer" onClick={() => navigate('/buy', { state : { productInfo : data }})}>
                                    <p className="text-lg text-center text-slate-100">Mua ngay</p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <span className="mt-[2px]"> Gọi</span>
                                <span className="mx-2 text-lg font-semibold text-red-500">111111</span>
                                <span className="mt-[2px]"> để giữ hàng</span>
                            </div>
                        </div>

                        <div className="w-[33%] p-6">
                            <div>
                                <p>Điện thoại tư vấn</p>
                            </div>
                            <ul className="ml-8">
                                <li className="list-disc">aaaaaa:0</li>
                                <li className="list-disc" >bbbbbb:1</li>
                                <li className="list-disc">cccccc:2</li>
                            </ul>
                            <div>
                                <p> Địa chỉ mua hàng</p>
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
                                    <th className="w-[20%]">Phần cứng</th>
                                    <th className="w-[80%]">Thông số kĩ thuật</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2" >Model</td>
                                    <td className="py-2" >{data?.model}</td>
                                </tr>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2" >CPU</td>
                                    <td className="py-2" >{data?.cpu}</td>
                                </tr>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2" >RAM</td>
                                    <td className="py-2" >{data?.ram}</td>
                                </tr>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2" >Ổ cứng</td>
                                    <td className="py-2" >{data?.disk}</td>
                                </tr>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2">Card đồ họa </td>
                                    <td className="py-2">{data?.card}</td>
                                </tr>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2">Màn Hình</td>
                                    <td className="py-2">{data?.monitor}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr className="mt-5" />
                    <p className="text-red-700 text-3xl font-semibold ml-3">
                        Sản phẩm cùng thương hiệu
                    </p>
                    <div className="h-20">
                        <Carousel responsive={responsive} >
                            {listDataBrand?.length > 0 &&
                                listDataBrand?.map((item) => (
                                    <BrandCard item={item} />
                                ))}
                        </Carousel>;
                    </div>

                </div>
            )}
        </div>
    )
}
export default ProducDetail