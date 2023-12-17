import CardStatusPemesanan from "./elements/CardStatusPemesanan";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ContentStatusPemesanan = () => {
  const location = useLocation();
  let idUserLoggedIn;
  try {
    idUserLoggedIn = location.state.idUserLoggedIn;
  } catch (error) {
    alert("anda harus login terlebih dahulu");
    window.location = "/Login";
  }

  const [listPesanan, setPesanan] = useState([]);
  const [dummy, setDummy] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/pesanan/readpesanan")
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;
        for (let i = 0; i < responseAPI.data.length; i++) {
          for (let j = 0; j < responseAPI.data[i].listmenu.length; j++) {
            if (responseAPI.data[i].listmenu[j].idtenant == idUserLoggedIn) {
              if (dummy.indexOf(responseAPI.data[i]._id) === -1) {
                dummy.push(responseAPI.data[i]._id);
              }
            }
          }
        }
        setPesanan(dummy);
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  }, []);

  return (
    // Panggil semua data yang ada di database pesanan
    <div className="h-full overflow-y-scroll">
      {listPesanan.map((pesanan) => (
        <CardStatusPemesanan id={pesanan} idtenant={idUserLoggedIn}></CardStatusPemesanan>
      ))}
    </div>
  );
};

export default ContentStatusPemesanan;
