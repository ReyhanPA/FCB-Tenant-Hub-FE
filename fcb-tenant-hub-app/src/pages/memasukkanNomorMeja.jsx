//import React from "react";
import NavbarPelanggan from "../components/NavbarPelanggan";
import ContentMemasukkanNomorMeja from "../components/ContentMemasukkanNomorMeja";
import Footer from "../components/Footer";

const MemasukkanNomorMejaPage = () => {
    return (
        <div className='flex flex-col h-screen'>
            <NavbarPelanggan/>
            <ContentMemasukkanNomorMeja/>
            <Footer/>
        </div>
    )
};

export default MemasukkanNomorMejaPage