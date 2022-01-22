import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createCart } from "../../redux/actions/cartAction";

function Item({ data }) {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const newData = {
        userId: user.id,
        productId: data.id,
        quantity: 1,
      };
      dispatch(createCart(newData));
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="col l-2-4 m-4 c-6">
      <Link to={`product/${data.id}`} className="home-product-item">
        <div
          className="home-product-item__img"
          style={{
            backgroundImage: `url("data:image/jpeg;base64,${data.image}")`,
          }}
        />
        <h4 className="home-product-item__name">{data.name}</h4>
        <div className="home-product-item__price">
          <div className="home-product-item__price-old">
            {data.promotionPrice.toLocaleString()} VND
          </div>
          <div className="home-product-item__price-curen">
            {data.price.toLocaleString()} VND
          </div>
        </div>
        <div className="home-product-item__action">
          <span className="home-product-item__like home-product-item__like-liker">
            <i className="fas fa-heart home-product-item__like-like" />
            <i className="far fa-heart home-product-item__like-no-like" />
          </span>
          <div className="home-product-item__rateting">
            <i onClick={handleAddCart} className="fas fa-cart-plus"></i>
            {/* <i className="home-product-item__star-gold fas fa-star" />
                    <i className="home-product-item__star-gold fas fa-star" />
                    <i className="home-product-item__star-gold fas fa-star" />
                    <i className="home-product-item__star-gold fas fa-star" />
                    <i className="home-product-item__star-gold fas fa-star" /> */}
          </div>
          {/* <span className="home-product-item__sold">100</span> */}
        </div>
        <div className="home-product-item__origin">
          <span className="home-product-item__origin-brand"></span>
          <span className="home-product-item__origin-name"></span>
        </div>
        <div className="home-product-item__favourite">
          <i className="fas fa-check" />
          <span> Yêu thích</span>
        </div>
        {/* <div className="home-product-item__Sale">
                <span className="home-product-item__sale-persent">{this.props.value}</span>
                <span className="home-product-item__sale-lable">Giảm</span>
            </div> */}
      </Link>
    </div>
  );
}

export default Item;
