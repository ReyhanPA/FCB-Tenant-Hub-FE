import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const ContentLogin = () => {

    const history=useNavigate();
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let loginBerhasil = false
    let idUserLoggedIn 

    async function submit(e){
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/auth/login/", {
                username,
                password
            })
            .then(res=>{
                if(res.data.message=="Login Berhasil"){
                    idUserLoggedIn = res.data.data._id;
                    history('/kelolaAkunTenant',{state:{idUserLoggedIn:idUserLoggedIn}});
                    loginBerhasil = true;
                } else {
                    // alert('username atau password salah!! ')
                }
            })
            .catch(e=>{
                alert('wrong details!')
                console.log(e);
            })
        } catch (e) {
            console.log(e);
        }
        
        try {
            await axios.post("http://localhost:4000/tenant/logintenant/", {
                username,
                password
            })
            .then(res=>{
                if(res.data.message=="Login Berhasil"){
                    idUserLoggedIn = res.data.data._id;
                    history(`/daftarmenutenant/${idUserLoggedIn}`, {state:{idUserLoggedIn:idUserLoggedIn}});
                    loginBerhasil = true;
                } else {
                    // alert('username atau password salah!! ')
                }
            })
            .catch(e=>{
                alert('wrong details!')
                console.log(e);
            })
        } catch (e) {
            console.log(e);
        }
        if (!loginBerhasil){
            alert('username atau password salah!! ')
        }
    }

    return (
        <div className='flex justify-center align items-center h-full'>
            <div className ='h-96 w-96 bg-[#BDD2B6]'>
                <div className='my-4 flex justify-center align items-center'>
                    <h1 className='text-2xl font-bold text-[#000000]'>Login Page</h1>
                </div> 
                <form action="POST">
                    <h1 className="mx-[102px] font-semibold text-sm">Username : </h1>
                    <div className="my-2 flex justify-center">
                        <input id="username" type="username" className="text-center h-10 shadow-md shadow-[#798777]" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <h1 className="mx-[102px] font-semibold text-sm">Password : </h1>
                    <div className="my-2 flex justify-center">
                        <input id='password' type="password" className="text-center h-10 shadow-md shadow-[#798777]" onChange={(e) => setPassword(e.target.value)}/>
                    </div>           
                    <div className="my-8 flex justify-center">
                        <button className='rounded-full h-10 w-36 text-2xl font-bold text-[#798777] bg-[#F8EDE3] shadow-md shadow-[#798777] hover:bg-[#e3d9d0]' onClick={submit}>Login</button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <a href="MemasukkanNomorMeja" className='text-sm font-semibold hover:font-bold'>Mau pesan? Klik ini</a>
                </div> 
            </div>          
        </div>
    )
}

export default ContentLogin