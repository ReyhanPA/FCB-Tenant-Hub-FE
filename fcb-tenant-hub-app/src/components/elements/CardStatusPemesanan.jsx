import React, { useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

const CardStatusPemesanan = (props) => {
  const { id = "error", idtenant = "error" } = props;

  // Ganti URL GET dengan endpoint yang sesuai untuk mendapatkan pesanan berdasarkan ID
  const getUrl = `http://localhost:4000/pesanan/readpesananunique/${id}`;

  // Ganti URL PATCH dengan endpoint untuk melakukan operasi PATCH
  const patchUrl = `http://localhost:4000/pesanan/updatepesanan/${id}`;

  // Lakukan permintaan GET untuk mendapatkan data pesanan berdasarkan ID

  CardStatusPemesanan.propTypes = {
    id: PropTypes.string.isRequired,
  };

  //Fungsi mengubah status
  // const datapesanan = getPesananById(id);
  // console.log(datapesanan);
  const [status, setStatus] = useState("");
  const handleClick1 = () => {
    setStatus("Sedang dimasak");
    setIsOpen(false);
  };
  const handleClick2 = () => {
    setStatus("Sedang diantar");
    setIsOpen(false);
  };
  const handleClick3 = () => {
    setStatus("Selesai");
    setIsOpen(false);
  };

  React.useEffect(() => {
    // Lakukan permintaan GET untuk mendapatkan data pesanan berdasarkan ID
    Axios.get(getUrl)
      .then((response) => {
        // Mendapatkan data pesanan dari respons
        const pesanan = response.data.data;
        setStatus(response.data.data.listmenu[0].statuspesanan);

        // Modifikasi data pesanan sesuai kebutuhan
        const updatedPesanan = pesanan.listmenu.map((menu) => {
          // Modifikasi atribut atau field yang diinginkan
          if (status != "" && menu.idtenant == idtenant) {
            menu.statuspesanan = status;
            setStatus(status);
          } else {
            console.error("Data pesanan atau listmenu kosong atau tidak terdefinisi.");
          }
          return menu;
        });

        // Mengupdate statuspesanan yang baru ke dalam data pesanan
        pesanan.listmenu = updatedPesanan;
        console.log(patchUrl);
        console.log(pesanan.listmenu);

        // Lakukan permintaan PATCH dengan data yang sudah dimodifikasi
        return Axios.patch(patchUrl, pesanan);
      })
      .then((patchResponse) => {
        console.log("Berhasil melakukan patch:", patchResponse.data);
        // Lakukan apa yang diperlukan setelah permintaan berhasil
      })
      .catch((error) => {
        console.error("Error: ", error);
        // Tangani kesalahan jika permintaan gagal
      });
  }, [getUrl, patchUrl, idtenant, status]);

  //Fungsi dropdown
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex justify-between rounded-[10px] my-8 mx-auto h-[100px] w-[1024px] bg-[#E1EADD]">
      <div className="">
        <h1 data-testid="idpesanan" className="ml-[30px] mt-[10px] font-bold text-center text-xl text-[#798777] ">Pesanan {id}</h1>
        <button className="rounded-[10px] ml-[20px] mt-[10px] px-2 font-normal text-center text-xl text-[#FFFFFF] bg-[#BCD8B7]">Lihat Detail Pesanan</button>
      </div>
      <h1 data-testid="idpesanan2" className="m-auto font-bold text-xl text-[#798777]">Status : {status}</h1>
      <div>
        <button className="rounded-[5px] mt-[35px] mr-[30px] px-2 font-normal text-xl text-[#FFFFFF] bg-[#A2B29F]" onClick={() => setIsOpen((prev) => !prev)}>
          Ubah Status
        </button>

        {isOpen && (
          <div className="rounded-[5px] mr-[30px] ml-[6px] font-normal text-sm text-[#FFFFFF]">
            <div>
              <button className="rounded-[5px] w-[110px] mt-[1px] py-[3px] text-center hover:bg-[#FFFFFF] hover:text-[#798777] bg-[#A2B29F]" onClick={handleClick1}>
                Sedang dimasak
              </button>
            </div>
            <div>
              <button className="rounded-[5px] w-[110px] mt-[1px] py-[3px] text-center hover:bg-[#FFFFFF] hover:text-[#798777] bg-[#A2B29F]" onClick={handleClick2}>
                Sedang diantar
              </button>
            </div>
            <div>
              <button className="rounded-[5px] w-[110px] mt-[1px] py-[3px] text-center hover:bg-[#FFFFFF] hover:text-[#798777] bg-[#A2B29F]" onClick={handleClick3}>
                Selesai
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardStatusPemesanan;
