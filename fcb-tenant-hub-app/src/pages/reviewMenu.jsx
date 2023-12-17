import NavbarPelanggan from "../components/NavbarPelanggan";
import ContentReviewMenu from "../components/ContentReviewMenu";
import Footer from "../components/Footer";

const ReviewMenuPage = () => {
    return (
        <div className='flex flex-col h-screen'>
            <NavbarPelanggan/>
            <ContentReviewMenu/>
            <Footer/>
        </div>
    )
};

export default ReviewMenuPage