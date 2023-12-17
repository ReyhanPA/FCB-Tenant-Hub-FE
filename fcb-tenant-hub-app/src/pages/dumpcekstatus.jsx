//import React from "react";
import NavbarPelangganCekStatus from "../components/NavbarPelangganCekStatus";
import ContentDump from "../components/ContentDump";
import Footer from "../components/Footer";

const DumpCekStatusPage = () => {
    return (
        <div className='flex flex-col h-screen'>
            <NavbarPelangganCekStatus/>
            <ContentDump/>
            <Footer/>
        </div>
    )
};

export default DumpCekStatusPage
