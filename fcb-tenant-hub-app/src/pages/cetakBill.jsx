//import React from "react";
import NavbarKasirCetakBill from "../components/NavbarKasirCetakBill";
import ContentCetakBill from "../components/ContentCetakBill";
import Footer from "../components/Footer";

const CetakBillPage = () => {
    
    return (
        <div className="flex flex-col h-screen">
            <NavbarKasirCetakBill/>
            <ContentCetakBill/>
            <Footer/>
        </div>
        )
};

export default CetakBillPage;