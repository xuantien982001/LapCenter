import React from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product-card";

const Home = () => {

    return(
        <div>
            <Navbar/>
            <h1 className="text-3xl font-bold underline"> HOME PAGE</h1>
            <ProductCard/>
        </div>
    )
}
export default Home