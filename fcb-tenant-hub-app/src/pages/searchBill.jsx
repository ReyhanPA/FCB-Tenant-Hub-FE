//import React from "react";
import NavbarKasirCetakBill from "../components/NavbarKasirCetakBill";
import ContentSearchBill from "../components/ContentSearchBill";
import Footer from "../components/Footer";

const SearchBillPage = () => {
    
    return (
        <div className="flex flex-col h-screen">
            <NavbarKasirCetakBill/>
            <ContentSearchBill/>
            <Footer/>
        </div>
        )
};

export default SearchBillPage;