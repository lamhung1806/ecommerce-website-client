/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-duplicate-props */
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../redux/actions/RegisterAction';
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import { ToastContainer, toast } from 'react-toastify';
import './style.css';
import axios from 'axios';
import { notifyError, notifySuccessTop } from '../../contain/msg';


function Register() {
      
  const dispatch = useDispatch();
    let history = useHistory();
  const [dataRegister,setDataRegister]=useState({
    email: '',
    userName: '',
    password:'',
    passwordFirst:'',
  })
  const[validateMsg, setValidateMsg]=useState({
        emailMsg:'',
        userNameMsg:'',
        passwordFirst:'',
        passwordMsg:'',
  })

  const validateAll=()=>{
      const msg={}
      if(isEmpty(dataRegister.email)){
        msg.emailMsg='Vui lòng nhập email'
      }
     else if(!isEmail(dataRegister.email)){
        msg.emailMsg='Vui lòng nhập đúng  email'
      }
      if(isEmpty(dataRegister.userName)){
        msg.userNameMsg='Vui lòng nhập tên'
      }
      if(isEmpty(dataRegister.passwordFirst)){
        msg.passwordFirstMsg='Vui lòng nhập mật khẩu'
      }
      if(isEmpty(dataRegister.password)){
        msg.passwordMsg='Vui lòng nhập mật khẩu'
      }
      if(dataRegister.password !== dataRegister.passwordFirst){
          msg.passwordMsg='Hai mật khẩu không khơp nhau'
      }
      setValidateMsg(msg)
      if(Object.keys(msg).length > 0){
          return true

      }
      else{
          return false
      }
      
      
     

  }
  

  const handleRegister=()=>{

    const validate= validateAll()
    if(validate) return
      const newData={
        email: dataRegister.email,
        username: dataRegister.userName,
        password:dataRegister.password,
      }
      
        axios
          .post("https://localhost:44305/api/Accounts/Register", newData)
          .then(() => {
            notifySuccessTop();
            setTimeout(()=>{

              history.push('/');
            }, 1000)
          })
          .catch(() => {
            notifyError();
          });
      
     
  };
  


    return (
        <React.Fragment>
            <ToastContainer
                     position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
            />
            <div className="main_from">
                <form className="form" id="form-1">
                    <h3 className="heading">Đăng kí tài Khoản</h3>
                    <div className="spacer" />
                    <div className="form-group">
                        <label htmlFor="fullname" className="form-label">Tên đầy đủ</label>
                        <input
                            onChange={e=>setDataRegister({...dataRegister,userName:e.target.value})} className="form-control" id="fullname" name="fullname" type="text" placeholder="VD: Lâm Văn Hùng" className="form-control" />
                        <span className="form-message">{validateMsg.userNameMsg}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input   
                           onChange={e=>setDataRegister({...dataRegister,email:e.target.value})} 
                        className="form-control" id="email" name="email" type="text" placeholder="VD: email@domain.com" className="form-control" />
                      <span className="form-message">{validateMsg.emailMsg}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                        <input 
                            onChange={e=>setDataRegister({...dataRegister,passwordFirst:e.target.value})} 
                            id="password" name="password" type="password" placeholder="Nhập mật khẩu" className="form-control" 
                            autoComplete="on"/>
                    <span className="form-message">{validateMsg.passwordFirstMsg}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password_confirmation" className="form-label">Nhập lại mật khẩu</label>
                        <input 
                           onChange={e=>setDataRegister({...dataRegister,password:e.target.value})} 
                        id="password_confirmation" name="password_confirmation" placeholder="Nhập lại mật khẩu" type="password" className="form-control" autoComplete="on" />
                  <span className="form-message"> {validateMsg.passwordMsg}</span>
                    </div>
                    <a onClick={handleRegister} type='button' className="form-submit">Đăng ký</a>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Register ;