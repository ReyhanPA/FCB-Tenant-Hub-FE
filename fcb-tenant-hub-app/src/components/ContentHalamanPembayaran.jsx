//import React from "react"; 
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}

const ContentHalamanPembayaran = () => {
    const location = useLocation();

    // const navigate = useNavigate();
    let nomormeja
    try {
        nomormeja = location.state.nomormeja;    
    } catch (error) {
        alert('anda harus memasukkan nomor meja terlebih dahulu')
        window.location = '/MemasukkanNomorMeja';
    }
    const [menuPesanan, setMenuPesanan] = useState([]);

    console.log(nomormeja);
    
    useEffect(() => {
      Axios.get(`http://localhost:4000/pesanan/readpesananunique/${location.pathname.split("/")[2]}`)
        .then((result) => {
          // console.log("data API", result.data);
          const responseAPI = result.data;
          setMenuPesanan([responseAPI.data]);
          // console.log("menu pesanan : ", responseAPI.data);
          // console.log("lokasi : ", location.pathname.split("/")[2]);
          // console.log("id pesanan sebelum direturn : ", menuPesanan._id);
        })
        .catch((err) => {
          console.log("error : ", err);
        });
    }, [location.pathname, menuPesanan]);

    return (
        <div className="h-full">
            {/* tulisan Kode Unik Pembayaranmu! */}
            <div className="mt-8 flex justify-center">
                <h1 className="text-4xl text-[#798777] font-bold">KODE UNIK PEMBAYARANMU!</h1>
            </div>

            <div className="mt-8 flex justify-center">
                <h1 className="text-lg">Berikan kode berikut kepada kasir untuk melakukan pembayaran :</h1>
            </div>

            <div className="mt-8 flex justify-center">
                <h1 className="rounded-[10px] p-8 text-7xl font-bold text-center bg-[#E1EADD]">{location.pathname.split("/")[2]}</h1>
            </div>

            <div className="mt-8 flex justify-center">
                {menuPesanan.map((pesanan) => (
                    <h1 key={pesanan._id} className="rounded-[10px] p-2 text-3xl text-center bg-[#E1EADD]">{rupiah(pesanan.hargatotal)}</h1>
                ))}
            </div>

            {/* <div className="mt-8 flex justify-center">
                <h1 className="text-lg">Hore! Saat ini, pesananmu sedang :</h1>
            </div> */}

            {/* <div className="mt-8 flex justify-center">
                <h1 className="rounded-[20px] p-4 text-7xl text-center text-[#FFFFFF] bg-[#B2CCAE]">Dimasak</h1>
            </div> */}
            
        </div>
    )
}

export default ContentHalamanPembayaran