import React from "react";
import pagenotfound from "../../assets/images/pagenotfound.jpeg"
import { useNavigate } from "react-router-dom";

const PageNoteFound = () => {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div>
                <img src={pagenotfound} alt="not-found" bg="none" className="w-[400px] h-auto" />
                <p className="mt-4 font-bold text-2xl text-center">Page Not Found</p>
                <div onClick= {() =>navigate('/')} className="w-[100px] bg-slate-400 m-auto mt-4 p-2 rounded hover:bg-slate-500">
                    <p className="text-center text-white font- font-semibold">Go home</p>
                </div>
            </div>
        </div>


    )
}
export default PageNoteFound