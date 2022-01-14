import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem'

import { Link } from 'react-router-dom';


function Cart() {
  const listProductCart=useSelector(state=>state.cart.cartData)

    return (


        <Link to="/cart" className="header-cart header-cart-icon">
            <div className="header-cart-wap">
                <input type="checkbox" hidden id="input-cart-check" />
                <label htmlFor="input-cart-check" className="fas fa-shopping-cart" />
                <label htmlFor="input-cart-check" className="header-cart-notice">{listProductCart.length}</label>
            
                <div className=" header-cart-list">

                    <h4 className="header-cart-heading">Sản phẩm đã thêm</h4>
                    <ul className="header-cart-list-item">
                        {
                            listProductCart.map((datalistCart,index) =>(
                                <CartItem key={index} datalistCart={datalistCart} />
                            ))
                       
                        }
                    </ul>
                    {/* <Link to='/cart' className="header__cart-view btn btn-prymari"> Xem giỏ hàng</Link> */}
                </div>
            </div>

        </Link>
    );
}

export default Cart;