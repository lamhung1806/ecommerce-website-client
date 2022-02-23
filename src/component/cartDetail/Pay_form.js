import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOder } from "../../redux/actions/oderAction";
import { changeStatus } from "../../redux/actions/statusFormPayAction";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function Pay_form() {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.cartData);
  const [data, setData] = useState({
    nameUser: "",
    phone: "",
    address: "",
    userId: JSON.parse(localStorage.getItem("user")).id,
    status: false,
    products: listCart,
  });
  const handleBuy = (e) => {
    e.preventDefault();
    confirmAlert({
      title: "Xác nhận ",
      message: "Bạn chắc chắn muốn mua sản phẩm",
      buttons: [
        {
          label: "Xác Nhận",
          onClick: () => {
            dispatch(createOder(data));
            dispatch(changeStatus());
          },
        },
        {
          label: "Hủy",
        },
      ],
    });
  };
  return (
    <form className="pay  pay-form ">
      <div className="pay_input">
        <label>Họ tên người nhận</label>
        <input
          onChange={(e) => setData({ ...data, nameUser: e.target.value })}
          value={data.nameUser}
          name="name"
          type="text"
        ></input>
      </div>
      <div className="pay_input">
        <label>Địa chỉ</label>
        <input
          onChange={(e) => setData({ ...data, address: e.target.value })}
          value={data.address}
          name="address"
          type="text"
        ></input>
      </div>
      <div className="pay_input">
        <label>Số điện thoại</label>
        <input
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          value={data.phone}
          name="phone"
          type="text"
        ></input>
      </div>
      <button onClick={(e) => handleBuy(e)} className="btn btn-prymari btn-pay">
        Xác Nhận
      </button>
    </form>
  );
}

export default Pay_form;
