//import React from "react";
import { useNavigate } from "react-router-dom"

const NavbarPelangganCekStatus = () => {
    const history=useNavigate();
    let idUserLoggedIn
    const button1 = () => {
        history(`/Login`, {state:{idUserLoggedIn:idUserLoggedIn}});
    }
    return (
        <div className ='flex justify-between items-center h-24 max-w-[1920px] bg-[#F8EDE3]'>
            <button onClick={button1} className='rounded-full ml-10 py-2 w-full text-3xl font-bold text-[#798777] bg-[#FFFFFF] border-[#A2B29F] border-2 shadow-md shadow-[#798777] hover:bg-[#cccccc]'>Pesanan</button>
            <button className='rounded-full mx-10 py-2 w-full text-3xl font-bold text-[#FFFFFF] bg-[#C66666] border-[#883C3C] border-2 shadow-md shadow-[#D18A8A]'>Cek Status</button>
        </div>
    )
}

export default NavbarPelangganCekStatus