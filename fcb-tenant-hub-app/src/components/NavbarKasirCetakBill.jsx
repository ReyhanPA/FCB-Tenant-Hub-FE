//import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavbarKasirCetakBill = () => {
    const location=useLocation();
    let idUserLoggedIn
    try {
        idUserLoggedIn = location.state.idUserLoggedIn;    
    } catch (error) {
        alert('anda harus login terlebih dahulu')
        window.location = '/Login';
    }
    const history=useNavigate();

    const button1 = () => {
        history('/kelolaakuntenant', {state:{idUserLoggedIn:idUserLoggedIn}});
    }
    const button2 = () => {
        history('/riwayatpemesanan', {state:{idUserLoggedIn:idUserLoggedIn}});
    }

    return (
        <div className ='flex justify-between items-center h-24 max-w-[1920px] bg-[#F8EDE3]'>
            <button onClick={button1} className='flex justify-center rounded-full my-7 ml-10 py-1 w-full text-3xl font-bold text-[#798777] bg-[#FFFFFF] border-[#A2B29F] border-2 shadow-md shadow-[#798777] hover:bg-[#cccccc]'>Kelola Akun Tenant</button>
            <button onClick={button2} className='flex justify-center rounded-full my-7 mx-5 py-1 w-full text-3xl font-bold text-[#798777] bg-[#FFFFFF] border-[#A2B29F] border-2 shadow-md shadow-[#798777] hover:bg-[#cccccc]'>Riwayat Pemesanan</button>
            <button className='rounded-full my-7 mr-10 py-1 w-full text-3xl font-bold text-[#FFFFFF] bg-[#C66666] border-[#883C3C] border-2 shadow-md shadow-[#D18A8A] hover:bg-[#773d3d]'>Cetak Bill</button>
        </div>
    )
}

export default NavbarKasirCetakBill