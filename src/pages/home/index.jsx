import React from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product-card";
import Banner from "../../components/banner";

const Home = () => {

    return(
        <div>
            <Navbar/>
            <Banner/>
            <ProductCard/>
        </div>
    )
}
export default Home