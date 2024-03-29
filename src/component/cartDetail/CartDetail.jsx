/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, {useEffect } from 'react';
import Cart_Description_item from './CartDetailItem';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import Pay_form from './Pay_form';
import { changeStatus } from '../../redux/actions/statusFormPayAction';
import { getDataCart } from '../../redux/actions/cartAction';
import { user } from '../../contain/contain';
function Cart_Description() {
    const dispatch = useDispatch()
    const statusPayForm= useSelector(state=> state.statusFormReducer.status)
    const listCart =useSelector(state=> state.cart.cartData)
useEffect(() =>{
    if (user()) {
        dispatch(getDataCart(user()))
      }
      sum()
},[])
    const handleBuy =()=>{
        dispatch(changeStatus())
    }
const sum=()=>{
    const sum= (listCart ).reduce((initial,data)=>{
        return initial + ((data.price * (100 - parseInt(data.promotionPrice))) /100) * data.quantity
    },0)
    return sum
}

  
    return (


        <div className="main-Cart_description grid wide">
           
                <div className="Cart_description_wap">
                <table className="Cart_description">
                    <tbody className="Cart_description-scoll">
                        <tr className="Cart_description_title ">
                            <th className="Cart_description_title-item ">Tên sản phẩm</th>
                            <th className="Cart_description_title-item ">Đơn giá</th>
                            <th className="Cart_description_title-item ">Số lượng</th>
                            <th className="Cart_description_title-item ">Tổng tiền</th>
                            <th className="Cart_description_title-item ">Thao tác</th>

                        </tr>

                        { 
            
                      (listCart).map((listCart,index) => (

                                <Cart_Description_item key={index} listCart={listCart}/>
                            )
                        )
                        }

                    </tbody>
                </table>
                </div>
                
                <div className="pay">
                    <div className="row">
                        <div className="pay_sum">
                            <h2>Tổng số tiền phải thanh toán:</h2>
                            <h2 className="pay_sum-price">{sum().toLocaleString()} VND</h2>
                        </div>
                        {!statusPayForm &&  <button onClick={handleBuy} style={{marginLeft: '20px'}} className="btn btn-prymari btn-pay"> Mua hàng </button>}


                    </div>
                </div>
                {statusPayForm && <Pay_form/>}

           
        </div>
    );
}

export default Cart_Description;