import CardItemMenu from "./elements/CardItemMenu";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const ContentCetakBill = () => {
    const location=useLocation();
    let idUserLoggedIn
    try {
        idUserLoggedIn = location.state.idUserLoggedIn;    
    } catch (error) {
        alert('anda harus login terlebih dahulu')
        window.location = '/Login';
    }

    const [dummy, setDummy] = useState([]);
    const [pesanan, setPesanan] = useState([]);
    const [idpesanan, setIdPesanan] = useState();
    const [nomormeja, setNomorMeja] = useState();
    const [response, setResponse] = useState();
    const [hargatotal, setHargaTotal] = useState(0);

    // console.log(`${location.pathname.split("/")[2]}`);
    
    //Algoritma get pesanan by id
    useEffect(() => {
      Axios.get(`http://localhost:4000/pesanan/readpesananunique/${location.pathname.split("/")[2]}`)
        .then(result => {
            console.log(result.data.data);
            const responseAPI = result.data.data;
            setResponse(responseAPI)
            setIdPesanan(responseAPI._id);
            setNomorMeja(responseAPI.nomormeja);
            setHargaTotal(responseAPI.hargatotal);
            setDummy([]);
            for (let i = 0; i < responseAPI.listmenu.length; i++) {
                dummy.push(Object(responseAPI.listmenu[i]));
            }
            console.log("isi : ", dummy)
            setPesanan(dummy);

        })
        .catch(err => {
            console.log('error : ', err);
        })
    }, [nomormeja])

    //Algoritma konversi number format rupiah
    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }

    //Algoritma handle untuk patch saat tekan tombol cetak bill
    const handleCetakBill = () => {
        if (idpesanan) {
            pesanan.map((item) => (
                item.statuspesanan = "Sedang Diantar"
                ));
            response.nomormeja = 0;
            response.listmenu = pesanan;
            console.log("isi response",response);
            Axios.patch(`http://localhost:4000/pesanan/updatepesanan/${idpesanan}`, response)
                .then(response => {
                    console.log('Pesanan berhasil diperbarui:', response.data);
                })
                .catch(error => {
                    console.error('Error saat memperbarui pesanan:', error);
                });
            Axios.patch(`http://localhost:4000/pesanan/updatenomormeja/${idpesanan}`, response)
                .then(response => {
                    console.log('Pesanan berhasil diperbarui:', response.data);
                })
                .catch(error => {
                    console.error('Error saat memperbarui pesanan:', error);
                });
            window.location.reload();
        }
    };

    return (
        <div className ='bg-[#F8EDE3] h-full'>
            <h1 className='my-2 text-2xl font-bold text-[#798777] ml-10'>Pembayaran</h1>

            {/* Kartu Pesanan */}
            <div className="w-auto justify-center my-3 mx-10 px-4 border-2 border-[#798777] rounded-lg shadow overflow-y-auto">
                <h1 className="text-xl font-bold text-[#798777]">Kode Unik : {idpesanan}</h1>
                <h2 className="text-lg font-semibold text-[#798777]">Nomor Meja : {nomormeja}</h2>
                <hr className="w-auto h-1 mx-auto my-2 bg-[#798777] rounded"></hr>
                {/* Item pesanan */}
                <div className="overflow-y-auto h-28">
                    
                    {/* ItemMenu Iterasi */}
                    {pesanan.map((item) => (
                           <CardItemMenu key={item._id} menu={item.namamenu} namaToko={item.namatenant} jumlah={item.jumlah} harga={item.harga*item.jumlah}></CardItemMenu>
                    ))}

                </div>
                <hr className="w-auto h-1 mx-auto my-2 bg-[#798777] rounded"></hr>
                <div className="flex justify-end font-bold">
                    <h2 className="text-lg mb-2 mx-6 text-[#798777]">Total Bayar</h2>
                    <h2 className="text-lg mb-2 px-4 border-2 border-[#798777] rounded-lg text-[#798777]">{rupiah(`${hargatotal}`)}</h2>
                </div>
            </div>

            {/* Tombol Cetak Bill */}
            <div className="mx-10 flex justify-end">
                <button type="button" onClick={handleCetakBill} className="flex w-auto bg-white font-semibold text-[#798777] rounded p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Cetak Bill</button>
            </div>
        </div>
    )
}

export default ContentCetakBill