//import {Link} from "react-router-dom"
import PropTypes from 'prop-types';
import React from 'react';

const CardItemMenu = (props) => {
    const {menu = "Nasi Goreng", namaToko= "Warung Pak Man", jumlah=2, harga=10000} = props
    
    CardItemMenu.propTypes = {
        menu: PropTypes.string.isRequired,
        namaToko: PropTypes.string.isRequired,
        jumlah: PropTypes.number.isRequired,
        harga: PropTypes.number.isRequired
    };

    // Fungsi Rupiah
    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }

    return (
        <div data-testid="test1" className="card flex">
            <div className="flex justify-start w-1/4">
                <h2 className=" text-lg mb-2 font-semibold text-[#798777]">{`${menu}`}</h2>
            </div>
            <div className="flex justify-center w-1/4">
                <h2 className=" text-lg mb-2 font-semibold text-[#798777]">{`${namaToko}`}</h2>
            </div>
            <div className="flex justify-center w-1/4">
                <h2 className=" text-lg mb-2 font-semibold text-[#798777]">{`${jumlah}`}</h2>
            </div>
            <div className="flex justify-end w-1/4">
                <h2 className=" text-lg mb-2 font-semibold text-[#798777]">{`${rupiah(harga)}`}</h2>
            </div>
        </div>
    )
}

export default CardItemMenu;
