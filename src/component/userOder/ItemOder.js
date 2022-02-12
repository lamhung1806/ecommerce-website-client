import React from "react";
import { Link } from "react-router-dom";
import { oderstatus } from "../../contain/contain";

function ItemOder({ data }) {
  return (
    <>
      <tr className="table_body_list">
        <td className="table_body_item">{oderstatus(data.status).msg}</td>
        <td className="table_body_item">{data.nameUser}</td>
        <td className="table_body_item">{data.phone}</td>
        <td className="table_body_item">{data.address}</td>
        <td className="table_body_item">
          <Link to={`/youroder/detail/${data.id}`}>
            <button className="btn cancel_oder">Chi tết đơn hàng</button>
          </Link>
        </td>
      </tr>
    </>
  );
}

export default ItemOder;
