//import React from "react";
import NavbarKasirDump from "../components/NavbarKasirDump";
import ContentDump from "../components/ContentDump";
import Footer from "../components/Footer";

const DumpKasirPage = () => {
    
    return (
        <div className="flex flex-col h-screen">
            <NavbarKasirDump/>
            <ContentDump/>
            <Footer/>
        </div>
        )
};

export default DumpKasirPage;