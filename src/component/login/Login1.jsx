import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import './style.css'
import axios from 'axios';
import{setDataUser} from '../../redux/actions/loginAction'
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';


function Sigin() {
    const passElement = useRef();
    const notify = () => toast.warn('Sai tài khoản hoặc mật khẩu', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    const dispatch =useDispatch();
        let history=useHistory()
        const [dataLogin,setDataLogin]=useState({
            email:'',
            password:'',
    })

    const [validateMsg,setValidateMsg]=useState({
        email:'',
        password:'',
    })
    const validateAll=() => {
        const msg={}
        if(isEmpty(dataLogin.email)){
            msg.email='Vui lòng nhập  email'
        }
        else if(!isEmail(dataLogin.email)){
            msg.email='Vui lòng nhập đúng  email'
        }
        if(isEmpty(dataLogin.password)){
            msg.password='Vui lòng nhập  mật khẩu'
        }
        setValidateMsg(msg)
        if(Object.keys(msg).length >0 ){
            return true
        }
        else{
            return false
        }

    }
 
 const getToken = (dataLogin) => (dispatch) => {
    axios
      .post("https://localhost:44305/api/Accounts/Login", dataLogin)
  
      .then((response) => {
        localStorage.setItem("token", response.data);
      
        dispatch(setDataUser());
      
            history.push('/');
            window.location.reload();
        })
       
        
  
      .catch((err) => {
        notify()
      });
  };
 const handleLogin=  (e)=>{
    e.preventDefault();
    const validate=   validateAll()
    if(validate) return;

    dispatch(getToken(dataLogin));
 }
 
 const handleKeyDownEmail=(e)=>{
    if(e.which===13){
        passElement.current.focus()
    }
  } 
  const handleKeyDownPass=(e)=>{
    if(e.which===13){
        handleLogin(e)
    }
  } 
      
      
  
    return (
        <div>
            <ToastContainer position="top-center"
               autoClose={2000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
                 />

            <div className="main_from">
                <form  method="POST" className="form" id="form-1">
                    <h3 className="heading">Login</h3>
                    <div className="spacer" />

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                        onKeyDown={handleKeyDownEmail}
                        onChange={(e)=>{setDataLogin({...dataLogin,email:e.target.value})}}
                         value={dataLogin.email}
                          id="email" name="email" type="text" placeholder="VD: email@domain.com" className="form-control" />
                        <span className="form-message">{validateMsg.email}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            onKeyDown={handleKeyDownPass}
                            ref={passElement}
                            onChange={(e)=>{setDataLogin({...dataLogin,password:e.target.value})}}
                            value={dataLogin.password} 
                          type="password" placeholder="Nhập mật khẩu" className="form-control"
                          autoComplete="on" 
                         />
                        <span className="form-message">{validateMsg.password}</span>
                    </div>

                    <Link to="/register" className="form-submit_login ">Đăng kí</Link>
                    <Link onClick={(e)=>handleLogin(e)} to='/'   className="form-submit">Đăng nhập</Link>
                </form>
            </div>
        </div>
    );
}

export default Sigin;