import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserOder } from "../../redux/actions/userOder";
import ItemOder from "./ItemOder";
import "./YourOder.css";

function UserOder() {
  const dispatch = useDispatch();
  const oderList = useSelector((state) => state.userOder.oderList);
  useEffect(() => {
    dispatch(getUserOder());
  }, []);
  return (
    <>
      <div className=" oder_manager  ">
        <div className=" grid wide">
          <table className="oder_table">
            <thead>
              <tr className="table_head_list">
                <th className="table_head_item">Trạng thái</th>
                <th className="table_head_item">Họ tên người nhận</th>
                <th className="table_head_item">Số điện thoại </th>
                <th className="table_head_item">Đia chỉ</th>
                <th className="table_head_item">Thao thác</th>
              </tr>
            </thead>
            <tbody>
              {oderList.map((data) => (
                <ItemOder key={data.id} data={data} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserOder;
