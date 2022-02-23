/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../redux/actions/cartAction';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 




function CartItem({datalistCart}) {
    const dispatch =useDispatch();
    const handleDelete=(e)=>{
        e.preventDefault();
        confirmAlert({
            title: 'Xác nhận ',
            message: 'Bạn chắc chắn xóa sản phẩm',
            buttons: [
              {
                label: 'Xác Nhận',
                onClick: () =>   dispatch(deleteCart(datalistCart.id))
              },
              {
                label: 'Hủy',
                
              }
            ]
          });
   
    }
    return (
        <li className="header-list-item">
            <img src={'data:image/jpeg;base64,'+datalistCart.image} alt="" className="header-list-img" />
            <div className="header-list-item__infor">
                <div className="header__cart-item-header">
                    <h5 className="header-list-item-name"></h5>
                    <div className="header__cart-item-header-wrap">
                        <span className="header-list-item-price">
                            {((datalistCart.price * (100 - parseInt(datalistCart.promotionPrice))) / 100 ).toLocaleString()} VND
                            </span>
                        <span className="header-list-item-multifly">x</span>
                        <span className="header-list-item-qnt">{datalistCart.quantity}</span>
                    </div>
                </div>
                <div className="header__cart-item-body">
                    <span className="header-list-item-description">
                        Phân loại: Bạc
                    </span>
                    <span onClick={(e)=>handleDelete(e)} className="header-list-item-delete">
                        Xóa
                    </span>
                </div>
            </div>
        </li>
    );
}

export default CartItem;