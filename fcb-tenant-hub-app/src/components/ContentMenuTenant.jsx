//import React from "react";
import { useEffect } from "react";
import CardMenuTenant from "./elements/CardMenuTenant";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const ContentMenuTenant = () => {
  const location = useLocation();
  let idUserLoggedIn;
  try {
    idUserLoggedIn = location.state.idUserLoggedIn;
  } catch (error) {
    alert("anda harus login terlebih dahulu");
    window.location = "/Login";
  }
  const history = useNavigate();

  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:4000/menu/readmenu/${location.pathname.split("/")[2]}`)
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;
        setListMenu(responseAPI.data);
      })
      .catch(
        (err) => {
          console.log("error : ", err);
        },
        [location.pathname.split("/")[2]]
      );
  }, [location.pathname]);

  return (
    <div className="h-full bg-[#F8EDE3] relative">
      {/* Kolom pencarian */}
      <div className="flex justify-center">
        <input className="text-[#A3A3A3] h-[35px] border-[1px] border-[#A2B29F] pl-[10px] py-[px] mt-[10px] font-sm text-[15px] bg-white items center rounded-[15px] text-left min-w-[1000px]" placeholder="Cari nama menu"></input>
      </div>

      {/* Card */}
      <div className="min-h-[300px] pt-4 my-5 mx-[100px] h-[100px] flex flex-col bg-[#F8EDE3] rounded-[20px] overflow-y-auto">
        {listMenu.map((menu) => (
          <CardMenuTenant gambar={`http://localhost:4000/${menu.image}`} namaMakanan={menu.namamenu} harga={menu.harga} stok={menu.stok} key={menu._id}>
            {menu.namamenu}
          </CardMenuTenant>
        ))}
      </div>

      {/* Menambah menu  */}
      <button
        className="absolute ml-[1020px] bottom-3 bg-white px-2 py-2 rounded-full border-[2px] border-[#A2B29F] text-[#A2B29F] hover:bg-[#cccccc] text-base font-normal"
        onClick={() => history("/tambahmenu", { state: { idUserLoggedIn: idUserLoggedIn } })}
      >
        Tambah menu
      </button>
    </div>
  );
};

export default ContentMenuTenant;
