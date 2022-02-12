/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { cancelOder, getDetailUserOder } from "../../redux/actions/userOder";

function Oderdetails(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const detailOderList = useSelector((state) => state.userOder.detailOderList);
  let { id } = useParams();
  useEffect(() => {
    dispatch(getDetailUserOder(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const handleCancleOder = () => {
    dispatch(cancelOder(id));
    history.goBack();
  };

  const totalPrice = () => {
    if (detailOderList.products) {
      const total = detailOderList.products.reduce((init, data) => {
        return (init += data.price * data.quantity);
      }, 0);
      return total;
    } else return 0;
  };

  return (
    <>
      <div className=" oder_manager  ">
        <div className=" grid wide">
          <table className="oder_table">
            <thead>
              <tr className="table_head_list">
                <th className="table_head_item">Tên sản phẩm</th>
                <th className="table_head_item">Hình ảnh</th>
                <th className="table_head_item">Số lượng</th>
                <th className="table_head_item">Giá tiền</th>
              </tr>
            </thead>
            <tbody>
              {detailOderList.products &&
                detailOderList.products.map((data) => (
                  <tr key={data.id} className="table_body_list">
                    <td className="table_body_item">{data.name}</td>
                    <td className="table_body_item">
                      <img
                        className="oder_img_product"
                        src={`data:image/jpeg;base64,${data.image}`}
                      />
                    </td>
                    <td className="table_body_item">{data.quantity}</td>
                    <td className="table_body_item">
                      {data.price.toLocaleString()} đ
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="wrap_total_price">
            <div className="total_price">
              Tổng tiền phải thanh toán : {totalPrice().toLocaleString()} đ
            </div>
            <div className="table_body_item">
              <button onClick={handleCancleOder} className="btn cancel_oder">
                Hủy đơn hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Oderdetails;
