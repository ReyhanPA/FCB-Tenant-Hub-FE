//import {Link} from "react-router-dom";
import React from 'react';
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';

const CardTenant = (props) => {
    const navigate = useNavigate();
    const {children = "Tanpa Nama", gambar = "gambar1.jpg", tautan = "/daftarmenu", nomormeja = '1'} = props
    CardTenant.propTypes = {
        children: PropTypes.node.isRequired,
        gambar: PropTypes.string.isRequired,
        tautan: PropTypes.string.isRequired,
        nomormeja : PropTypes.string.isRequired
    };
    return (
        <div className="w-[205px] h-[160px] mx-2.5 rounded-lg mt-5">
            <div className="h-full w-full relative">
                <img src={gambar} alt={gambar} className="h-full w-full rounded-lg border-2 border-[#8ea686]"/>
                <button onClick={() => navigate(tautan, {state: {nomormeja: nomormeja}})} className="h-2/6 w-full flex justify-center items-center bg-[#FFFFFF] rounded-lg border-2 border-[#8ea686] hover:bg-[#edebeb] absolute bottom-0 shadow-md shadow-[#8ea686] px-2">
                    <h1 className="font-semibold truncate">
                        {children}
                    </h1>
                </button>
            </div>
        </div>
    )
}

export default CardTenant