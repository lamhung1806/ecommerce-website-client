/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../redux/actions/cartAction';




function CartItem({datalistCart}) {
    const dispatch =useDispatch();
    const handleDelete=(e)=>{
        e.preventDefault();
     dispatch(deleteCart(datalistCart.id))
    }
    return (
        <li className="header-list-item">
            <img src={'data:image/jpeg;base64,'+datalistCart.image} alt="" className="header-list-img" />
            <div className="header-list-item__infor">
                <div className="header__cart-item-header">
                    <h5 className="header-list-item-name"></h5>
                    <div className="header__cart-item-header-wrap">
                        <span className="header-list-item-price">{datalistCart.price} đ</span>
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