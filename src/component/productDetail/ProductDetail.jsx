import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { token } from '../../contain/contain';
import {createCart} from '../../redux/actions/cartAction';




function ProductDetail() {
const dispatch=useDispatch()
 let {id}=  useParams()   
 const [data, setData]=useState([])
 const [quantity,setQuantity]=useState(1)
 const url='https://localhost:44305/api/Products/GetById/'
 const user= useSelector(state=>state.login.dataUser)
 let history =useHistory()

 useEffect(() => {
     fetch(url+id)
     .then(response=>response.json())
     .then(data=>{
        setData(data)
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
      

             

                            <div style={{ marginTop: '200px' }} className="product">
                                <div className="row">
                                    <div className=" col l-6">
                                        <div className="product-img">
                                          
                                                   <div className="main-img" style={{ backgroundImage: `url("data:image/jpeg;base64, ${data.image}")` }}>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className="content-right col l-6">
                                        <div className="product-name">
                                            {data.name}
                                        </div>
                                        <div className="product-price">
                                            <div className="row">
                                                <div className="product-price__old ">{data.promotionPrice} đ</div>
                                                <div className="product-price__now ">{data.price} đ</div>
                                            </div>
                                        </div>
                                        <div className="product-color-wap">
                                            <div className="row">
                                                <div className="product-color col l-2">{data.color}</div>
                                                {/* <div className="product-color col l-2">white</div>
                                                <div className="product-color col l-2">red</div> */}
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
                                <div className="product__description">
                                    <div className="product__description-name">Mô tả sản phẩm</div>
                                    <div className="product__description-title">
                                       {data.description}
                                    </div>
                                    <div className="product__description-feature">
                                        <div className="product__description-feature-name">
                                            Thông số kĩ thuật:
                                        </div>
                                        <div className="description-feature">
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
               

            













         

        </div>
    );
}

export default ProductDetail;