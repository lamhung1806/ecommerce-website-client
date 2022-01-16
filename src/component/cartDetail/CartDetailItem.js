/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCart, updateCart } from "../../redux/actions/cartAction";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { user } from "../../contain/contain";

function Cart_Description_item({ listCart }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(listCart.quantity);
  const disPatch = useDispatch();
  const deleteProduct = () => {
    confirmAlert({
      title: "Xác nhận ",
      message: "Bạn chắc chắn xóa sản phẩm",
      buttons: [
        {
          label: "Xác Nhận",
          onClick: () => disPatch(deleteCart(listCart.id)),
        },
        {
          label: "Hủy",
        },
      ],
    });
  };

  const updateDown = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity - 0);
    if (quantity > 1) {
      dispatch(
        updateCart({
          userId: user().id,
          productId: listCart.id,
          quantity: quantity - 1,
        })
      );
    } else {
      deleteProduct();
    }
  };
  const updateUp = () => {
    setQuantity(quantity + 1);
    dispatch(
      updateCart({
        userId: user().id,
        productId: listCart.id,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <tr className="Cart_description_wrap">
      <td className="Cart_description_value Cart_description_value-img">
        <img
          className="Cart_description_product_li-img"
          src={"data:image/jpeg;base64," + listCart.image}
        />
        <div className="name_product">{listCart.name} </div>
      </td>
      <td className="Cart_description_value"> {listCart.price} </td>
      <td className="Cart_description_value">
        <div className="product">
          <div className="quantity ">
            <div onClick={updateDown} className="quantity-down">
              -
            </div>

            <div className="quantity-value">{quantity}</div>
            <div onClick={updateUp} className=" quantity-up">
              +
            </div>
          </div>
        </div>
      </td>
      <td className="Cart_description_value">{listCart.price * quantity}</td>
      <td
        onClick={deleteProduct}
        className="Cart_description_value Cart_description_value-delete"
      >
        <i style={{ fontSize: "20px" }} className="fas fa-times"></i>
      </td>
    </tr>
  );
}

export default Cart_Description_item;
