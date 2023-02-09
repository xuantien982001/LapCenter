import React from "react";
import HashLoader from 'react-spinners/HashLoader'

const Loader = ({loading}) => {
return(
    <div className="w-screen h-screen flex items-center justify-center">
        <HashLoader color="gray" loading = {loading}/>
    </div>
)}
export default Loader

