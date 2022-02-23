/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { token } from '../../contain/contain';
import {createCart} from '../../redux/actions/cartAction';
import {getAProduct} from '../../redux/actions/productAction'
import clsx from  'clsx';
import style from './Productdetails.module.css'
import axios from 'axios';
import { notifyNoProduct } from '../../contain/msg';




function ProductDetail() {
const dispatch=useDispatch()
 let {id}=  useParams()   
 const [data, setData]=useState({
     price:0,
 })
 const [quantity,setQuantity]=useState(1)
 const url='https://localhost:44305/api/Products/GetById/'
 const user= useSelector(state=>state.login.dataUser)
 let history =useHistory()
 
 const [active, setActive] = useState({
     white:'',
     black:'',
     red:'',
     gold:'',
     blue:'',
 })
 const [activeSize, setActiveSize] = useState({
    sixtyFour:'',
    twoHundredFiftySix:'',
    fiveHndred :'',
    oneMillion:'',
    oneHundredTwentyEight:'',
   
 })
 const handleSearchWhite = async () =>{
    try {

        const response = await axios.get(`https://localhost:44305/api/Products/GetByColor/white/${data.name}/${data.size}`)
        if(response.data.name)  {
            setData(response.data.name)
            history.push(`/product/${response.data.id}`)
        } 
        else {
            notifyNoProduct()
      
        }
    }
    catch {
        console.log('Error: ');
    }
 }

const handleSearchBlack =async ()=>{
    try {
        const response = await axios.get(`https://localhost:44305/api/Products/GetByColor/black/${data.name}/${data.size}`)
        if(response.data.name)  {
            setData(response.data.name)
            history.push(`/product/${response.data.id}`)
        } 
        else {
            notifyNoProduct()
        }
    }
    catch {
        console.log('Error: ');
    }
}
const handleSearchRed =async ()=>{
    try {
        const response = await axios.get(`https://localhost:44305/api/Products/GetByColor/red/${data.name}/${data.size}`)
        
        if(response.data.name)  {
            setData(response.data.name)
            history.push(`/product/${response.data.id}`)
        } 
        else {
            notifyNoProduct()
        }
    }
    catch {
        console.log('Error: ');
    }
}
    
const handleSearchGold =async ()=>{
    try {

        const response = await axios.get(`https://localhost:44305/api/Products/GetByColor/gold/${data.name}/${data.size}`)
        
        if(response.data.name)  {
            setData(response.data.name)
            history.push(`/product/${response.data.id}`)
        } 
        else {
            notifyNoProduct()

        }
    }
    catch {
        console.log('Error: ');
    }
}
const handleSearchBlue =async ()=>{
    try {

        const response = await axios.get(`https://localhost:44305/api/Products/GetByColor/blue/${data.name}/${data.size}`)
        
        if(response.data.name)  {
            setData(response.data.name)
            history.push(`/product/${response.data.id}`)
        } 
        else {
            notifyNoProduct()

        }
    }
    catch {
        console.log('Error: ');
    }
}

 useEffect(() => {
     dispatch(getAProduct(id))
     fetch(url+id)
     .then(response=>response.json())
     .then(data=>{
        setData(data)
        switch (data.color) {
            
            case 'white':
                setActive({
                    white: true
                })
                break;
        
            case 'black':
                setActive({
                    black: true
                })
                break;
        
            case 'red':
                setActive({
                    red: true
                })
                break;
        
            case 'gold':
                setActive({
                    gold: true
                })
                break;
        
            case 'blue':
                setActive({
                    blue: true
                })
                break;
        
            default:
                break;
        }
        switch (data.size) {
            
            
            case '64gb':
                setActiveSize({...active,sixtyFour:true})
                break;
        
            case '128gb':
                setActiveSize({...active,oneHundredTwentyEight:true})
                break;
        
            case '256gb':
                setActiveSize({...active,twoHundredFiftySix:true})
                break;
        
            case '500gb':
                setActiveSize({...active,golfiveHndredd:true})
                break;
        
            case '1T':
                setActiveSize({...active,oneMillion:true})
                break;
        
            default:
                break;
        }
    
     })
     .catch(err=>{console.log(err);})
 },[id])
    

const quantityUp=()=>{
    setQuantity(quantity+1)
}
  
const quantityDown=()=>{
quantity>1 ? setQuantity(quantity-1) : setQuantity(quantity-0)
}
  
const addCart=()=>{

    if(token()){

        const newData={ 
            userId:user.id,
            productId:data.id,
            quantity:quantity
      
      
        }
      dispatch(createCart(newData))
    }
    else{
        history.push('/login')
    }
  
}

const handleSearchsize = async (e) =>{
    try {

        const response = await axios.get(`https://localhost:44305/api/Products/GetBySize/${e.target.innerText}/${data.name}/${data.color}`)
        
        if(response.data.name)  {
            setData(response.data.name)
            history.push(`/product/${response.data.id}`)
        } 
        else {
            notifyNoProduct()

        }
    }
    catch {
        console.log('Error: ');
    }
}

    return (
        <div className="grid wide">
            <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            size={false}
           
            />
      

             

                            <div  className="product product_details">
                                <div className="row">
                                    <div className=" col l-6">
                                       {data.image &&
                                             <div className="product-img">
                                          
                                             <div className="main-img" style={{ backgroundImage: `url("data:image/jpeg;base64, ${data.image}")` }}>
                                      </div>
                                     
                                  </div>
                                       }
                                       
                                    </div>
                                    <div className="content-right col l-6">
                                        <div className="product-name">
                                            {data.name}
                                        </div>
                                        <div className="product-price">
                                            <div className="row">
                                                <div className="product-price__old ">{data.price ? data.price.toLocaleString() : 0} đ</div>
                                                <div className="product-price__now "> {(
                                        (data.price * (100 - parseInt(data.promotionPrice))) / 100 ).toLocaleString()}đ</div>
                                            </div>
                                        </div>
                                        <div className="product-color-wap">
                                            <div   className="row">
                                                <div onClick={handleSearchWhite} className={clsx('product-color','col l-2', {[style.active]: active.white} )}>Trắng</div>
                                                <div  onClick={handleSearchBlack}  className={clsx('product-color','col l-2', {[style.active]:active.black} )}>Đen </div>
                                                <div  onClick={handleSearchRed}   className={clsx('product-color','col l-2', {[style.active]:active.red} )}>Đỏ</div>
                                                <div  onClick={handleSearchGold}  className={clsx('product-color','col l-2', {[style.active]:active.gold} )}>Vàng</div>
                                                <div onClick={handleSearchBlue}  className={clsx('product-color','col l-2', {[style.active]:active.blue} )}>Xanh</div>
                                            </div>
                                        </div>
                                        <div className="product-color-wap">
                                         <div className="row">
                                                <div onClick={handleSearchsize} className={clsx('product-color','col l-2', {[style.active]: activeSize.sixtyFour} )}>64gb</div>
                                                <div   onClick={handleSearchsize}  className={clsx('product-color','col l-2', {[style.active]:activeSize.oneHundredTwentyEight} )}>128gb </div>
                                                <div onClick={handleSearchsize}   className={clsx('product-color','col l-2', {[style.active]:activeSize.twoHundredFiftySix} )}>256gb</div>
                                                <div onClick={handleSearchsize}  className={clsx('product-color','col l-2', {[style.active]:activeSize.fiveHndred} )}>500gb</div>
                                                <div onClick={handleSearchsize}  className={clsx('product-color','col l-2', {[style.active]:activeSize.oneMillion} )}>1T</div>
                                            </div>
                                        </div>
                                        <div className="product-quantity">
                                            <div className="product-quantity__name">
                                                Số Lượng
                                            </div>
                                            <div className=" up-down__quatity">
                                                <div onClick={quantityDown}
                                                    className="product-quantity__up">
                                                    -
                                                </div>
                                                <div className="product__quantity">
                                                   {quantity}
                                                </div>
                                                <div onClick={quantityUp} className="product-quantity__down">
                                                    +
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-options">
                                            <div onClick={addCart}  className="product-options__cart">
                                                <i  className="fas fa-cart-plus" />
                                                Thêm Vào Giỏ hàng
                                            </div>
                                            <div className="product-options__buy">
                                                Mua Ngay
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={clsx(('product__description', style.productDescription))}>
                                    <div className="product__description-name">Mô tả sản phẩm</div>
                                    <div className="product__description-title">
                                       {data.description}
                                       <div className="product__description-feature-name">
                                       Thông số kĩ thuật: Bộ nhớ:  {data.size}
                                        </div>
                                    </div>
                                    <div className="product__description-feature">
                                       
                                        <div className="description-feature">
                                        </div>
                                    </div>
                                </div>
                            </div>
    

        </div>
    );
}

export default ProductDetail;