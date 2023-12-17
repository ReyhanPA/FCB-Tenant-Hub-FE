//import React from "react";
import NavbarPelanggan from "../components/NavbarPelanggan";
import ContentLogin from "../components/ContentLogin";
import Footer from "../components/Footer";

const LoginPage = () => {
    return (
        <div className='flex flex-col h-screen'>
            <NavbarPelanggan/>
            <ContentLogin/>
            <Footer/>
        </div>
    )
};

export default LoginPage
