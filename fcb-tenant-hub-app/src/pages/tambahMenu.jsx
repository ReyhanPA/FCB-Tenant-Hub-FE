import Footer from "../components/Footer";
import NavbarTenant from "../components/NavbarTenantMenu";
import Konten from "../components/ContentTambahMenu";

const TambahMenuPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <NavbarTenant/>,
            <Konten/>,
            <Footer/>
        </div>
    )
}

export default TambahMenuPage;