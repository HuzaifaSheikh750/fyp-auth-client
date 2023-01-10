import React,{useEffect} from 'react'
import { Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {useCookies} from 'react-cookie'

const Secret = () => {
  const navigate=useNavigate()

  const [cookies, setCookie, removeCookie]= useCookies([]);
  useEffect (()=>{
    const veriftUser=async ()=>{
      if(!cookies.jwt){
        navigate('/login')
      }else{
        const {data} =await axios.post(
          "http://localhost:8000",
          {},
          {withCredentials:true}
        );
        if(!data.status){
          removeCookie('jwt');
          navigate("/login");
        }else toast(`HI ${data.user}`, {theme:"dark"})
      }
    };
    veriftUser();
  },[cookies, navigate, removeCookie]);

  const logout=()=>{
    removeCookie("jwt")
    navigate("/register")
  }


  return (
    <>
    <div style={{ textAlign:'center', }}>
        <p style={{color:'red'}}>secret</p>
        <button onClick={logout}>log Out</button>
    </div>
    <ToastContainer/>
  </>
  )
}

export default Secret