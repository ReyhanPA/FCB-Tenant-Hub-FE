import React from 'react';
import PropTypes from 'prop-types';

const CardMenuTenant = (props) => {
    // eslint-disable-next-line react/prop-types
    const {gambar = "../public/assets/gambar1.jpg", namaMakanan = "Tanpa Nama", harga = "-", stok = "-"} = props
    CardMenuTenant.PropTypes = {
        gambar: PropTypes.node.isRequired,
        namaMakanan: PropTypes.string.isRequired,
        harga: PropTypes.number.isRequired,
        stok: PropTypes.number.isRequired
    }
    return (
        <div className="mx-auto flex justify-center h-[105px] w-[900px] bg-[#E1EADD] rounded-[20px] my-[10px] justify-beetwen">
            <picture>
                <img className=" w-[137px] rounded-l-[20px]" src={gambar} alt={gambar}/>
            </picture>
            <div className="w-[500px] ml-[25px]">
                <h1 className="mt-[5px] text-4xl font-bold">{namaMakanan}</h1>
                <p className="text-sm">Harga makanan : Rp {harga}</p>
                <p className="text-sm">Stok : {stok}</p>
            </div>
            <div className="mr-[60px] flex justify-center items-center">
                <button type="button" className="mb-2 px-8 bg-[#C66666] font-sm text-center rounded-[20px] text-white hover:bg-[#9e5252] focus:outline-none focus:ring-4 focus:ring-[#d18585]">Edit</button>
            </div>
        </div>
    )
}

export default CardMenuTenant

