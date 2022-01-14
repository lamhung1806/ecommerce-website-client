import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../contain/contain";
import { createOder } from "../../redux/actions/oderAction";
import { changeStatus } from "../../redux/actions/statusFormPayAction";

function Pay_form(props) {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.cartData);
  const [data, setData] = useState({
    nameUser: "",
    phone: "",
    address: "",
    status: false,
    useId: user.id,
    products: listCart,
  });
  const handleBuy = (e) => {
    e.preventDefault();
    dispatch(createOder(data));
    dispatch(changeStatus());
  };
  return (
    <form className="pay">
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
